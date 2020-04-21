import React from 'react';
import Measure from 'react-measure';
import classNames from 'classnames';
import { History } from 'history';
import { Icon } from 'react-icons-kit';
import { circleONotch } from 'react-icons-kit/fa/circleONotch';
import { refresh } from 'react-icons-kit/fa/refresh';
import { gear } from 'react-icons-kit/fa/gear';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import queryString from 'query-string';
import Tippy from '@tippy.js/react';
import { enter } from 'react-icons-kit/iconic/enter';
import { exit } from 'react-icons-kit/iconic/exit';
import Modal from 'react-modal';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { withCookies } from 'react-cookie';
import { micA } from 'react-icons-kit/ionicons/micA';
import { stop } from 'react-icons-kit/fa/stop';
import { loadNextAyah, clearNextAyah } from '../../store/actions/ayahs';
import { injectIntl, InjectedIntl } from 'react-intl';
import AudioStreamer from '../../helpers/AudioStreamer';
import { getSurahName } from '../../helpers/ayahs';
import TranscribeAyah from './TranscribeAyah';
import RecordingButton from '../../components/RecordingButton';
import Navbar from '../../components/Navbar';
import SocialLinksFooter from '../../components/SocialLinksFooter';
import {
  Container,
  TranslationWrapper,
  FooterWrapper,
  ControlsWrapper,
  ToggleButtonWrapper,
  TranslationModeWrapper,
  videoModalStyles,
} from './styles';
import { VideoWrapper } from '../AboutPage/styles';
import humps from 'humps';
import { connect } from 'react-redux';
import { sumbitRecitedAyah } from '../../api/profile';
import ReduxState from '../../types/GlobalState';
import ReactPlayer from 'react-player';
import ToggleButton from '../../components/ToggleButton';
import { setRecognitionResults } from '../../store/actions/recognition';
import config from '../../../config';
import RecordingError from '../../components/RecordingError';
import KEYS from '../../locale/keys';
import T from '../../components/T';
import Fullscreen from 'react-full-screen';
import io from 'socket.io-client';
import Socket = SocketIOClient.Socket;
import IAyahShape from '../../shapes/IAyahShape';
import { fetchSurah, fetchSpecificAyah } from '../../api/ayahs';
import surahs from '../../api/surahs';
import ReadingMode from './ReadingMode';
import { isIOSEmbeddedBrowser } from '../../helpers/browserUtils';

interface IOwnProps {
  history: History;
  intl: InjectedIntl;
  voiceServer: string;
  nextAyah: IAyahShape;
}

export interface ISurahPage {
  first: number;
  last: number;
  ayahs: IAyahShape[];
}

export interface ICurrentSurah {
  [key: string]: ISurahPage;
}

interface IState {
  isRecording: boolean;
  isTranslationMode: boolean;
  isVideoModalOpen: boolean;
  partialQuery: string;
  query: string; // TODO: Is this used?
  isLoading: boolean;
  showErrorMessage: boolean;
  errorMessage: string | JSX.Element;
  fullScreen: boolean;
  currentAyah: IAyahShape & { surahName: string };
  previousAyahs: IAyahShape[];
  currentTranscribedIndex?: number;
  ayahFound: boolean;
  isAyahCompleted: boolean;
  isSurahCompleted: boolean;
  currentSurah?: ICurrentSurah;
  dimensions: {
    width: number;
  };
}

interface IStateProps {
  nextAyah: IAyahShape;
  isMemorizationMode: boolean;
  isAuthenticated: boolean;
}

interface IDispatchProps {
  setRecognitionResults(result: any): void;
  loadNextAyah(currentAyah: IAyahShape): void;
  clearNextAyah(): void;
}

interface ISpeechResult {
  text: string;
  isFinal: boolean;
}

type IProps = IOwnProps & IDispatchProps & IStateProps;

interface IAyahFound {
  ayahNum: number;
  surahNum: number;
  ayahWords: string[];
}

interface IMatchFound {
  match: IAyahShape;
  wordCount: number;
}

interface ISpeechResult {
  text: string;
  isFinal: boolean;
}

const DEBUG = true;

class Transcribe extends React.Component<IProps, IState> {
  audioStreamer: any;
  socket: Socket;

  constructor(props: IProps) {
    super(props);
    const isTranslationMode = false;

    this.state = {
      isRecording: false,
      isVideoModalOpen: false,
      currentSurah: null,
      isFetchingNextWord: false,
      isTranslationMode,
      partialQuery: '',
      query: '',
      isLoading: false,
      showErrorMessage: false,
      errorMessage: React.createElement('div'),
      fullScreen: false,
      currentAyah: null,
      isAyahCompleted: false,
      currentTranscribedIndex: -1,
      previousAyahs: [],
      ayahFound: false,
      isSurahCompleted: false,
      dimensions: {
        width: -1,
      },
    };
  }

  handleError = (message?: string | JSX.Element) => {
    this.setState({
      showErrorMessage: true,
      errorMessage: message || '',
    });
  };

  toggleFullscreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen,
    });
  };

  handleStartRecording = async () => {
    if (isIOSEmbeddedBrowser()) {
      this.handleError();
      return;
    }

    if (DEBUG) {
      console.log('TRANSCRIBE: Starting recording');
    }

    await this.resetState();

    this.setState({
      query: '',
      isRecording: true,
      isLoading: true,
      showErrorMessage: false,
      errorMessage: React.createElement('div'),
    });

    if (this.socket.disconnected) {
      this.connectToTranscribeServer();
    }

    const options = {
      type: 'transcribe',
    };

    this.socket.emit('startStream', options);
    await this.audioStreamer.start();
    this.socket.emit('speechResult', this.handleResult);
    this.setState({ isLoading: false });
  };

  handleStopRecording = async () => {
    if (DEBUG) {
      console.log('TRANSCRIBE: Stop recording');
    }
    this.socket.emit('endStream');
    this.socket.close();
    await this.audioStreamer.stop();
    this.setState({
      isRecording: false,
    });

    //display results for patial query.
    if (
      this.state.partialQuery &&
      this.state.partialQuery != '' &&
      !this.state.ayahFound
    ) {
      this.props.history.push('/recognition/' + this.state.partialQuery);
    }
  };

  handleSumbitRectitedAyah = async (surah: number, ayah: number) => {
    if (this.props.isAuthenticated) {
      await sumbitRecitedAyah({
        surah,
        ayah,
      });
    }
  };

  handleRecordingButton = async () => {
    if (DEBUG) {
      console.log(
        `TRANSCRIBE: Recording button clicked. isLoading: ${
        this.state.isLoading
        }`
      );
    }
    if (this.state.isLoading) {
      return;
    } else if (this.state.isRecording) {
      await this.handleStopRecording();
    } else {
      await this.handleStartRecording();
    }
  };

  handleRecognitionError = (event: any) => {
    if (DEBUG) {
      console.log('ERROR: Recognition', event);
    }

    this.handleStopRecording();
    const errorLink = '//support.google.com/websearch/answer/2940021';
    const chromeLink = '//support.google.com/chrome/answer/2693767';
    if (event.name) {
      this.handleError();
    } else if (event.error === 'no-speech') {
      this.handleError(
        <p>
          <T
            id={KEYS.AYAH_RECOGNITION_NO_SPEECH_ERROR}
            values={{ errorLink }}
          />
        </p>
      );
    } else if (event.error === 'audio-capture') {
      this.handleError(
        <p>
          <T
            id={KEYS.AYAH_RECOGNITION_AUDIO_CAPTURE_ERROR}
            values={{ errorLink }}
          />
        </p>
      );
    } else if (event.error === 'not-allowed') {
      this.handleError(
        <p>
          <T
            id={KEYS.AYAH_RECOGNITION_MIC_PERMISSION_ERROR}
            values={{ chromeLink }}
          />
        </p>
      );
    }
  };

  handleOGImage = () => {
    const locale = this.props.cookies.get('currentLocale') || 'en';
    return `/public/og/recognition_${locale}.png`;
  };

  handleMatchFound = async ({ match, wordCount }: IMatchFound) => {
    if (DEBUG) {
      console.log(
        `TRANSCRIBE EVENT: Match Found. surahNum: ${
        match.chapter_id
        }, ayahNum: ${match.verse_number}, wordCount: ${wordCount}`
      );
    }

    this.setState(
      { isAyahCompleted: false, currentTranscribedIndex: wordCount - 1 },
      () => {
        const { previousAyahs } = this.state;
        const matchWordsCount = match.text_simple.split(' ').length;
        if (wordCount === matchWordsCount) {
          this.setState(
            {
              currentTranscribedIndex: -1,
              previousAyahs: [...previousAyahs, humps.camelizeKeys(match)],
              isAyahCompleted: true,
            },
            async () => {
              await this.handleSumbitRectitedAyah(
                match.chapter_id,
                match.verse_number
              );
            }
          );
        }
      }
    );
  };

  // TODO: Refactor this function to use our API in the future
  fetchCurrentSurah = async (ayah: IAyahShape) => {
    if (!this.state.currentSurah) {
      const numberOfSurahAyahs = surahs[ayah.chapter_id].ayah;
      // create a range of number to make multiple requests to quran api
      const offsets = _.range(0, numberOfSurahAyahs, 50);
      // create an array of not executed promises to get the whole surah ayahs
      const promises = offsets.reduce(
        (prevPromises: any, offset: number) => [
          ...prevPromises,
          fetch(
            `https://quran.com/api/api/v3/chapters/${
            ayah.chapter_id
            }/verses?offset=${offset}&limit=${50}`
          ),
        ],
        []
      );

      // resolve all promises in parallel
      const result = await Promise.all(promises).then(responses =>
        Promise.all(responses.map(res => res.json()))
      );

      // format the result

      /*
       * return data looks like
       * {
       *  <page-number>: {ayahs: [{<ayah>}, ..]},
       *  ...
       * }
       */
      const pagesGroupedByAyahs = _.chain(result)
        .reduce((prev, curr) => [...prev, ...curr.verses], [])
        .flatten()
        .groupBy('page_number')
        .map(ayahs => ({
          ayahs: _.mapKeys(ayahs, value => value.verse_number),
        }))
        .value();

      /*
       * return data looks like
       * {
       *  <page-number>: {lines: [{<word>}, ..]},
       *  ...
       * }
       */
      const pagesGroupedByLines = _.chain(result)
        .reduce((prev, curr) => [...prev, ...curr.verses], [])
        .reduce((prev, curr) => [...prev, ...curr.words], [])
        .flatten()
        .groupBy('page_number')
        .map(words => ({ lines: _.groupBy(words, 'line_number') }))
        .value();

      /*
       * merge both last object to end with this object
       * {
       *  <page-number>: {ayahs:[<ayahs>], lines: [<words>]},
       *  ...
       * }
       */
      const pages = _.mapKeys(
        _.merge(pagesGroupedByAyahs, pagesGroupedByLines),
        value => _.first(_.values(value.ayahs)).page_number
      );

      this.setState({ currentSurah: pages });
    }
  };

  handleAyahFound = ({ ayahShape }: { ayahShape: IAyahShape }) => {
    const { loadNextAyah } = this.props;
    if (DEBUG) {
      console.log(
        `TRANSCRIBE EVENT: Ayah Found. surahNum: ${
        ayahShape.chapter_id
        } ayahNum: ${ayahShape.verse_number}`
      );
    }

    this.setState(
      {
        isAyahCompleted: false,
        isSurahCompleted: false,
        ayahFound: true,
        currentAyah: {
          ...humps.camelizeKeys(ayahShape),
          surahName: getSurahName(ayahShape.chapter_id),
        },
      },
      async () => {
        await Promise.all([
          loadNextAyah(humps.camelizeKeys(ayahShape)),
          this.fetchCurrentSurah(ayahShape),
        ]);
      }
    );
  };

  async componentDidUpdate() {
    const { nextAyah } = this.props;
    const { isSurahCompleted, isAyahCompleted, currentAyah } = this.state;
    if (!isSurahCompleted && isAyahCompleted && nextAyah) {
      if (currentAyah) {
        if (currentAyah.chapterId !== nextAyah.chapterId) {
          await this.handleStopRecording();
          this.setState({
            isSurahCompleted: true,
          });
        }
        if (
          currentAyah.id !== nextAyah.id &&
          currentAyah.chapterId === nextAyah.chapterId
        ) {
          this.setState({
            currentAyah: {
              ...nextAyah,
              surahName: getSurahName(nextAyah.chapterId),
            },
          });
        }
      } else {
        this.setState({
          currentAyah: {
            ...nextAyah,
            surahName: getSurahName(nextAyah.chapterId),
          },
        });
      }
    }
  }

  handleResult = (result: ISpeechResult) => {
    /**
     * Updates the state of the string displayed on the page as data comes in from the GCloud backend.
     * Only displays if no ayah is found.
     * @param data - ISpeechResult type.
     */
    if (DEBUG) {
      console.log(
        `TRANSCRIBE EVENT: Speech Result. result: ${result.text}, isFinal: ${
        result.isFinal
        }`
      );
    }
    const { ayahFound, partialQuery } = this.state;
    const { text } = result;
    this.setState({ partialQuery: text });
  };

  resetState = async () => {
    // @ts-ignore
    this.setState({
      partialQuery: '',
      previousAyahs: [],
      showErrorMessage: false,
      errorMessage: React.createElement('div'),
      isLoading: false,
      ayahFound: false,
      currentAyah: null,
      currentSurah: null,
    });
    await this.props.clearNextAyah();
    await this.handleStopRecording();
  };

  connectToTranscribeServer = () => {
    const transcribeServerUrl = config('transcribeServerURL');
    this.socket = io(transcribeServerUrl);
    // Partial/Final Transcripts from Google
    this.socket.on('speechResult', this.handleResult);
    // Returns, surah/ayah number with word
    this.socket.on('ayahFound', this.handleAyahFound);
    // Update the state of read ayahs
    this.socket.on('matchFound', this.handleMatchFound);
    this.socket.on('streamError', this.handleRecognitionError);
    this.socket.on('endStream', this.handleStopRecording);

    this.audioStreamer = new AudioStreamer(
      data => this.socket.emit('sendStream', data),
      this.handleRecognitionError
    );
  };

  async componentDidMount() {
    this.connectToTranscribeServer();
  }

  async componentWillUnmount() {
    await this.handleStopRecording();
  }

  renderHeaderContent = () => {
    const { ayahFound, currentAyah } = this.state;

    return (
      <div className="header-container">
        {/* Display surah and Ayah number & inline controls once a match is found */}
        {ayahFound ? (
          <React.Fragment>
            <div className="ayah-info">
              <span className="surah-name">
                <T id={KEYS.SURAH_WORD} /> {currentAyah.surahName}{' '}
              </span>
              <span className="ayah-number">
                <T id={KEYS.AYAH_WORD} /> {currentAyah.verseNumber}
              </span>
            </div>
            <div className="icons-container">
              <Tippy content="Fullscreen" trigger="mouseenter">
                <Icon
                  className="icon fullscreen-icon"
                  icon={this.state.fullScreen ? exit : enter}
                  onClick={this.toggleFullscreen}
                />
              </Tippy>
              <Tippy content="Refresh" trigger="mouseenter">
                <Icon
                  className="icon"
                  icon={refresh}
                  onClick={this.resetState}
                />
              </Tippy>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  };

  renderFooter = () => {
    const classnames = classNames({
      recording: this.state.isRecording,
    });

    return (
      <FooterWrapper>
        <ControlsWrapper
          alignmentPosition={this.state.fullScreen ? 'left' : 'center'}
        >
          <div>
            <RecordingButton
              className={`mic ${classnames}`}
              onClick={this.handleRecordingButton}
            >
              {this.state.isLoading ? (
                <div className={'icon spin'}>
                  <Icon icon={circleONotch} size={20} />
                </div>
              ) : !this.state.isRecording ? (
                <Icon icon={micA} size={30} />
              ) : (
                    <Icon icon={stop} size={30} />
                  )}
            </RecordingButton>
            {!this.state.isTranslationMode && (
              <ToggleButtonWrapper>
                <ToggleButton text={KEYS.MEMORIZATION_MODE} />
              </ToggleButtonWrapper>
            )}
          </div>
        </ControlsWrapper>
        <div className="footer-text">
          <T id={KEYS.BETA_MESSAGE} />{' '}
        </div>
      </FooterWrapper>
    );
  };

  renderAyahsContent = () => {
    const {
      currentAyah,
      isTranslationMode,
      ayahFound,
      isSurahCompleted,
      partialQuery,
      currentTranscribedIndex,
      isRecording,
      previousAyahs,
      currentSurah,
      dimensions,
    } = this.state;
    const { isMemorizationMode } = this.props;
    return (
      <Measure
        bounds={true}
        onResize={contentRect => {
          this.setState({
            dimensions: {
              ...this.state.dimensions,
              width: contentRect.bounds.width,
            },
          });
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className="ayahs-content">
            {ayahFound || partialQuery ? null : isRecording ? (
              <div className="ayah-info"> Listening... </div>
            ) : (
                <div className="ayah-info">
                  <T id={KEYS.WAITING_FOR_INPUT} />
                </div>
              )}
            {/* render partial query until ayah found  */}
            {!currentAyah && <p className="partial-query">{partialQuery} </p>}
            {/* render finished ayahs in the follow along mode */}
            <div className="surah-wrapper">
              {isTranslationMode ? (
                currentAyah &&
                !isSurahCompleted && (
                  <TranslationModeWrapper>
                    <div>
                      <TranscribeAyah
                        isMemorizationMode={false}
                        ayah={currentAyah}
                        isTranscribed={false}
                        currentTranscribedIndex={currentTranscribedIndex}
                      />
                    </div>
                    {currentAyah.translations && (
                      <TranslationWrapper>
                        {currentAyah.translations[0].text}
                      </TranslationWrapper>
                    )}
                  </TranslationModeWrapper>
                )
              ) : (
                  <ReadingMode
                    isMemorizationMode={isMemorizationMode}
                    {...{
                      currentAyah,
                      currentSurah,
                      currentTranscribedIndex,
                      previousAyahs,
                    }}
                  />
                )}
            </div>
          </div>
        )}
      </Measure>
    );
  };

  openVideoModal = () => {
    this.setState({ isVideoModalOpen: true });
  };

  closeVideoModal = () => {
    this.setState({ isVideoModalOpen: false });
  };

  renderIntroMessage = () => {
    const { ayahFound, isRecording, partialQuery } = this.state;
    const locale = this.props.cookies.get('currentLocale') || 'en';

    if (partialQuery == '') {
      return (
        <React.Fragment>
          <Modal
            isOpen={this.state.isVideoModalOpen}
            onRequestClose={this.closeVideoModal}
            shouldcloseOnEsc={true}
            contentLabel="Tarteel video"
            style={videoModalStyles}
            ariaHideApp={false}
          >
            <ReactPlayer
              className="react-player"
              url={
                locale === 'ar'
                  ? 'https://vimeo.com/370590893'
                  : 'https://vimeo.com/370577872'
              }
              width="100%"
              height="100%"
              wrapper={VideoWrapper}
            />
          </Modal>
          <div className="intro-message">
            <T id={KEYS.INTRO_MESSAGE} />{' '}
            <a onClick={this.openVideoModal} className="demo-video-link">
              <T id={KEYS.CLICK_DEMO_VIDEO_URL_MESSAGE} />
            </a>
          </div>
        </React.Fragment>
      );
    } else if (!ayahFound) {
      return (
        <div className="intro-message">
          <T id={KEYS.KEEP_RECITING_MESSAGE} />
        </div>
      );
    }
  };
  render() {
    return (
      <Container width={this.state.dimensions.width}>
        <Navbar />
        <Fullscreen
          enabled={this.state.fullScreen}
          onChange={fullScreen => this.setState({ fullScreen })}
        >
          {/* Show error message modal. */}
          {this.state.showErrorMessage && (
            <RecordingError
              message={this.state.errorMessage}
              onClose={() => {
                this.setState({ showErrorMessage: false });
              }}
            />
          )}
          {/* main tag is used for accessibiltiy */}
          <main className="fullscreen-body">
            {this.renderHeaderContent()}
            {this.renderIntroMessage()}
            {this.renderAyahsContent()}
            {this.renderFooter()}
          </main>
          <SocialLinksFooter />
        </Fullscreen>
      </Container>
    );
  }
}

const mapStateToProps = (state: ReduxState): IStateProps => {
  return {
    nextAyah: state.ayahs.nextAyah.reverse()[0],
    isMemorizationMode: state.status.isContinuous,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch): IDispatchProps => {
  return {
    setRecognitionResults: (result: any) => {
      return dispatch(setRecognitionResults(result));
    },
    loadNextAyah: (ayah: IAyahShape) => dispatch(loadNextAyah(ayah)),
    clearNextAyah: () => dispatch(clearNextAyah()),
  };
};

export default injectIntl(
  withCookies(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Transcribe)
  )
);
