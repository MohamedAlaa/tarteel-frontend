import KEYS from './keys';
import { KEY } from 'redux-pack';

export default {
  messages: {
    // LANGUAGE
    local: 'arabic',

    // LOCALS
    [KEYS.LOCAL_SITELOCALE]: 'اختر لغة الموقع',
    [KEYS.LOCAL_CHANGELOCALE]: 'اختر اللغة التي تود عرض الموقع بها',
    [KEYS.LOCAL_NATIVENAME]: 'العربية',
    [KEYS.LOCAL_SELECTLABEL]: 'اللغة',
    [KEYS.SETTING_TITLE]: 'خيارات',
    [KEYS.LOCAL_TITLE]: 'ترتيل - برنامج تصحيح تلاوة القران',
    [KEYS.LOCAL_DESCRIPTION]:
      'ترتيل هو مشروع مفتوح المصدر صُمم للمساعده في بناء برامج لتحليل قراءة القرآن. بالنظر لأهمية تلاوة القرآن في حياة المسلمين ، من المهم بناء أدوات برمجية يمكن أن تساعد المسلمين العاديين على قراءة القرآن بشكل أكثر دقة.',
    [KEYS.LOCAL_NAME]: 'ترتيل',

    // COMMON & GENERAL
    [KEYS.HOME_WORD]: 'الرئيسية',
    [KEYS.CLICK_WORD]: 'أضغط',
    [KEYS.AYAH_WORD]: 'اية',
    [KEYS.SURAH_WORD]: 'سورة',
    [KEYS.CONTRIBUTE_WORD]: 'المساهمة',
    [KEYS.YES_WORD]: 'نعم',
    [KEYS.NO_WORD]: 'لا',
    [KEYS.SKIP_WORD]: 'تخطى',
    [KEYS.THANK_YOU_MESSAGE]: 'شكراً جزيلاً',
    [KEYS.USERS_LIST_TITLE]: 'قائمة الأعضاء',
    [KEYS.NEXT_AYAH]: 'الآية التالية',
    [KEYS.PREVIOUS_AYAH]: 'الآية السابقة',
    [KEYS.RETRY_BUTTON_TEXT]: 'إعادة',
    [KEYS.SUBMIT_BUTTON_TEXT]: 'التالي',
    [KEYS.CONTINUOUS_MODE_NOTE_TEXT]: 'التسجيل المستمر',
    [KEYS.CHANGE_AYAH_TEXT]: 'اضغط هنا لتغيير الآية',
    [KEYS.CONTINUE_READING_BUTTON_TEXT]: 'أكمل القراءة',
    [KEYS.RANDOM_AYAH_LINK_TEXT]: 'آية عشوائية',
    [KEYS.ABOUT_LINK_TEXT]: 'عن ترتيل',
    [KEYS.PROFILE_LINK_TEXT]: 'حسابي',
    [KEYS.MOBILE_APP_LINK_TEXT]: 'تطبيق الهاتف',
    [KEYS.EVALUATE_AYAHS]: 'تقييم آيات',
    [KEYS.GET_STARTED]: 'سجل مرة أخرى',
    [KEYS.PARTNERS_LINK_TEXT]: 'الشركاء',
    [KEYS.PREVIOUS_WORD]: 'السابقه',
    [KEYS.DONATE_LINK_TEXT]: 'التبرع النقدي',
    [KEYS.MOBILE_DOWNLOAD_MESSAGE]: 'حمل برنامج ترتيل الآن لكي تستخدم جميع الخاصيات على الأندرويد والأيفون',

    // AYAH PICKER
    [KEYS.AYAH_PICKER_TITLE]: 'اختر آية',
    [KEYS.AYAH_PICKER_SEARCH_PLACEHOLDER]: 'بحث',
    [KEYS.AYAH_PICKER_BACK_BUTTON_TEXT]: 'السورة',

    // SURAH PICKER
    [KEYS.SURAH_PICKER_TITLE]: 'اختر سورة',
    [KEYS.SURAH_PICKER_SEARCH_PLACEHOLDER]: 'بحث',
    [KEYS.SURAH_PICKER_BACK_BUTTON_TEXT]: 'الرئيسيه',

    // DEMOGRAPHICS PAGE
    [KEYS.DEMOGRAPHICS_PAGE_EDIT_DATA_TEXT]: 'تعديل بياناتك',
    [KEYS.DEMOGRAPHICS_FORM_SUBMIT_BUTTON_TEXT]: 'حفظ',
    [KEYS.DEMOGRAPHIC_PAGE_FIRST_PARAGRAPH_1]: 'بمساعدتك، لقد وصلنا إلي',
    [KEYS.DEMOGRAPHIC_PAGE_FIRST_PARAGRAPH_2]:
      'تسجيل. هذا جيد ، ولكن في ترتيل نسعي لأن تكون التسجيلات بصوت رجال و نساء من جميع الأعمار والثقافات المختلفه ، لتحسين جودة البرنامج.',
    [KEYS.DEMOGRAPHIC_PAGE_SECOND_PARAGRAPH]:
      'ساعدنا لتحسين أداء البرنامج بتسجيل بعض المعلومات عنك.',
    [KEYS.DEMOGRAPHIC_INFO_LINK_TEXT]: 'بياناتك',

    // GENDER INPUT
    [KEYS.GENDER_INPUT_LABEL]: 'الجنس',
    [KEYS.GENDER_INPUT_OPTION_MALE]: 'ذكر',
    [KEYS.GENDER_INPUT_OPTION_FEMALE]: 'أنثي',
    [KEYS.AGE_INPUT_LABEL]: 'العمر',

    // QIRAAH INPUT
    [KEYS.QIRAAH_INPUT_LABEL]: 'القراءة',
    [KEYS.QIRAAH_INPUT_OPTION_HAFS]: 'حفص',
    [KEYS.QIRAAH_INPUT_OPTION_WARSH]: 'ورش',
    [KEYS.QIRAAH_INPUT_OPTION_NOTSURE]: 'لا أعلم',
    [KEYS.QIRAAH_INPUT_OPTION_OTHER]: 'أخري',
    [KEYS.HERITAGE_INPUT_LABEL]: 'الجنسية',

    // SUBSCRIBE PAGE
    [KEYS.SUBSCRIBE_PAGE_TEMPLATE_TITLE]: 'إشترك',
    [KEYS.SUBSCRIBE_BUTTON_TEXT]: 'اشتراك',
    [KEYS.SUBSCRIBE_PAGE_EMAIL_PLACEHOLDER_TEXT]: 'البريد الالكتروني',
    [KEYS.SUBSCRIBE_PAGE_EMAIL_BUTTON_TEXT]: 'اشترك لتصلك أخبار ترتيل',
    [KEYS.SUBSCRIBE_PAGE_FIRST_PARAGRAPH_2]: 'تسجيل',
    [KEYS.SUBSCRIBE_PAGE_CONGRATS_MESSAGE_1]: 'تهانينا ، لقد تم إضافة خاصية',
    [KEYS.SUBSCRIBE_PAGE_CONGRATS_MESSAGE_2]:
      "يمكنك اختيار أي آية  و أي سورة و القراءة في وضع مستمر ، جربها الآن بالضغط علي 'أكمل القراءة'",
    [KEYS.SUBSCRIBE_PAGE_HELP_US_MESSAGE_1]:
      'يمكنك أيضاً مساعدتنا لتحقيق هدفنا بمشاركة تحدي ترتيل لتسجيل 50 آلاف آية ',
    [KEYS.SUBSCRIBE_PAGE_HELP_US_MESSAGE_2]: 'مع أصدقائك و عائلتك',
    [KEYS.SUBSCRIBE_PAGE_FIRST_PARAGRAPH_1]: 'الحمد لله، بمساعدتك وصلنا لـ',

    // NOT FOUND PAGE
    [KEYS.NOT_FOUND_PAGE_TEMPLATE_TITLE]: 'صفحه غير موجوده',
    [KEYS.NOT_FOUND_PAGE_TEXT]: 'هذه الصفحه غير موجوده',

    // AYAH COMPONENT
    [KEYS.AYAH_NOT_FOUND_PAGE_TEXT]: 'رقم هذه الآيه غير صحيح',
    [KEYS.PICK_DIFFERENT_AYAH]: 'أختر آيه أخري',
    [KEYS.AYAHS_RECITED]: 'آيات مسجلة',

    // ABOUT PAGE
    [KEYS.ABOUT_PAGE_RECITED_AYAHS_MESSAGE]:
      'بحمد الله, ساعد مستخدمي ترتيل <a href="/contribute">بالمساهمة</a> حتي الان للوصول الي اجمالي <b>{recitedAyahs}</b> اية',
    [KEYS.ABOUT_PAGE_TEMPLATE_TITLE]: 'عن ترتيل',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TITLE]:
      'الذكاء الاصطناعي لاتقان تلاوة القرآن',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TEXT_1]:
      'ترتيل هو تطبيق للقرأن الكريم يقوم بالأستماع إلي تلاوتك و تصحيح الاخطاء.  اسم ترتيل يأتي من القرآن نفسه ، حيث يأمرنا الله -سبحانه وتعالى - بتلاوة القرآن مع الترتيل (أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلا)(73:4).',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TEXT_2]:
      'يستفيد ترتيل من احدث التقنيات فى مجال الذكاء الاصطناعي والتعلم الآلي. لتتعرف على الكلام وتحليل التلاوات. حتي تعمل برامج الذكاء الاصطناعي الخاصة بنا بكفاءة, نحتاج إلي مجموعة كبيرة ومتنوعة من القراء من جميع أنحاء العالم للمساهمة بتلاواتهم. فكلما زاد عدد المساهمات, اصبحت برامج الذكاء الاصطناعي اكثر دقة.',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TEXT_3]:
      'هدفنا هو دعم وخدمة الأئمة والمؤساسات التي تسعي لتعليم المسلمين كيفية قراءة كلمات الله - سبحانه وتعالي -  و تزويد أولئك الذين لديهم اتصال محدود مع الأئمة والشيوخ بوسيلة للحفاظ علي علاقتهم مع الله - سبحانه وتعالي - ومع القرآن الكريم.',
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TITLE]: 'لماذا نجمع التلاوات؟',
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TEXT_1]:
      'بدأنا ترتيل كمبادرة لجمع أول وأكبر مجموعة بيانات عامة في العالم للتلاوات القرآنية التي يقوم بها المسلمون العاديون. معظم التسجيلات الصوتية المتاحة للقرآن تتلى من القراء المحترفين ذوي الطلاقة القوية في التجويد (قواعد التلاوة) ويتم تسجيلها في الاستوديوهات. هذا أمر مهم عندما يريد شخص الاستماع إلى تلاوة القرآن.',
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TEXT_2]:
      "ومع ذلك ، فإن العديد من الأدوات البرمجية التي يهتم بها المطورون المسلمون تتطلب بناء نماذج تعلم الآلة على التلاوة القرآنية (على سبيل المثال تحويل التلاوة لنص) ، كما يتلو ذلك المسلمون العاديون. تختلف تلاوة المسلمين العاديين عن التسجيلات المهنية بطرق عديدة: على سبيل المثال ، قد تتضمن ضجيجًا في الخلفية ، أو قد يتلوه أشخاص ذوو معرفة محدودة بالتجويد ، أو قد تكون اللهجة للقراء مختلفة. من خلال جمع هذه البيانات ، يمكننا تدريب نماذج التعلم الآلي ، والتي سنقوم بنشرها لمطوري البرامج المهتمين بتطوير <a href='https://docs.google.com/presentation/d/1hlcbAcEfBg2y_KWwzyPPYjh5SMxowDEWM1XkDC48ZGQ/edit?usp=sharing'>مجموعة واسعة من التطبيقات</a> التي تعتمد على تحويل التلاوة لنص ، أشياء مثل :",
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TEXT_2_LINK]: 'مجموعة واسعة من التطبيقات',
    [KEYS.ABOUT_PAGE_THIRD_PARAGRAPH_TITLE]: 'التقدم المحرز حتى الآن',
    [KEYS.ABOUT_PAGE_THIRD_PARAGRAPH_TEXT]: 'تم إنشاء ترتيل بإذن الله ثم جهود:',
    [KEYS.ABOUT_PAGE_FOURTH_PARAGRAPH_TITLE]:
      'هل الآيات التي يتم تلاوتها متنوعة؟',
    [KEYS.ABOUT_PAGE_FOURTH_PARAGRAPH_TEXT]:
      'يساعدنا لبناء نماذج جيدة للتعلم الآلي (ML) ان نجعل الناس تتلو آيات مختلفة من القرآن. نحن نحصي مدي تغطيتنا للقرآن كما مبين في  الشكل البياني التالي:',
    [KEYS.ABOUT_PAGE_FIFTH_PARAGRAPH_TITLE]: 'فريق عمل ترتيل',
    [KEYS.ABOUT_PAGE_SEVENTH_PARAGRAPH_TITLE]: 'ماهي سياسة الخصوصية لدي ترتيل؟',
    [KEYS.ABOUT_PAGE_SEVENTH_PARAGRAPH_TEXT]:
      "المستخدمون الذين يقدمون لترتيل التسجيلات الصوتية لتلاواتهم هذا يعني ايضاً انهم يعطون ثقاتهم الغالية لفريق عمل ترتيل. فنحن نقوم بحماية خصوصيتهم وفى الوقت نفسه نقوم بإنشاء مجموعة بيانات عامة متاحة للاستخدام من قبل المطورين،       فإننا نتخذ الخطوات المنصوص عليها في <a href='/privacy'> سياسة الخصوصية </a>الخاصة بنا",

    [KEYS.ABOUT_PAGE_LAST_PARAGRAPH_TITLE]:
      'اين يمكنني أن أجد المزيد من المعلومات عن ترتيل؟',
    [KEYS.ABOUT_PAGE_LAST_PARAGRAPH_TEXT]:
      'للمزيد من المعلومات, يمكنك قراءة\n' +
      "<a href='https://drive.google.com/open?id=17RpnWAbmmkl3iPM9awSNsf4S_2Mk_pKd'>\n" +
      '  المستند التقني\n' +
      '</a>',
    [KEYS.FIELDS_OF_USE_FIRST_ITEM]: 'أدوات تصحيح تلقائي لأخطاء التلاوة',
    [KEYS.FIELDS_OF_USE_SECOND_ITEM]: 'أدوات تعليم التجويد في نفس السياق',
    [KEYS.FIELDS_OF_USE_THIRD_ITEM]:
      'أكشاك المسجد التي تتبع الإمام وتعرض ترجمة الآية',

    // MOBILE PAGE
    [KEYS.MOBILE_PAGE_TITLE]: 'حمل تطبيق الهاتف | ترتيل ',
    [KEYS.MOBILE_PAGE_PARAGRAPH]:
      'حمل تطبيق ترتيل علي هاتفك واجعل وقت فراغك مفيد و مليئ بالثواب',

    // GENERAL INPUTS
    [KEYS.NAME_INPUT_PLACEHOLDER]: '(مثال): محمد',
    [KEYS.EMAIL_ADDRESS_INPUT_PLACEHOLDER]: '(مثال): Mohamed@example.com',
    [KEYS.MESSAGE_TEXTAREA_PLACEHOLDER]: 'أكتب رسالتك هنا...',
    [KEYS.NAME_INPUT_LABEL]: 'الأسم',
    [KEYS.EMAIL_ADDRESS_INPUT_LABEL]: 'البريد الألكتروني',
    [KEYS.MESSAGE_TEXTAREA_LABEL]: 'الرساله',

    // LANDING
    [KEYS.LANDING_GREETING_MESSAGE]: 'السلام عليكم',
    [KEYS.LANDING_FIRST_PARAGRAPH]:
      "أهلاً بك في تحدي ترتيل 100,000 ، شكراً لمساعدتنا في بناء أول مجموعة بيانات عامة مفتوحة المصدر في العالم لتلاوات القرآن من قبل أشخاص عاديين مثلي ومثلك. <a href='/about'>اقرأ المزيد</a> ",
    [KEYS.LANDING_SECOND_PARAGRAPH_TITLE]: 'كيف يعمل ؟',
    [KEYS.LANDING_LIST_FIRST_ITEM]:
      'كي تبدأ ترتيل سوف يختار لك 5 ترتيل آيات عشوائية لقرائتها.',
    [KEYS.LANDING_LIST_SECOND_ITEM]:
      'اضغط علي زر الميكروفون لتبدأ بتسجيل نفسك وأنت تتلو الآية ، لاتهتم بجعل التسجيل بالتجويد الصحيح ، لأننا نريد تسجيلات من أشخاص بدرجات مختلفه في التجويد.',
    [KEYS.LANDING_LIST_THIRD_ITEM]:
      ' هذه التسجيلات سوف ستكون متاحة للمطورين المهتمين ببناء تطبيقات قائمة علي تلاوة القرآن.',
    [KEYS.LANDING_LAST_LINE]: "<a href='/privacy'>سياسة الخصوصية</a>",
    [KEYS.LANDING_BUTTON_TEXT]: 'ابدأ',

    // AYAH RECOGNITION PAGE
    [KEYS.AYAH_RECOGNITION]: 'التعرف علي الآيات',
    [KEYS.AYAH_RECOGNITION_POWERED_BY]:
      "بواسطة <a href={url} target='_blank'>إقرأ</a>",
    [KEYS.AYAH_RECOGNITION_RECOGNITION_MESSAGE]:
      'إبدأ بالضغط علي زر الميكروفون وأبدأ بالتسجيل لتجد الآيه الأقرب.',
    [KEYS.AYAH_RECOGNITION_IMPROVE_ACCURACY]:
      'تريد أن ترى خاصية تصحيح التلاوة؟',
    [KEYS.AYAH_RECOGNITION_CONTRIBUTE]: 'ساهم بصوتك',
    [KEYS.AYAH_RECOGNITION_MIC_PERMISSION_ERROR]:
      "لايوجد أذن لإستخدام الميكروفون لحل هذه المشكله من فضلك غير إعدادات الصوت لديك <a target='_blank' href={chromeLink}> من هنا</a>.",
    [KEYS.AYAH_RECOGNITION_AUDIO_CAPTURE_ERROR]:
      'لا يوجد ميكروفون. تأكد من توصيلك للميكروفون وأن إعدادات الميكروفون صحيحه <a target=‘_blank’ href={errorLink}> من هنا </a>',
    [KEYS.AYAH_RECOGNITION_NO_SPEECH_ERROR]:
      'لم يتم التعرف علي أي صوت .  يمكن أن تتأكد من إعدادات الميكروفون  <a target=‘_blank’ href={errorLink}> من هنا</a>.',
    [KEYS.AYAH_RECOGNITION_RESULTS]: 'نتيجه',
    [KEYS.AYAH_RECOGNITION_NEW_SEARCH]: 'بحث جديد',
    [KEYS.VIDEO]: 'فيديو',
    [KEYS.SEARCHING]: '...جاري البحث',
    [KEYS.TRANSCRIBE_SEARCH_NOTE]:
      'لم نتمكن من مطابقة تلاوتك. إقرأ لفترة أطول في التسجيل التالي للحصول على ميزات مثل المتابعة القراءة وغيرها. يمكنك العثور على تفاصيل عمل البرنامج في هذا',

    // EVALUATE AYAHS
    [KEYS.EVALUATE_AYAHS_PAGE_TITLE]: 'ساهم بتقويم الأيات | ترتيل',

    // CONTRIBUTE PAGE
    [KEYS.CONTRIBUTE_PAGE_TITLE]: 'ساهم بتسجيل صوتك | ترتيل',

    // PARTNERS PAGE
    [KEYS.PARTNERS_PAGE_TITLE]: 'الشركاء | ترتيل',
    [KEYS.PARTNERS_PARAGRAPH]:
      "We have proudly partnered with these orgs to further mission of Tarteel. If you're interested in partenering with us, <a href='/contact'>get in touch</a>!",

    // DATASET
    [KEYS.TARTEEL_DATASET_PAGE_TITLE]: 'Download the 25k dataset | Tarteel',
    [KEYS.TARTEEL_DATASET_LINK_TEXT]: 'مجموعة البيانات',
    [KEYS.DATASET_DOWNLOAD_TEXT]: 'Download the Tarteel Dataset',
    [KEYS.DATASET_DOWNLOAD_PARAGRAPH]:
      'The full dataset is available in CSV format. Audio files can be downloaded from the accompanying URLs in the CSV.',
    [KEYS.DATASET_DOWNLOAD_DETAILS]:
      '(.csv, 5.6 MB) -- approximately 25,000 recordings without evaluations.',
    [KEYS.DATASET_DOWNLOAD_SAMPLE_RECORDINGS_TEXT]:
      'Download Sample Recordings',
    [KEYS.DATASET_DOWNLOAD_SAMPLE_RECORDINGS_PARAGRAPH]:
      'Here are some sample audio files that have been submitted by Tarteel users:',

    // CONTACT US
    [KEYS.CONTACT_US]: 'تواصل معنا',
    [KEYS.CONTACT_US_PAGE_TITLE]: 'تواصل معنا| ترتيل',
    [KEYS.CONTACT_US_SEND]: 'إرسال',
    [KEYS.CONTACT_US_BUTTON_TEXT]: 'تواصل معنا',
    [KEYS.CONTACT_US_EMAIL_TEXT]: ' <a href="mailto:info@tarteel.io">info@tarteel.io</a> يمكنكم التواصل معنا عن طريق بريدنا',

    // DONATE PAGE
    [KEYS.DONATE_PAGE_TITLE]: 'التبرع النقدي | ترتيل',

    // CONTRIBUTORS
    [KEYS.CONTRIBUTOR_NAME_1]: 'عبد اللطيف عبد الفتاح',
    [KEYS.CONTRIBUTOR_POSITION_1]: 'مهندس برمجيات في تويتر',
    [KEYS.CONTRIBUTOR_NAME_2]: 'عبدالرحمن الفوزان',
    [KEYS.CONTRIBUTOR_POSITION_2]: 'مهندس برمجيات في فيسبوك',
    [KEYS.CONTRIBUTOR_NAME_6]: 'انس ابو اللبان',
    [KEYS.CONTRIBUTOR_POSITION_6]: 'مهندس برمجيات في أمازون',
    [KEYS.CONTRIBUTOR_NAME_7]: 'دينا عطية',
    [KEYS.CONTRIBUTOR_POSITION_7]: 'مهندسة برمجيات في ترتيل',
    [KEYS.CONTRIBUTOR_NAME_8]: 'حمزة خان',
    [KEYS.CONTRIBUTOR_POSITION_8]: 'مهندس برمجيات في أوبر',
    [KEYS.CONTRIBUTOR_NAME_9]: 'فهيم دالفي',
    [KEYS.CONTRIBUTOR_POSITION_9]: 'مهندس برمجيات فى معهد قطر لبحوث الحوسبة',
    [KEYS.CONTRIBUTOR_NAME_10]: 'مروة عبد الحي',
    [KEYS.CONTRIBUTOR_POSITION_10]:
      'طالبة علوم الحاسوب في معهد ماساتشوستس للتكنولوجيا',
    [KEYS.CONTRIBUTOR_NAME_11]: 'أحمد العبد',
    [KEYS.CONTRIBUTOR_POSITION_11]: 'مسوق في مندي فرما',
    [KEYS.CONTRIBUTOR_NAME_12]: 'محمد موسى',
    [KEYS.CONTRIBUTOR_POSITION_12]: 'مهندس برمجيات في فيسبوك',
    [KEYS.CONTRIBUTOR_NAME_13]: 'أحمد حسين',
    [KEYS.CONTRIBUTOR_POSITION_13]: 'مهندس في ترتيل',
    [KEYS.CONTRIBUTOR_NAME_14]: 'عمرو الفاس',
    [KEYS.CONTRIBUTOR_POSITION_14]: 'عضو مجلس إدارة الجمعية الإسلامية في بوسطن',
    [KEYS.CONTRIBUTOR_NAME_15]: 'بسيوني نحلة',
    [KEYS.CONTRIBUTOR_POSITION_15]: 'رئيس مدرسة بوسطن الإسلامية',
    [KEYS.CONTRIBUTOR_NAME_ZESHAN]: 'زيشان جندل',
    [KEYS.CONTRIBUTOR_POSITION_ZESHAN]: 'مستشار في جامعة يل ',

    [KEYS.CONTRIBUTOR_NAME_AQEEL]: 'عقيل محمد',
    [KEYS.CONTRIBUTOR_POSITION_AQEEL]: 'رئيس مدرسة بوسطن الإسلامية',

    [KEYS.CONTRIBUTOR_NAME_ABDULLAH]: 'عبدالله بدير',
    [KEYS.CONTRIBUTOR_POSITION_ABDULLAH]: 'مستشار في باين',

    // Transcriber
    [KEYS.WAITING_FOR_INPUT]: '"حاول ان تقول "قل هو الله احد',
    [KEYS.INTRO_MESSAGE]:
      'ترتيل يستخدم الذكاء الاصطناعى لتقديم ملاحظات مباشرة على تلاوتك للقرآن. اضغط على زر الميكرفون أو',
    [KEYS.MEMORIZATION_MODE]: 'وضع الحفظ',
    [KEYS.CLICK_DEMO_VIDEO_URL_MESSAGE]: 'شاهد فيديو توضيحي',
    [KEYS.BETA_MESSAGE]: 'حمل برنامج ترتيل على <a' +
    ' href="https://play.google.com/store/apps/details?id=com.mmmoussa.iqra">الأندرويد</a> و <a href="https://apps.apple.com/au/app/tarteel/id1391009396">الأيفون</a>',
    [KEYS.KEEP_RECITING_MESSAGE]: '...إستمر في التلاوة',
  },
};
