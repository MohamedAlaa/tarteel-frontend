import KEYS from './keys';

interface IShape {
  messages: { [key: string]: string };
}

const EESN: IShape = {
  messages: {
    // LANGUAGE
    local: 'español',

    // LOCALS
    [KEYS.LOCAL_SITELOCALE]: 'Idioma del sitio',
    [KEYS.LOCAL_CHANGELOCALE]:
      'Elija el idioma en el que desea que se muestre el sitio',
    [KEYS.LOCAL_NATIVENAME]: 'Español',
    [KEYS.LOCAL_SELECTLABEL]: 'Idioma',
    [KEYS.SETTING_TITLE]: 'Ajustes',
    [KEYS.LOCAL_TITLE]: 'Tarteel -  AI para perfeccionar Recitación del Corán',
    [KEYS.LOCAL_DESCRIPTION]:
      'Identifique el ayah que está recitando, busque por voz en el Corán y encuentre la traducción. Pruebe la demostración en nuestro sitio web o descargue nuestra app móvil para usarla en su camino.',
    [KEYS.LOCAL_NAME]: 'Tarteel',
    [KEYS.CURRENT_APPLICATION_VERSION]: 'Tarteel versión 1.0',

    // COMMON & GENERAL
    [KEYS.HOME_WORD]: 'Inicio',
    [KEYS.CLICK_WORD]: 'Click',
    [KEYS.CONTRIBUTE_WORD]: 'Contribuir',
    [KEYS.YES_WORD]: 'Si',
    [KEYS.NO_WORD]: 'No',
    [KEYS.SKIP_WORD]: 'Omitir',
    [KEYS.SUBMIT_WORD]: 'Enviar',
    [KEYS.SAVE_WORD]: 'Guardar',
    [KEYS.SAVED_WORD]: 'Guardado',
    [KEYS.THANK_YOU_MESSAGE]: '¡Gracias!',
    [KEYS.USERS_LIST_TITLE]: 'Lista de Usuarios',
    [KEYS.AYAH_WORD]: 'Ayah',
    [KEYS.AYAHS_WORD]: 'Ayaat',
    [KEYS.NEXT_AYAH]: 'Siguente Ayah',
    [KEYS.PREVIOUS_AYAH]: 'Ayah Anterior',
    [KEYS.RETRY_BUTTON_TEXT]: 'volver',
    [KEYS.SUBMIT_BUTTON_TEXT]: 'Siguente',
    [KEYS.CONTINUOUS_MODE_NOTE_TEXT]: 'modo de continuacíon',
    [KEYS.CHANGE_AYAH_TEXT]: 'Haga clic aquí para cambiar el Ayah',
    [KEYS.SURAH_WORD]: 'Sūrah',
    [KEYS.CONTINUE_READING_BUTTON_TEXT]: 'Sigue leyendo',
    [KEYS.RANDOM_AYAH_LINK_TEXT]: 'Ayah Aleatoria',
    [KEYS.ABOUT_LINK_TEXT]: 'Acerca de Nosotros',
    [KEYS.YOUR_RECITATIONS]: 'Sus recitaciones',
    [KEYS.PROFILE_LINK_TEXT]: 'Mi perfil',
    [KEYS.MOBILE_APP_LINK_TEXT]: 'App Movil',
    [KEYS.EVALUATE_AYAHS]: 'Evaluar Ayaat',
    [KEYS.EVALUATE_AYAHS_PAGE_TITLE]: 'Evaluar Ayaat | Tarteel',
    [KEYS.GET_STARTED]: 'Empezamos',
    [KEYS.PARTNERS_LINK_TEXT]: 'Socios',
    [KEYS.PREVIOUS_WORD]: 'Anterior',
    [KEYS.DONATE_LINK_TEXT]: 'Donar',
    [KEYS.MOBILE_DOWNLOAD_MESSAGE]: 'Descargue la aplicación móvil Tarteel para usar todas nuestras funciones sobre la marcha en Android e iOS',

    // AYAH PICKER
    [KEYS.AYAH_PICKER_TITLE]: 'Escoger un Ayah',
    [KEYS.AYAH_PICKER_SEARCH_PLACEHOLDER]: 'Buscar (en Árabe)',
    [KEYS.AYAH_PICKER_BACK_BUTTON_TEXT]: 'hasta Sūrah',

    // SURAH PICKER
    [KEYS.SURAH_PICKER_TITLE]: 'Recoger un Sūrah',
    [KEYS.SURAH_PICKER_SEARCH_PLACEHOLDER]: 'Buscar (en Inglés/Árabe)',
    [KEYS.SURAH_PICKER_BACK_BUTTON_TEXT]: 'Regresar al Incio',

    // DEMOGRAPHICS PAGE
    [KEYS.DEMOGRAPHICS_PAGE_TITLE]: 'Datos demográficos | Tarteel',
    [KEYS.DEMOGRAPHICS_PAGE_EDIT_DATA_TEXT]: 'Edite sus datos',
    [KEYS.DEMOGRAPHICS_THANKS_TEXT]:
      '¡Gracias! <span className="one-more">Una cosa más... </span>',
    [KEYS.DEMOGRAPHICS_FORM_SUBMIT_BUTTON_TEXT]: "ese soy yo",
    [KEYS.DEMOGRAPHIC_INFO_LINK_TEXT]: 'Datos demográficos',
    [KEYS.DEMOGRAPHIC_PAGE_FIRST_PARAGRAPH_1]:
      'Con su ayuda, hemos alcanzado un total de',
    [KEYS.DEMOGRAPHIC_PAGE_FIRST_PARAGRAPH_2]:
      "grabaciones Eso es genial, pero en Tarteel, también nos comprometemos a asegurarnos de que nuestras grabaciones reflejen recitaciones de hombres y mujeres y de las diferentes etnias y edades que conforman la ummah musulmana.",
    [KEYS.DEMOGRAPHIC_PAGE_FIRST_PARAGRAPH_3]:
      'Compartir su información demográfica nos ayuda a adaptar los modelos de aprendizaje automático para proporcionar una precisión considerablemente mayor para Tarteel.',
    [KEYS.DEMOGRAPHIC_PAGE_SECOND_PARAGRAPH]:
      "Ayúdenos a evaluar qué tan bien lo estamos haciendo al contarnos un poco sobre usted ...",

    // GENDER INPUT
    [KEYS.GENDER_INPUT_LABEL]: 'Género',
    [KEYS.GENDER_INPUT_OPTION_MALE]: 'masculino',
    [KEYS.GENDER_INPUT_OPTION_FEMALE]: 'femenino',
    [KEYS.AGE_INPUT_LABEL]: 'Edad',

    // QIRAAH INPUT
    [KEYS.QIRAAH_INPUT_LABEL]: "Qira'ah",
    [KEYS.QIRAAH_INPUT_OPTION_HAFS]: 'Hafs',
    [KEYS.QIRAAH_INPUT_OPTION_WARSH]: 'Warsh',
    [KEYS.QIRAAH_INPUT_OPTION_NOTSURE]: 'No estoy seguro',
    [KEYS.QIRAAH_INPUT_OPTION_OTHER]: 'Otro',
    [KEYS.HERITAGE_INPUT_LABEL]: 'Patrimonio',

    // SUBSCRIBE PAGE
    [KEYS.SUBSCRIBE_PAGE_TEMPLATE_TITLE]: 'Suscribir',
    [KEYS.SUBSCRIBE_PAGE_EMAIL_PLACEHOLDER_TEXT]: 'correo electrónico',
    [KEYS.SUBSCRIBE_PAGE_EMAIL_BUTTON_TEXT]: 'Suscríbase para recibir noticias sobre Tarteel',
    [KEYS.SUBSCRIBE_BUTTON_TEXT]: 'Suscribir',
    [KEYS.SUBSCRIBE_PAGE_FIRST_PARAGRAPH_1]:
      'Alhamdulillah, Con su ayuda, hemos alcanzado un total de',
    [KEYS.SUBSCRIBE_PAGE_FIRST_PARAGRAPH_2]: 'grabaciones.',
    [KEYS.SUBSCRIBE_PAGE_CONGRATS_MESSAGE_1]:
      '¡Felicidades! Has desbloqueado',
    [KEYS.SUBSCRIBE_PAGE_CONGRATS_MESSAGE_2]:
      '-- seleccione cualquier sura y aya, y recite continuamente y sus grabaciones se cargarán. ¡Compruébalo haciendo clic a continuación!',
    [KEYS.SUBSCRIBE_PAGE_HELP_US_MESSAGE_1]:
      'También puede ayudarnos a alcanzar nuestro objetivo compartiendo el desafío Tarteel 100,000',
    [KEYS.SUBSCRIBE_PAGE_HELP_US_MESSAGE_2]: 'con tus amigos y familiares!',
    [KEYS.SUBSCRIBE_PAGE_RECEIVE_MESSAGE]:
      'Reciba actualizaciones por correo electrónico sobre Tarteel. Puedes darte de baja en cualquier momento',

    // DATASET
    [KEYS.TARTEEL_DATASET_PAGE_TITLE]: 'Descargue 25k de conjunto de datos | Tarteel',
    [KEYS.TARTEEL_DATASET_LINK_TEXT]: 'Tarteel conjunto de datos',
    [KEYS.DATASET_DOWNLOAD_TEXT]: 'Descargue el conjunto de datos de Tarteel',
    [KEYS.DATASET_DOWNLOAD_PARAGRAPH]:
      'El conjunto de datos completo está disponible en formato CSV. Los archivos de audio se pueden descargar de las URL adjuntas en el CSV.',
    [KEYS.DATASET_DOWNLOAD_DETAILS]:
      '(.csv, 5.6 MB) -- aproximadamente 25,000 grabaciones sin evaluaciones.',
    [KEYS.DATASET_DOWNLOAD_SAMPLE_RECORDINGS_TEXT]:
      'Descargar grabaciones de muestra',
    [KEYS.DATASET_DOWNLOAD_SAMPLE_RECORDINGS_PARAGRAPH]:
      'Aquí hay algunos archivos de audio de muestra enviados por usuarios de Tarteel:',

    // COOKIES MESSAGES
    [KEYS.COOKIES_BUTTON_TEXT]: 'Entendido!',
    [KEYS.PRIVACY_POLICY_LINK_TEXT]: 'Política de privacidad',
    [KEYS.COOKIE_POLICY_LINK_TEXT]: 'Política de los cookies',
    [KEYS.COOKIES_NOTICE_MESSAGE_1]:
      'Utilizamos cookies para garantizar que tenga la mejor experiencia de navegación en nuestro sitio web.',
    [KEYS.COOKIES_NOTICE_MESSAGE_2]:
      'Al usar nuestro sitio, usted reconoce que ha leído y entendido nuestro',

    // NOT FOUND PAGE
    [KEYS.NOT_FOUND_PAGE_TEMPLATE_TITLE]: 'No encontrado',
    [KEYS.NOT_FOUND_PAGE_GO_HOME_LINK]: 'Ir a inicio',
    [KEYS.NOT_FOUND_PAGE_TEXT]: 'Página no encontrada',

    // AYAH COMPONENT
    [KEYS.AYAH_NOT_FOUND_PAGE_TEXT]: 'No es un índice de Ayah correcto',
    [KEYS.PICK_DIFFERENT_AYAH]: 'Elige diferentes Ayah',
    [KEYS.AYAH_SHOW_TRANSLITERATION]: 'Mostrar transliteración',
    [KEYS.AYAH_HIDE_TRANSLITERATION]: 'Ocultar transliteración',
    [KEYS.AYAH_COMPONENT_LOADING_MESSAGE]:
      'Cargando ayah... (si un ayah no aparece, intente hacer clic en "siguiente ayah")',
    [KEYS.AYAHS_RECITED]: 'Ayahs contribuyó',

    // ABOUT PAGE
    [KEYS.ABOUT_PAGE_TEMPLATE_TITLE]: 'Acerca de Nosotros | Tarteel',
    [KEYS.ABOUT_PAGE_RECITED_AYAHS_MESSAGE]:
      'Nuestros usuarios nos han ayudado a alcanzar un total de <b>{recitedAyahs}</b> ayahs <a href="/contribute">contribuidas</a> hasta ahora alhamdulillah!',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TITLE]:
      'Inteligencia Artificial para perfeccionar la recitación del Corán',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TEXT_1]:
      'Tarteel es una aplicación para el Corán que escucha tu recitación y corrige errores. El nombre tarteel proviene del Corán mismo, donde Dios nos ordena "recitar el Corán con Tarteel (tonos lentos, medidos y rítmicos)" (73: 4).',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TEXT_2]:
      'Tarteel aprovecha la última tecnología en inteligencia artificial y aprendizaje automático (ML) para realizar reconocimiento de voz y analizar recitaciones. Para potenciar nuestros algoritmos de ML, requerimos un conjunto de datos amplio y diverso de recitadores de todo el mundo para contribuir con sus recitaciones. Cuantos más envíos reciba el algoritmo, más preciso se volverá.',
    [KEYS.ABOUT_PAGE_FIRST_PARAGRAPH_TEXT_3]:
      'Nuestro objetivo es apoyar y servir a nuestros Imams e Instituciones que buscan enseñar a los musulmanes cómo leer las palabras de Allah - SWT - y proporcionar a aquellos con acceso limitado a Imams y Sheikhs un medio para mantener su relación con Allah - SWT - y su libro.',
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TITLE]:
      '¿Por qué estamos recolectando recitaciones?',
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TEXT_1]:
      'Comenzamos Tarteel como una iniciativa para recopilar el primer y más grande conjunto de datos de código abierto del mundo de recitaciones coránicas realizadas por musulmanes comunes. La mayor parte del audio disponible del Corán que se recita proviene de recitadores profesionales con gran fluidez en tajweed (reglas de recitación) y se graba en estudios. Esto es valioso cuando alguien quiere escuchar una recitación profesional del Corán.',
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TEXT_2]:
      "Sin embargo, muchas herramientas de software que los desarrolladores musulmanes están interesados ​​en construir requieren modelos de aprendizaje automático en la recitación coránica (por ejemplo, para convertir la recitación en texto), tal como lo recitan los musulmanes comunes. La recitación de musulmanes comunes difiere de las grabaciones profesionales de muchas maneras: por ejemplo, puede incluir ruido de fondo, o puede ser recitada por personas con un conocimiento limitado de tajweed, o la demografía de los recitadores puede ser diferente. Al recopilar estos datos, podemos entrenar modelos de aprendizaje automático, que lanzaremos a los desarrolladores de software que estén interesados ​​en desarrollar <a href='https://docs.google.com/presentation/d/1hlcbAcEfBg2y_KWwzyPPYjh5SMxowDEWM1XkDC48ZGQ/edit?usp=sharing'>una amplia variedad de aplicaciones</a> que se basan la recitación a texto, cosas como:",
    [KEYS.ABOUT_PAGE_SECOND_PARAGRAPH_TEXT_2_LINK]:
      'una amplia variedad de aplicaciones',
    [KEYS.ABOUT_PAGE_THIRD_PARAGRAPH_TITLE]: 'Nuestro progreso hasta la fecha',
    [KEYS.ABOUT_PAGE_FOURTH_PARAGRAPH_TITLE]:
      '¿Son variados los versos que se recitan?',
    [KEYS.ABOUT_PAGE_FOURTH_PARAGRAPH_TEXT]:
      "Para construir buenos modelos de aprendizaje automático, es útil que la gente recite diferentes versículos de todo el Corán. Estamos midiendo qué tan bien hemos cubierto el Corán y estas son nuestras estadísticas hasta ahora:",
    [KEYS.ABOUT_PAGE_FIFTH_PARAGRAPH_TITLE]: 'El equipo de Tarteel',
    [KEYS.ABOUT_PAGE_SIXTH_PARAGRAPH_TITLE]:
      '¿Son variados los versos que se recitan?',
    [KEYS.ABOUT_PAGE_SIXTH_PARAGRAPH_TEXT]:
      "Para construir buenos modelos de aprendizaje automático, es útil que la gente recite diferentes versículos de todo el Corán. Estamos midiendo qué tan bien hemos cubierto el Corán y estas son nuestras estadísticas hasta ahora:",
    [KEYS.ABOUT_PAGE_SEVENTH_PARAGRAPH_TITLE]:
      "¿Cuál es la política de privacidad de Tarteel?",
    [KEYS.ABOUT_PAGE_SEVENTH_PARAGRAPH_TEXT]:
      "Los usuarios que proporcionan a Tarteel grabaciones de audio de sus recitaciones también brindan una valiosa confianza a nuestro equipo. Para proteger su privacidad, al mismo tiempo que creamos un conjunto de datos público para ser lanzado a los desarrolladores, tomamos los pasos establecidos en nuestra <a href='/privacy'>política de privacidad</a>.",
    [KEYS.ABOUT_PAGE_LAST_PARAGRAPH_TITLE]:
      '¿Dónde puedo obtener más información sobre Tarteel?',
    [KEYS.ABOUT_PAGE_LAST_PARAGRAPH_TEXT]:
      "Para obtener más información, consulte nuestro <a href='https://drive.google.com/open?id=17RpnWAbmmkl3iPM9awSNsf4S_2Mk_pKd' target='_blank'>papel blanco</a>.",
    [KEYS.FIELDS_OF_USE_FIRST_ITEM]:
      'herramientas de ayuda de memorización que corrigen errores automáticamente',
    [KEYS.FIELDS_OF_USE_SECOND_ITEM]:
      'Tajweed teaching tools in a similar vein',
    [KEYS.FIELDS_OF_USE_THIRD_ITEM]:
      'Quioscos de mezquita que siguen al imán y muestran la traducción del verso',

    // MOBILE PAGE
    [KEYS.MOBILE_PAGE_TITLE]: 'Aplicación movil | Tarteel',
    [KEYS.MOBILE_KEYWORD]: 'Descargue nuestra aplicación móvil',
    [KEYS.MOBILE_PAGE_PARAGRAPH]:
      'puedes usar Tarteel sobre la marcha para hacer que tus descansos y viajes diarios sean más productivos y llenos de recompensas con nuestras aplicaciones de Android e iOS.',

    // GENERAL INPUTS
    [KEYS.NAME_INPUT_PLACEHOLDER]: 'p.ej, Juan',
    [KEYS.EMAIL_ADDRESS_INPUT_PLACEHOLDER]: 'p.ej, Juan@ejemplo.com',
    [KEYS.MESSAGE_TEXTAREA_PLACEHOLDER]: 'Su mensaje aquí...',
    [KEYS.NAME_INPUT_LABEL]: 'Nombre',
    [KEYS.USERNAME_INPUT_LABEL]: 'Usuario',
    [KEYS.PHONE_NUMBER_INPUT_LABEL]: 'Teléfono',
    [KEYS.EMAIL_ADDRESS_INPUT_LABEL]: 'Correo electronico',
    [KEYS.MESSAGE_TEXTAREA_LABEL]: 'Mensaje',

    // LANDING
    [KEYS.LANDING_GREETING_MESSAGE]: 'Salaam!',
    [KEYS.LANDING_FIRST_PARAGRAPH]:
      " Bienvenido al <b>Reto de 100,000 Tarteel</b>! Gracias por ayudarnos a construir el primer público del mundo., conjunto de datos de código abierto</a> de recitaciones del Corán por hombres y mujeres musulmanes comunes. <a href='/about'>Aprende más</a>",
    [KEYS.LANDING_SECOND_PARAGRAPH_TITLE]: 'Cómo funciona',
    [KEYS.LANDING_LIST_FIRST_ITEM]:
      'Para comenzar, Tarteel le proporcionará <b>5 versos</b> para recitar.',
    [KEYS.LANDING_LIST_SECOND_ITEM]:
      "Haga clic en el micrófono para grabarse recitando el verso. <b>No te preocupes</b> acerca de hacer que su recitación sea perfecta, ya que estamos buscando personas con una variedad de niveles de recitación.",
    [KEYS.LANDING_LIST_THIRD_ITEM]:
      "Estas recitaciones<a href='/privacy'>será realizado</a> como una iniciativa de código abierto para alentar las aplicaciones de aprendizaje automático basadas en recitaciones del Corán.",
    [KEYS.LANDING_LAST_LINE]:
      'Clic <strong>EMPEZAR</strong> para comenzar!',
    [KEYS.LANDING_BUTTON_TEXT]: 'Empezar',

    // CONTACT US
    [KEYS.CONTACT_US_PAGE_TITLE]: 'Contáctenos | Tarteel',
    [KEYS.CONTACT_US]: 'Contáctenos',
    [KEYS.CONTACT_US_SEND]: 'Send',
    [KEYS.CONTACT_US_BUTTON_TEXT]: 'Contáctenos',
    [KEYS.CONTACT_US_SUBJECT]: 'Subject',
    [KEYS.CONTACT_US_EMAIL_TEXT]: 'Puedes contáctenos enviando un correo electrónico <a href="mailto:info@tarteel.io">info@tarteel.io</a> o utilizando el siguiente formulario.',

    // LOGIN FORM
    [KEYS.LOGOUT_BUTTON]: 'Cerrar sesión',
    [KEYS.LOGIN_BUTTON]: 'Iniciar sesión',
    [KEYS.LOGIN_DONT_HAVE_ACCOUNT]: "¿No tienes una cuenta? Registrarse",
    [KEYS.LOGIN_FORGET_PASSWORD]: '¿Se te olvidó tu contraseña?',
    [KEYS.LOGIN_EMAIL_USERNAME_LABEL]: 'Email/Nombre de usuario',
    [KEYS.LOGIN_USERNAME_LABEL]: 'Nombre de usuario',
    [KEYS.LOGIN_PASSWORD_LABEL]: 'Contraseña',
    [KEYS.LOGIN_PASSWORD_PLACEHOLDER]: 'Escribe tu contraseña',

    // SIGNUP FORM
    [KEYS.SIGNUP_REGISTER_BUTTON]: 'Registrarse',
    [KEYS.SIGNUP_REGISTER_MESSAGE]: '¿Ya tienes una cuenta? Iniciar sesión',

    // NEW PASSWORD FORM
    [KEYS.NEW_PASSSWORD_VERIFY_LOGIN_MESSAGE]:
      'Su nueva contraseña ha sido establecida, puede comenzar a usarla para iniciar sesión ahora.',
    [KEYS.NEW_PASSSWORD_VERIFY_LOGIN_BUTTON]: '¿Inicia sesión ahora?',

    // VERIFY PASSWORD FORM
    [KEYS.VERIFY_PASSWORD_TITLE]: 'Restablecer su contraseña',
    [KEYS.VERIFY_PASSWORD_MESSAGE]:
      "Le enviamos un código de verificación a su correo electrónico:",
    [KEYS.VERIFY_PASSWORD_BUTTON]: 'Cambia la contraseña',
    [KEYS.VERIFY_PASSWORD_VERIFICATION_CODE_LABEL]: 'Código de verificación',
    [KEYS.VERIFY_PASSWORD_NEW_PASSWORD_LABEL]: 'Nueva contraseña',

    // RECORDING ERROR
    [KEYS.RECORDING_ERROR_MESSAGE_MOBILE_GENERIC]:
      "No parece que tenga los permisos de micrófono habilitados. Asegúrese de habilitar los permisos de micrófono o descargue la aplicación móvil: ",
    [KEYS.RECORDING_ERROR_MESSAGE_IOS]:
      "No parece que tenga permisos de micrófono habilitados. Cambie a Safari y habilite los permisos de micrófono o descargue la aplicación móvil:",
    [KEYS.RECORDING_ERROR_MESSAGE_DESKTOP]:
      'Para cargar grabaciones, habilite el acceso al micrófono o use un navegador diferente.',

    // FOOTER
    [KEYS.FOOTER_EVALUATOR_LINK]: '¿Quieres ayudarnos a evaluar algunas ayahs??',
    [KEYS.FOOTER_MESSAGE_1]: 'Gracias por ayudarnos a recitar ayahs.',
    [KEYS.FOOTER_MESSAGE_2]:
      'También puede ayudarnos a evaluar algunas ayahs que otras personas han recitado.',
    [KEYS.FOOTER_MESSAGE_3]:
      'Con la ayuda de usuarios como usted, hemos evaluado',

    // RESET PASSWORD
    [KEYS.RESET_YOUR_PASSWORD_TITLE]: 'Restablecer su contraseña',
    [KEYS.RESET_YOUR_PASSWORD_BUTTON]: 'Restablecer',

    // AYAH RECOGNITION PAGE
    [KEYS.AYAH_RECOGNITION]: 'Reconocimiento Ayah',
    [KEYS.AYAH_RECOGNITION_POWERED_BY]:
      "Desarrollado por <a href={url} target='_blank'>Iqra</a>",
    [KEYS.AYAH_RECOGNITION_RECOGNITION_MESSAGE]:
      'Búsqueda por voz en el Corán recitando un verso o parte de un verso.',
    [KEYS.AYAH_RECOGNITION_IMPROVE_ACCURACY]:
      '¿Quieres ver la corrección de recitación?',
    [KEYS.AYAH_RECOGNITION_CONTRIBUTE]: 'Contribuye tu grabación',
    [KEYS.AYAH_RECOGNITION_MIC_PERMISSION_ERROR]:
      "El permiso para usar el micrófono está bloqueado. Para arreglarlo, por favor \n <a target='_blank' href={chromeLink}> cambia tu configuración aquí</a>.",
    [KEYS.AYAH_RECOGNITION_AUDIO_CAPTURE_ERROR]:
      "No se encontró ningún micrófono. Asegúrese de que haya un micrófono instalado y que la \n <a target='_blank' href={errorLink}> configuración de su micrófono </a> \n esté configurada correctamente.",
    [KEYS.AYAH_RECOGNITION_NO_SPEECH_ERROR]:
      "No se detecto activado el reconocimiento de voz. Necesitas ajustar la <a target='_blank' href={errorLink}> configuración del micrófono</a>.",
    [KEYS.AYAH_RECOGNITION_RESULTS]: 'Resultados',
    [KEYS.AYAH_RECOGNITION_NEW_SEARCH]: 'Nueva búsqueda',
    [KEYS.TRANSCRIBE_SEARCH_NOTE]:
      "No hemos podido igualar tu recitación. Recita durante un período más largo en tu próxima grabación para obtener funciones como seguimiento, modo de memorización y otras. Puedes encontrar los detalles sobre esto",
    [KEYS.VIDEO]: 'vídeo',
    [KEYS.SEARCHING]: 'buscando...',

    // PROFILE PAGE
    [KEYS.PROFILE_TITLE]: 'Mi perfil | Tarteel',
    [KEYS.PROFILE_THANKS_USER_FOR_CONTRIBUTING_MESSAGE]:
      'Gracias por su trabajo en contribuir a Tarteel.',
    [KEYS.PROFILE_TOTAL_OF_VERSES_HAS_BEEN_RECITED]:
      'Has recitado un total de <strong>{userRecitedAyahs}</strong> versos.',
    [KEYS.PROFILE_SEE_STATISTICS_MESSAGE]:
      'Esta información se basa solo en sesiones grabadas usando este dispositivo y navegador en particular, y puede no aparecer si borra su caché o usa un navegador diferente. Si desea ver estas estadísticas en un dispositivo diferente o <a href = `https://facebook.com/sharer/sharer.php?u=https://www.tarteel.io/profile/${sessionId}` target="_blank" aria-label=""> compartir</a> estas estadísticas, utilice el siguiente enlace:',
    [KEYS.PROFILE_WEEKLY_ACTIVITY]: 'Su actividad semanal',
    [KEYS.PROFILE_VERSES_RECITED_LAST_WEEK]: 'Versos recitados la semana pasada',
    [KEYS.PROFILE_VERSES_RECITED_PARAGRAPH_MESSAGE]:
      'Estos son los versos que recitó durante la semana pasada. Haga clic en un verso para escuchar su grabación.',
    [KEYS.PROFILE_OLDER_RECITATIONS]: 'Recitaciones mayores',
    [KEYS.PROFILE_OLDER_RECITATIONS_PARAGRAPH_MESSAGE]:
      'Estos son los versos hace más de una semana. Haga clic en un verso para escuchar su grabación.',
    [KEYS.PROFILE_NOTE_MESSAGE]: 'No visible en tu perfil público',
    [KEYS.PROFILE_SHARE_MESSAGE]: 'Comparte tu perfil',

    // EVALUATOR PAGE
    [KEYS.EVALUATOR_TITLE_TEXT]: 'Escucha y evalúa',
    [KEYS.EVALUATOR_PARAGRAPH_1]:
      '¿Se está recitando el verso correcto en esta grabación?',
    [KEYS.EVALUATOR_PARAGRAPH_2]:
      "(No te preocupes por errores menores., <em>tajweed</em>, ruido de fondo, o incluso una palabra omitida.)",
    [KEYS.EVALUATOR_PARAGRAPH_2_LINK_TEXT]: 'Ver más ayuda',
    [KEYS.EVALUATOR_CLICK_TO_HEAR_TEXT]: 'escuchar los párrafos.',
    [KEYS.EVALUATOR_THANKS_FOR_HELPING_MESSAGE_1]:
      'Gracias por ayudarnos a evaluar las ayahs recitadas.',
    [KEYS.EVALUATOR_THANKS_FOR_HELPING_MESSAGE_2]:
      'Con la ayuda de usuarios como usted, hemos evaluado',
    [KEYS.EVALUATOR_THANKS_FOR_HELPING_MESSAGE_3]:
      '¿Quieres ayudarnos a evaluar más ayahs?',

    // PRIVACY POLICY PAGE
    [KEYS.PRIVACY_POLICY_PAGE_TITLE]: "Política de privacidad de Tarteel",
    [KEYS.PRIVACY_POLICY_PAGE_PARAGRAPH]:
      'Última actualización: 6 de octubre de 2019<br/><br/> Tarteel se compromete a mantener sólidas protecciones de privacidad para sus usuarios. Nuestra Política de privacidad está diseñada para ayudarlo a comprender cómo recopilamos, usamos y salvaguardamos la información que nos proporciona y para ayudarlo a tomar decisiones informadas cuando utiliza nuestro sitio o servicios (colectivamente, el "Sitio"). Al acceder a nuestro Sitio, usted acepta nuestra Política de privacidad, y acepta que recopilemos, almacenemos, usemos y divulguemos su Información y datos personales como se describe en esta Política de privacidad. <br/> <br/> <h2> I. Información que recopilamos </h2> <br/> Recopilamos “Información no personal” e “Información personal”. La información no personal incluye información que no se puede utilizar para identificarlo personalmente, como datos de uso anónimos, información demográfica general que podemos recopilar, páginas y URL de referencia / salida, tipos de plataforma, preferencias que envía y preferencias que se generan en función de los datos usted envía y número de clics. La información personal incluye las grabaciones de voz que nos envía a través del uso del sitio, la información demográfica que proporciona, las direcciones IP y su correo electrónico cuando elige unirse a la lista de correo o crear una cuenta.<br/><br/> <h3>1. Información recopilada a través de la tecnología</h3><br/> En un esfuerzo por mejorar la calidad del Servicio, rastreamos la información que nos proporciona su navegador o nuestra aplicación de software cuando ve o utiliza el Servicio, como el sitio web del que proviene (conocido como "URL de referencia"), el tipo de navegador que usa, el dispositivo desde el cual se conectó al Sitio, la hora y la fecha de acceso y otra información que no lo identifica personalmente. Rastreamos esta información utilizando cookies o pequeños archivos de texto que incluyen un identificador único anónimo. Las cookies se envían al navegador de un usuario desde nuestros servidores y se almacenan en el disco duro de la computadora del usuario. Enviar una cookie al navegador de un usuario nos permite recopilar información no personal sobre ese usuario y mantener un registro de las preferencias del usuario cuando utiliza nuestros servicios, tanto de forma individual como global. Para más detalles, consulte nuestra Política de cookies.<br/><br/> <h3>2. Información que nos proporciona</h3><br/> Además de la información proporcionada automáticamente por su navegador cuando visita el Sitio, los usuarios de este sitio envían voluntariamente información a través de este sitio. Recopilamos esta información, incluidas las grabaciones de voz que nos envía a través del uso del Sitio, la información demográfica que proporciona, así como su correo electrónico cuando elige unirse a la lista de correo o crear una cuenta.<br/><br/> <h3>3. Privacidad de los niños y niñas</h3><br/> El Sitio y el Servicio no están dirigidos a ninguna persona menor de 13 años. El Sitio no recopila ni solicita información de ninguna persona menor de 13 años. En caso de que sepamos que hemos recopilado información personal de cualquier persona menor de esa edad de 13 sin el consentimiento de un padre o tutor, eliminaremos esa información lo antes posible. Si cree que hemos recopilado dicha información, contáctenos a <a href="mailto:info@tarteel.io">info@tarteel.io</a> con asunto: “[Política de privacidad] Uso de menores sin consentimiento”. <br/><br/> <h2>II. Cómo usamos y compartimos información</h2><br/> <h3>Informacion personal:</h3> <br/> Salvo que se indique lo contrario en esta Política de privacidad, no vendemos, intercambiamos, alquilamos ni compartimos su información personal con terceros sin su consentimiento. Compartimos información personal con proveedores que realizan servicios para la Compañía, como los servidores de nuestras comunicaciones por correo electrónico a quienes se les proporciona acceso a la dirección de correo electrónico del usuario para enviarnos correos electrónicos. Esos proveedores usan su información personal solo bajo nuestra dirección y de acuerdo con nuestra Política de privacidad. Sin embargo, tenga en cuenta que el conjunto de datos que estamos creando es parcialmente de código abierto: esto significa que los archivos de audio de las recitaciones pueden publicarse junto con la información demográfica que ha proporcionado. Esto es para proporcionar a los desarrolladores de software la capacidad de desarrollar herramientas basadas en los datos. Tenga esto en cuenta antes de usar el Sitio.<br/><br/> En general, la información personal que nos proporciona se utiliza para ayudarnos a comunicarnos con usted. Por ejemplo, utilizamos la información personal para contactar a los usuarios en respuesta a preguntas, solicitar comentarios de los usuarios, brindar soporte técnico e informar a los usuarios sobre las ofertas promocionales.<br/><br/> Podemos compartir información personal con terceros si creemos de buena fe que el acceso, uso, preservación o divulgación de la información es razonablemente necesario para cumplir con cualquier proceso legal aplicable o solicitud gubernamental exigible; para hacer cumplir los Términos de servicio aplicables, incluida la investigación de posibles violaciones; abordar el fraude, la seguridad o las preocupaciones técnicas; o para proteger contra daños a los derechos, la propiedad o la seguridad de nuestros usuarios o del público según lo exija o permita la ley.<br/><br/> <h3>Información no personal</h3><br/> En general, utilizamos información no personal para ayudarnos a mejorar el Servicio y personalizar la experiencia del usuario. También agregamos información no personal para rastrear tendencias y analizar patrones de uso en el sitio. Esta política de privacidad no limita de ninguna manera nuestro uso o divulgación de información no personal y nos reservamos el derecho de usar y divulgar dicha información no personal a nuestros socios, anunciantes y otros terceros a nuestro criterio.<br/><br/> En el caso de que nos sometamos a una transacción comercial, como una fusión, adquisición por otra compañía o venta de todo o una parte de nuestros activos, su información personal puede estar entre los activos transferidos. Usted reconoce y acepta que tales transferencias pueden ocurrir y están permitidas por esta Política de privacidad, y que cualquier adquirente de nuestros activos puede continuar procesando su Información personal como se establece en esta Política de privacidad. Si nuestras prácticas de información cambian en algún momento en el futuro, publicaremos los cambios de política en el Sitio para que pueda optar por no participar en las nuevas prácticas de información. Sugerimos que revise el Sitio periódicamente si le preocupa cómo se usa su información.<br/><br/> <h2>III. Cómo protegemos su información</h2><br/> Implementamos medidas de seguridad diseñadas para proteger su información del acceso no autorizado. Su cuenta está protegida por la contraseña de su cuenta y le recomendamos que tome medidas para mantener segura su información personal al no revelar su contraseña y al cerrar sesión en su cuenta después de cada uso. Protegemos aún más su información de posibles infracciones de seguridad mediante la implementación de ciertas medidas tecnológicas de seguridad que incluyen cifrado, firewalls y tecnología de capa de conexión segura. Sin embargo, estas medidas no garantizan que su información no sea visitada, divulgada, alterada o destruida por la violación de dichos firewalls y software de servidor seguro. Al utilizar nuestro Servicio, usted reconoce que comprende y acepta asumir estos riesgos.<br/><br/> <h2>IV. Sus derechos con respecto al uso de su información personal</h2><br/> Tiene derecho en cualquier momento a evitar que nos comuniquemos con usted con fines de marketing. Cuando enviamos una comunicación promocional a un usuario, el usuario puede optar por no recibir más comunicaciones promocionales siguiendo las instrucciones de cancelación de suscripción proporcionadas en cada correo electrónico promocional. También puede indicar que no desea recibir nuestras comunicaciones de marketing al optar por no participar en<a href=”https://tarteel.us19.list-manage.com/unsubscribe?u=9b0faa8fa13ee6568ec91de2a&id=5a464ba313”>este enlace</a> [https://tarteel.us19.list-manage.com/unsubscribe?u=9b0faa8fa13ee6568ec91de2a&id=5a464ba313]. Tenga en cuenta que, a pesar de las preferencias promocionales que indique al darse de baja o al excluirse del Sitio, podemos continuar enviándole correos electrónicos administrativos que incluyen, por ejemplo, actualizaciones periódicas de nuestra Política de privacidad. <br/><br/> <h2>V. Enlaces a otros sitios web</h2><br/> Como parte del Servicio, podemos proporcionar enlaces o compatibilidad con otros sitios web o aplicaciones. Sin embargo, no somos responsables de las prácticas de privacidad empleadas por esos sitios web ni de la información o el contenido que contienen. Esta Política de privacidad se aplica únicamente a la información recopilada por nosotros a través del Sitio y el Servicio. Por lo tanto, esta Política de privacidad no se aplica a su uso de un sitio web de terceros al que se accede seleccionando un enlace en nuestro Sitio o mediante nuestro Servicio. En la medida en que acceda o use el Servicio a través de otro sitio web o aplicación, la política de privacidad de ese otro sitio web o aplicación se aplicará a su acceso o uso de ese sitio o aplicación. Alentamos a nuestros usuarios a leer las declaraciones de privacidad de otros sitios web antes de proceder a usarlos.<br/><br/> <h2>VI. Cambios a nuestra política de privacidad</h2><br/> Revise la leyenda "Última actualización" en la parte superior de la Política de cookies para determinar cuándo se modificó por última vez. Cualquier cambio entrará en vigencia en la fecha de "Última actualización" indicada anteriormente. Al utilizar el Sitio o proporcionarnos información después de dichos cambios, habrá aceptado la Política de cookies modificada. Tarteel se reserva el derecho de cambiar esta política y nuestros Términos de servicio en cualquier momento. Le notificaremos sobre cambios significativos en nuestra Política de privacidad enviando un aviso a la dirección de correo electrónico principal especificada en su cuenta o colocando un aviso destacado en nuestro sitio o por otros medios según lo exija la ley. Los cambios significativos entrarán en vigencia 30 días después de dicha notificación. Los cambios o aclaraciones no materiales entrarán en vigencia de inmediato. Debe consultar periódicamente el Sitio y esta página de privacidad para obtener actualizaciones. <br/> ',
    [KEYS.PRIVACY_POLICY_COOKIE_POLICY_TITLE]: "Política de cookies de Tarteel",
    [KEYS.PRIVACY_POLICY_COOKIE_POLICY_PARAGRAPH]:
      'Última actualización: 6 de octubre de 2019 <br/> <br/> Al usar o acceder a los sitios o servicios de Tarteel (colectivamente, el "Sitio"), usted acepta el uso de cookies de Tarteel como se describe a continuación. <br/> <br / > <h2> I. Introducción: ¿Qué es una cookie? </h2> <br/> Esta política de cookies ayuda a explicar las ocasiones en que y por qué las cookies pueden enviarse a los visitantes del Sitio (en esta política se hace referencia a "nosotros", "nos" o "nuestra"). Las "cookies" son piezas de información de solo texto que un sitio web transfiere al disco duro de una persona u otro equipo de navegación del sitio web con fines de mantenimiento de registros. Las cookies permiten que el sitio recuerde información importante que hará que su uso del sitio sea más conveniente. Una cookie generalmente contendrá el nombre del dominio del que proviene la cookie, la "vida útil" de la cookie y un número único u otro valor generado aleatoriamente. Ciertas cookies se utilizarán en el Sitio independientemente de si ha iniciado sesión en su cuenta o no. Las cookies de sesión son cookies temporales que permanecen en el archivo de cookies de su navegador hasta que abandone el sitio. <br/> Las cookies persistentes permanecen en el archivo de cookies de su navegador durante mucho más tiempo (aunque el tiempo dependerá de la vida útil de la cookie específica ) Cuando utilizamos cookies de sesión para rastrear el número total de visitantes a nuestro Sitio, esto se hace de forma anónima (ya que las cookies en sí no contienen ningún dato personal). También podemos utilizar cookies para que recordemos su computadora cuando se utiliza para regresar al Sitio para ayudarlo a personalizar su experiencia web en Tarteel. Podemos asociar información personal con un archivo de cookies en esos casos. <br/> <br/> <h2> II. Cómo Tarteel usa las cookies </h2> <br/> Utilizamos cookies de terceros como Google para servicios de análisis y para fines de marketing. Esto tiene lugar desde el Sitio y cuando descarga o instala una aplicación Tarteel. Tarteel utiliza cookies para analizar la actividad del usuario con el fin de mejorar el Sitio. Por ejemplo, podemos usar cookies para observar patrones agregados como el número promedio de contribuciones que proporcionan los usuarios. Podemos utilizar dicho análisis para obtener información sobre cómo mejorar la funcionalidad y la experiencia del usuario del Sitio. <br/><br/><h2>III. Administrar cookies en su navegador</h2><br/> Utilice las opciones en su navegador web si no desea recibir una cookie o si desea configurar su navegador para que le notifique cuando reciba una cookie. Puede eliminar y administrar fácilmente cualquier cookie que se haya instalado en la carpeta de cookies de su navegador siguiendo las instrucciones proporcionadas por el fabricante de su navegador en particular.<br/> <br/> <ul> <li> <a href="https://support.google.com/chrome/answer/95647?hl=es-MX"> Google Chome </a> </ li> <li> <a href="https://support.microsoft.com/es-mx/help/260971/description-of-cookies"> Internet Explorer </a> </li> <li> <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-">Mozilla Firefox </a> </li> <li> <a href="https://support.apple.com/es-mx/guide/safari/sfri11471/mac">Safari (Desktop) </a> </li> <li> <a href="https://support.apple.com/es-mx/HT201265"> Safari (móvil) </a> </li> <li> <a href="https://support.google.com/nexus/answer/54068?visit_id=637258661778231482-3765152630&hl=es&rd=1"> Navegador de Android </a> </li> <li> <a href="http://www.opera.com/help"> Opera </a> </li> < li> <a href="https://www.opera.com/help/tutorials/security/privacy/"> Opera Mobile </a> </li> </ul> <br/> si su navegador no es enumerados aquí, consulte la documentación que proporciona el fabricante de su navegador en particular. También puede consultar la documentación de su dispositivo móvil para obtener información sobre cómo deshabilitar las cookies en su dispositivo móvil. Si desactiva todas las cookies, es posible que no pueda aprovechar todas las características de este Sitio. Tenga en cuenta que si no ha borrado sus cookies o caché, cuyo contenido puede afectar las funciones de autocompletar en el sitio de Tarteel y usted es responsable de tales acciones. <br/> <br/> Tarteel utiliza Google Analytics para el seguimiento de usuarios y métricas del sitio web. Tarteel y Google utilizan cookies propias (como la cookie de Google Analytics). Puede optar por no participar en Google Analytics visitando el Administrador de preferencias de Google Ads. Para proporcionar a los visitantes del sitio web más opciones sobre cómo Google Analytics recopila sus datos, Google ha desarrollado un complemento de exclusión voluntaria, que está disponible visitando <a href = "https://tools.google.com/dlpage/gaoptout"> Complemento de exclusión voluntaria del navegador Google Analytics </a> [https://tools.google.com/dlpage/gaoptout], para permitirle optar por no participar en los programas de Google. <br/><br/><h2>IV. Cambios a nuestra política de cookies</h2><br/> Revise la leyenda "Última actualización" en la parte superior de la Política de cookies para determinar cuándo se modificó por última vez. Cualquier cambio entrará en vigencia en la fecha de "Última actualización" indicada anteriormente. Al utilizar el Sitio o proporcionarnos información después de dichos cambios, habrá aceptado la Política de cookies modificada. Si Tarteel va a utilizar los Datos personales recopilados a través del Sitio de una manera sustancialmente diferente a la establecida en el momento de la recopilación, Tarteel notificará a los usuarios por correo electrónico y / o publicará un aviso en el Sitio de Tarteel durante 30 días antes de dicho uso o por otros medios según lo exija la ley. <br/>',
    // CONTRIBUTE PAGE
    [KEYS.CONTRIBUTE_PAGE_TITLE]: 'Contribuye tu grabación | Tarteel',

    // PARTNERS PAGE
    [KEYS.PARTNERS_PAGE_TITLE]: 'Socios | Tarteel',
    [KEYS.PARTNERS_PARAGRAPH]:
      "Nos hemos asociado orgullosamente con estas organizaciones para continuar la misión de Tarteel. Si estás interesado en asociarte con nosotros, <a href='/contact'>Ponerse en contacto</a>!",

    // DONATE PAGE
    [KEYS.DONATE_PAGE_TITLE]: 'Donar | Tarteel',

    // CONTRIBUTORS

    [KEYS.CONTRIBUTOR_NAME_1]: 'Abdellatif Abdelfattah',
    [KEYS.CONTRIBUTOR_POSITION_1]: 'Ingeniero en Twitter',
    [KEYS.CONTRIBUTOR_NAME_2]: 'Abdulrahman Alfozan',
    [KEYS.CONTRIBUTOR_POSITION_2]: 'Ingeniero en Facebook',
    [KEYS.CONTRIBUTOR_NAME_6]: 'Anas Abou Allaban',
    [KEYS.CONTRIBUTOR_POSITION_6]: 'Ingeniero en Amazon',
    [KEYS.CONTRIBUTOR_NAME_7]: 'Dina Atia',
    [KEYS.CONTRIBUTOR_POSITION_7]: 'Interna en Tarteel',
    [KEYS.CONTRIBUTOR_NAME_8]: 'Hamzah Khan',
    [KEYS.CONTRIBUTOR_POSITION_8]: 'Ingeniero en Uber ATG',
    [KEYS.CONTRIBUTOR_NAME_9]: 'Fahim Dalvi',
    [KEYS.CONTRIBUTOR_POSITION_9]: 'Investigador en QCRI',
    [KEYS.CONTRIBUTOR_NAME_10]: 'Marwa Abdulhai',
    [KEYS.CONTRIBUTOR_POSITION_10]: 'Estudiante de informática en el MIT',
    [KEYS.CONTRIBUTOR_NAME_11]: 'Ahmed Elabd',
    [KEYS.CONTRIBUTOR_POSITION_11]: 'Márketing en Mundipharma',
    [KEYS.CONTRIBUTOR_NAME_12]: 'Mohamed Moussa',
    [KEYS.CONTRIBUTOR_POSITION_12]: 'Ingeniero en Facebook',
    [KEYS.CONTRIBUTOR_NAME_13]: 'Ahmed Hussein',
    [KEYS.CONTRIBUTOR_POSITION_13]: 'Ingeniero en Tarteel',
    [KEYS.CONTRIBUTOR_NAME_14]: 'Amr Elfass',
    [KEYS.CONTRIBUTOR_POSITION_14]: 'Miembro de la Junta en ISB',
    [KEYS.CONTRIBUTOR_NAME_15]: 'Basyouny Nehela',
    [KEYS.CONTRIBUTOR_POSITION_15]: 'Presidente del seminario islámico de Boston BIS',
    [KEYS.CONTRIBUTOR_NAME_ZESHAN]: 'Zeshan Gondal',
    [KEYS.CONTRIBUTOR_POSITION_ZESHAN]: 'Estrategia en Yale',
    [KEYS.CONTRIBUTOR_NAME_ABDULLAH]: 'Abdullah Budeir',
    [KEYS.CONTRIBUTOR_POSITION_ABDULLAH]: 'Asociado en Bain & Co.',
    [KEYS.CONTRIBUTOR_NAME_AQEEL]: 'Aqeel Mohammad',
    [KEYS.CONTRIBUTOR_POSITION_AQEEL]: 'Principal en EMPIRE',

    // TRANSCRIBE
    [KEYS.TRANSCRIBE]: 'Transcribir',
    [KEYS.FOLLOW_ALONG_MODE]: 'Habilitar el modo seguir a lo largo (Beta)',
    [KEYS.WAITING_FOR_INPUT]: 'Intenta decir قل هو الله احد',
    [KEYS.READING_MODE]: 'Modo de lectura',
    [KEYS.MEMORIZATION_MODE]: 'Esconder ayahs',
    [KEYS.INTRO_MESSAGE]:
      "Tarteel usa IA para proporcionar comentarios en vivo sobre tu recitación de Corán. ¡Pruébalo! o",
    [KEYS.CLICK_DEMO_VIDEO_URL_MESSAGE]: 'mira el video de demostración',
    [KEYS.BETA_MESSAGE]: 'Descargar Tarteel en <a href="https://apps.apple.com/au/app/tarteel/id1391009396">iOS</a> y <a href="https://play.google.com/store/apps/details?id=com.mmmoussa.iqra">Android</a>',
    [KEYS.KEEP_RECITING_MESSAGE]: 'Encontrar un igual. Sigue recitando...',
  },
};

export default ES;

// Mohamed Hassan
