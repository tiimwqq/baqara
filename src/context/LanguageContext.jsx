import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  ru: {
    aboutFund: 'о фонде',
    programs: 'программы',
    charity: 'о благотворительности',
    help: 'помочь',
    contacts: 'контакты',
    wantToHelp: 'Xочу помочь',
    whoWeAre: 'Кто мы?',
    mission: 'Миссия',
    missionText: 'Развитие духовно-нравственных ценностей в современном обществе через помощь нуждающимся, строительство мечетей, благоустройство территорий, а так же другие социально-просветительские проекты.',
    programsTitle: 'Программы',
    enlightenment: 'Просвещение',
    helpNeedy: 'Помощь нуждающимся',
    socialProjects: 'Социальные проекты',
    aboutCharity: 'О благотворительности',
    charityPost: 'Пост о благотворительности',
    helpTitle: 'Помочь',
    currentData: 'Актуальные данные',
    helpButton: 'Помочь',
    verifyRecipient: 'Убедитесь, что вышел получатель "BAQARA"',
    allRightsReserved: 'Благотворительный фонд "BAQARA", все права защищены, 2025',
    // Program details translations
    spiritualDevelopment: '1. Духовно-Нравственное развитие.',
    spiritualDevelopmentText: 'В современном мире нам активно навязывают идею потребительского отношения к жизни, в результате чего формируется общество людей, главное для которых - лишь прожить сегодняшний день, любыми способами удовлетворяя свои прихоти и желания. Причиной того, что общество, особенно молодежь, легко попадает под пропаганду культа потребления, является отсутствие духовных ориентиров. Зачастую многие родители считают, что достаточно лишь одеть, накормить ребенка, дать ему общее образование, но научить его быть человеком, привить ему высокие нравственные ценности не стоит на повестке дня. Программа просвещения нацелена объединить всех неравнодушных к этой проблеме людей для формирования общества с высокими духовными ценностями. Программа включает в себя- распространение идей добра, взаимопомощи и справедливости путем размещения информации в СМИ и общественных местах (стенды, баннеры, плакаты, табличек, аудио- видео материалы)',
    socialEvents: '2. Социальные мероприятия',
    socialEventsText: 'Помощь в организации и проведении социально-просветительских мероприятий (олимпиады, военно-патриотические мероприятия, духовные постановки и поддержка духовно-просветительских мероприятий, благотворительные проекты)',
    education: '3. Образование',
    educationText: 'Оплата обучения, предоставление стипендий и премий Содействие в работе учебных и просветительских центров Содействие в проведении олимпиад, образовательных мероприятий Если Ты научил кого либо благому, то все благие дела того человека засчитаются тебе так, как если бы Ты их совершил!',
    // Charity content translations
    charityRole: 'Благотворительность в жизни человека играет важную роль, ведь она помогает человеку обрести смысл — приняв ответственность за человечество в целом, стать наместником на земле, который заботится обо всем: о людях, животных, природе и нашем общем будущем.',
    charityReligions: 'В разных религиях существуют такие понятия как милостыня, закят, садака, что означает определенные выплаты (пожертвования) для помощи малоимущим или на другие благотворительные цели. И всё это Всевышний вменил человеку в обязанность для его же блага, формируя милосердие, гуманность, сострадание и причастность в его сердце.',
    quranQuote: 'В Священном Коране, сура «Аль-Бакара» (2:261) сказано:',
    quranText: '«Пример тех, кто расходует своё имущество на пути Аллаха, подобен зерну, из которого вырастает семь колосьев, и в каждом колосе — по сто зёрен. Аллах приумножает [награду] кому пожелает...»',
    greatQuotes: 'Также уместно привести цитаты великих людей на тему благотворительности:',
    prophetMuhammad: '1. Пророк Мухаммад (мир ему и благословение Аллаха):',
    prophetMuhammadQuote: '«Садака не уменьшает имущество, Аллах увеличивает то, что человек отдает.»',
    prophetIsa: '2. Пророк Иса (мир ему и благословение Аллаха):',
    prophetIsaQuote: '«Рука дающего — не оскудеет.»',
    imamAli: '3. Имам Али ибн Абу Талиб:',
    imamAliQuote: '«Когда ты даёшь садаку, ты исцеляешь свою душу и защищаешь своё имущество.»',
    imamGhazali: '4. Имам Газали (Абу Хамид аль-Газали):',
    imamGhazaliQuote: '«Благотворительность — это ключ к богатству души и шлем от огня Ада.»',
    dalaiLama: '5. Далай-лама:',
    dalaiLamaQuote: '«Если вы хотите, чтобы другие были счастливы — практикуйте сострадание. Если вы хотите быть счастливым — практикуйте сострадание.»',
    tolstoy: '6. Лев Толстой:',
    tolstoyQuote: '«Истинная жизнь есть служение другим.»',
    // New translations for card 2
    medicalHelp: '1. Медицинская помощь',
    medicalHelpText: 'Оплата операций, лечения взрослых и детей с тяжелыми заболеваниями\nОплата реабилитаций\nПокупка медикаментов и лекарств\nЗакупка специального медицинского оборудования (коляски, слуховые аппараты и т.д.)',
    hungryAndNeedy: '2. Голодные и обездоленные',
    hungryAndNeedyText: 'Помощь людям, которые оказались в тяжелой жизненной ситуации (потеря кормильца, пожилые одинокие люди, инвалиды, матери-одиночки, многодетные малоимущие, временно потерявшие работу), в том числе продуктовая помощь, продовольственная помощь.',
    travelerHelp: '3. Помощь путникам',
    travelerHelpText: 'Покупка билетов для возвращения на Родину, людям в сложной жизненной ситуации, мигрантам.',
    legalHelp: '4. Юридическая помощь',
    legalHelpText: 'Юридические консультации, защита прав и представления интересов, подготовка документов людям оказавшимся в тяжелой жизненой ситуации.',
    foundationNote: 'Фонд «Baqara»: «Мы не поощряем попрошайничество, а помогаем тем, кто находится в затруднительной ситуации или попал в беду!»',
    // New translations for card 3
    ramadan: '1. Рамадан',
    ramadanText: 'Организация питания, а также помощь продуктовыми наборами нуждающимся и обездоленным, в том числе за счет средств, переданных в качестве определенных форм милостыни, таких как\n«фитр-садака»\n«фидья-садака»\n«садака-назр»',
    kurban: '2. Курбан',
    kurbanText: 'Организация заказа и раздачи мяса жертвенных животных для малоимущих семей и нуждающихся в праздничные дни Курбан-байрама\nПроведение праздничных обедов в кафе и ресторанах городов Казахстана.',
    mosqueSupport: '3. Строительство и поддержка мечетей',
    mosqueSupportText: 'Материальная помощь на строительство, содержание, благоустройство мечетей и образовательных учреждений\nОткрытие и обустройство молельных комнат\nПоддержка мероприятий, направленных на развитие религиозного самосознания и просвещение.',
    // New translations for card 4
    publicSpaces: 'Благоустройство',
    publicSpacesText: 'Благоустройство общественных пространств - это не только место проведения досуга, но и один из способов формирования морально нравственных ценностей.\n\nМы живем на прекрасной планете Земля, которая богата лесами, горами, водоемами, которыми мы можем наслаждаться прогуливаясь там, и обязаны ценить эти богатства природы.\n\nКрасота мира, в котором живет человек, благотворно влияет на его психологическое, физическое и духовное состояние, вдохновляет и напитывает энергией. Но зачастую вместо того, чтобы насладиться красотой и чистотой окружающего мира, пением птиц, лазурью воды, мы сталкиваемся с загрязнением природы, которое небрежно допустил человек.\n\nПрограмма «Благоустройство» призвана облагородить запущенные участки земли, очистить их от мусора, озеленить, устроить места проведения досуга в городах и за их пределами, а также пропагандировать важность сохранения окружающей среды.'
  },
  kk: {
    aboutFund: 'қор туралы',
    programs: 'бағдарламалар',
    charity: 'қайырымдылық туралы',
    help: 'көмеkтесу',
    contacts: 'байланыстар',
    wantToHelp: 'Көмеkтескім келеді',
    whoWeAre: 'Біз кімміз?',
    mission: 'Миссия',
    missionText: 'Қазіргі қоғамда рухани-адамгершілік құндылықтарды дамыту, мұсылмандарға көмеk көрсету, мешіттер салу, аумақтарды жақсарту және басқа да әлеуметтік-ағарту жобалары арқылы.',
    programsTitle: 'Бағдарламалар',
    enlightenment: 'Ағарту',
    helpNeedy: 'Мұқтаждарға көмеk',
    socialProjects: 'Әлеуметтік жобалар',
    aboutCharity: 'Қайырымдылық туралы',
    charityPost: 'Қайырымдылық туралы пост',
    helpTitle: 'Көмеkтесу',
    currentData: 'Ағымдағы мәліметтер',
    helpButton: 'Көмеkтесу',
    verifyRecipient: '"BAQARA" алушы шыққанын тексеріңіз',
    allRightsReserved: '"BAQARA" қайырымдылық қоры, барлық құқықтар қорғалған, 2025',
    // Program details translations
    spiritualDevelopment: '1. Рухани-адамгершілік даму.',
    spiritualDevelopmentText: 'Қазіргі әлемде бізге тұтынушылық қатынасы идеясын белсенді түрде салады, нәтижесінде тек бүгінгі күнді өмір сүру, өз қалаулары мен тілектерін қалай болса солай қанағаттандыру - бұл негізгі мақсат болған адамдар қоғамы қалыптасады. Қоғам, әсіресе жастар, тұтыну культінің насихатына оңай түсуінің себебі - рухани бағдарламалардың жоқтығы. Көптеген ата-аналар тек баланы киіндіру, тамақтандыру, жалпы білім беру жеткілікті деп санайды, бірақ оны адам болуға үйрету, жоғары адамгершілік құндылықтарды сіңіру - күн тәртібінде тұрмайды. Ағарту бағдарламасы осы мәселеге қатысты барлық адамдарды жоғары рухани құндылықтары бар қоғам қалыптастыру үшін біріктіруге бағытталған. Бағдарламаға жақсылық, өзара көмеk және әділдіk идеяларын БАҚ және қоғамдық орындарда (стендтер, баннерлер, плакаттар, тақталар, аудио-бейне материалдары) ақпарат орналастыру арқылы тарату кіреді.',
    socialEvents: '2. Әлеуметтік іс-шаралар',
    socialEventsText: 'Әлеуметтік-ағарту іс-шараларын ұйымдастыру және өткізуге көмеk (олимпиадалар, әскери-патриоттық іс-шаралар, рухани қойылымдар және рухани-ағарту іс-шараларын қолдау, қайырымдылық жобалары)',
    education: '3. Білім',
    educationText: 'Оқу төлемі, стипендиялар мен сыйлықтар беру Оқу және ағарту орталықтарының жұмысына көмеk көрсету Олимпиадаларды, білім беру іс-шараларын өткізуге көмеk көрсету Егер сен біреуге жақсылық үйретсең, онда сол адамның барлық жақсы істері сен оларды өзің жасағандай саналады!',
    // Charity content translations
    charityRole: 'Қайырымдылық адам өмірінде маңызды рөл атқарады, өйткені ол адамға мағына табуға көмеkтеседі - адамзаттың бүкіл үшін жауапкершілікті қабылдау, жердегі өкіл болу, ол бәріне қамқорлық жасайды: адамдарға, жануарларға, табиғатқа және біздің ортақ болашағымызға.',
    charityReligions: 'Әртүрлі діндерде садақа, закят, садақа сияқты ұғымдар бар, бұл кедейлерге көмеk көрсету немесе басқа қайырымдылық мақсаттары үшін белгілі бір төлемдерді (қайырымдылық) білдіреді. Мұның бәрін Құдай адамға оның өзінің игілігі үшін міндет етіп тағайындады, оның жүрегінде мейірімділік, адамгершілік, шығармашылық және қатысу сезімін қалыптастырады.',
    quranQuote: 'Қасиетті Құранда, «Әл-Бақара» сүресінде (2:261) айтылған:',
    quranText: '«Аллаһ жолында өз мүлкін жұмсайтындардың мысалы, одан жеті басқа өсіп, әр басқасында жүз дән болатын дән сияқты. Аллаһ кімге қаласа, [сыйлықты] еселейді...»',
    greatQuotes: 'Сондай-ақ қайырымдылық тақырыбына байланысты ұлы адамдардың дәйексөздерін келтіру орынды:',
    prophetMuhammad: '1. Пайғамбар Мұхаммед (оған Аллаһтың сәлемі мен игілігі болсын):',
    prophetMuhammadQuote: '«Садақа мүлкіңді азайтпайды, Аллаһ адам берген нәрсені көбейтеді.»',
    prophetIsa: '2. Пайғамбар Иса (оған Аллаһтың сәлемі мен игілігі болсын):',
    prophetIsaQuote: '«Берушінің қолы құрмайды.»',
    imamAli: '3. Имам Әли ибн Әбу Талиб:',
    imamAliQuote: '«Сен садақа бергенде, өз жандыңды емдейсің және өз мүлкіңді қорғайсың.»',
    imamGhazali: '4. Имам Ғазали (Әбу Хамид әл-Ғазали):',
    imamGhazaliQuote: '«Қайырымдылық - бұл жан байлығының кілті және Жаһаннам отынан қалқан.»',
    dalaiLama: '5. Далай-лама:',
    dalaiLamaQuote: '«Егер сен басқалар бақытты болсын десең - шығармашылықты тәжірибе ет. Егер сен бақытты болғың келсе - шығармашылықты тәжірибе ет.»',
    tolstoy: '6. Лев Толстой:',
    tolstoyQuote: '«Шынайы өмір - бұл басқаларға қызмет ету.»',
    // New translations for card 2
    medicalHelp: '1. Медициналық көмеk',
    medicalHelpText: 'Ауыр аурулармен ауыратын ересектер мен балалардың операцияларын, емделуін төлеу\nРеабилитацияны төлеу\nДәрі-дәрмектер мен емдік препараттарды сатып алу\nАрнайы медициналық жабдықтарды (арба, есту аппараттары және т.б.) сатып алу',
    hungryAndNeedy: '2. Аш және мұқтаждар',
    hungryAndNeedyText: 'Ауыр өмірлік жағдайда қалған адамдарға көмеk (тіршілік етушіні жоғалту, жалғыз қарттар, мүгедектер, жалғыз әйелдер, көп балалы кедей отбасылар, уақытша жұмыстан айырылғандар) көрсету, соның ішінде азық-түлік көмегі, тамақтандыру көмегі.',
    travelerHelp: '3. Жолшыларға көмеk',
    travelerHelpText: 'Отанына оралуға билеттер сатып алу, ауыр өмірлік жағдайдағы адамдарға, мигранттарға.',
    legalHelp: '4. Заңгерлік көмеk',
    legalHelpText: 'Заңгерлік кеңес, құқықтарды қорғау және мүдделерді ұсыну, ауыр өмірлік жағдайда қалған адамдарға құжаттар дайындау.',
    foundationNote: '"Басқара" қоры: "Біз қайыршылықты қолдамаймыз, бірақ қиын жағдайда немесе беделіне түскендерге көмеkтесеміз!"',
    // New translations for card 3
    ramadan: '1. Рамазан',
    ramadanText: 'Тамақтандыру ұйымдастыру, сондай-ақ мұқтаждар мен мұқтаждарға азық-түлік жинақтарымен көмеk көрсету, соның ішінде\n«фитр-садақа»\n«фидья-садақа»\n«садақа-назр»\nсияқты белгілі бір садақа түрлері ретінде берілген қаражат есебінен',
    kurban: '2. Құрбан',
    kurbanText: 'Құрбан айт мерекесі күндерінде кедей отбасылар мен мұқтаждарға құрбандық мал етінің тапсырысын және таратуын ұйымдастыру\nҚазақстан қалаларының кафелері мен мейрамханаларында мерекелік түскі ас ұйымдастыру.',
    mosqueSupport: '3. Мешіттерді салу және қолдау',
    mosqueSupportText: 'Мешіттер мен білім беру мекемелерін салуға, ұстауға, жақсартуға материалдық көмеk\nНамаз оқу бөлмелерін ашу және жабдықтау\nДіни сананы дамытуға және ағартуға бағытталған іс-шараларды қолдау.',
    // New translations for card 4
    publicSpaces: 'Қоғамдық кеңістіктерді жақсарту',
    publicSpacesText: 'Қоғамдық кеңістіктерді жақсарту - бұл тек демалыс өткізу орны ғана емес, сонымен қатар адамгершілік құндылықтарды қалыптастыру тәсілдерінің бірі.\n\nБіз ормандарға, тауларға, су объектілеріне бай, оларда серуендеп, табиғаттың осы байлықтарын бағалауға тиіс әдемі Жер планетасында өмір сүріп жатырмыз.\n\nАдам өмір сүретін әлемнің әдемілігі оның психологиялық, физикалық және рухани жағдайына жағымды әсер етеді, шабыт береді және энергиямен толтырады. Бірақ көбінесе айналамыздың әдемілігі мен тазалығынан, құстардың әнінен, судың көкшілігінен ләззат алудың орнына, адамның абайсыздықпен жіберіп алған табиғаттың ластануына тап боламыз.\n\n"Жақсарту" бағдарламасы қалаларда және олардан тыс жерлерде ескертілген жер учаскелерін жақсартуға, оларды қоқыстан тазартуға, жасылдандыруға, демалыс өткізу орындарын ұйымдастыруға, сондай-ақ қоршаған ортаны сақтаудың маңыздылығын насихаттауға бағытталған.'
  },
  en: {
    aboutFund: 'about the fund',
    programs: 'programs',
    charity: 'about charity',
    help: 'help',
    contacts: 'contacts',
    wantToHelp: 'I want to help',
    whoWeAre: 'Who are we?',
    mission: 'Mission',
    missionText: 'Development of spiritual and moral values in modern society through helping those in need, building mosques, improving territories, as well as other social and educational projects.',
    programsTitle: 'Programs',
    enlightenment: 'Enlightenment',
    helpNeedy: 'Help for those in need',
    socialProjects: 'Social projects',
    aboutCharity: 'About Charity',
    charityPost: 'Post about charity',
    helpTitle: 'Help',
    currentData: 'Current data',
    helpButton: 'Help',
    verifyRecipient: 'Make sure the recipient "BAQARA" appears',
    allRightsReserved: '"BAQARA" charitable foundation, all rights reserved, 2025',
    // Program details translations
    spiritualDevelopment: '1. Spiritual and Moral Development.',
    spiritualDevelopmentText: 'In the modern world, we are actively being imposed with the idea of consumerism, resulting in a society where people\'s main goal is just to live through today, satisfying their whims and desires by any means. The reason why society, especially youth, easily falls under the propaganda of consumerism is the absence of spiritual guidelines. Often, many parents believe that it is enough to just clothe, feed the child, give them a general education, but teaching them to be a person, instilling high moral values is not on the agenda. The enlightenment program aims to unite all people concerned about this problem to form a society with high spiritual values. The program includes spreading ideas of goodness, mutual assistance, and justice through information placement in media and public places (stands, banners, posters, signs, audio-video materials)',
    socialEvents: '2. Social Events',
    socialEventsText: 'Assistance in organizing and conducting social and educational events (olympiads, military-patriotic events, spiritual performances, and support for spiritual and educational events, charitable projects)',
    education: '3. Education',
    educationText: 'Payment for education, providing scholarships and awards. Assistance in the work of educational and enlightenment centers. Assistance in conducting olympiads, educational events. If you teach someone something good, then all the good deeds of that person will be counted for you as if you had done them!',
    // Charity content translations
    charityRole: 'Charity plays an important role in a person\'s life, as it helps a person find meaning - by taking responsibility for humanity as a whole, becoming a vicegerent on earth who cares for everything: people, animals, nature, and our common future.',
    charityReligions: 'Different religions have concepts such as charity, zakat, sadaqah, which means certain payments (donations) to help the poor or for other charitable purposes. And all of this the Almighty has made obligatory for man for his own good, forming mercy, humanity, compassion, and involvement in his heart.',
    quranQuote: 'In the Holy Quran, Surah "Al-Baqarah" (2:261) says:',
    quranText: '"The example of those who spend their wealth in the way of Allah is like a seed that grows seven ears, and in each ear - a hundred grains. Allah multiplies [the reward] for whom He wills..."',
    greatQuotes: 'It is also appropriate to quote great people on the topic of charity:',
    prophetMuhammad: '1. Prophet Muhammad (peace be upon him):',
    prophetMuhammadQuote: '"Charity does not decrease wealth, Allah increases what a person gives."',
    prophetIsa: '2. Prophet Isa (peace be upon him):',
    prophetIsaQuote: '"The hand that gives shall not be empty."',
    imamAli: '3. Imam Ali ibn Abu Talib:',
    imamAliQuote: '"When you give charity, you heal your soul and protect your wealth."',
    imamGhazali: '4. Imam Ghazali (Abu Hamid al-Ghazali):',
    imamGhazaliQuote: '"Charity is the key to the wealth of the soul and a helmet from the fire of Hell."',
    dalaiLama: '5. Dalai Lama:',
    dalaiLamaQuote: '"If you want others to be happy, practice compassion. If you want to be happy, practice compassion."',
    tolstoy: '6. Leo Tolstoy:',
    tolstoyQuote: '"True life is serving others."',
    // New translations for card 2
    medicalHelp: '1. Medical Help',
    medicalHelpText: 'Payment for operations, treatment of adults and children with serious illnesses\nPayment for rehabilitation\nPurchase of medicines and medications\nPurchase of special medical equipment (wheelchairs, hearing aids, etc.)',
    hungryAndNeedy: '2. Hungry and Needy',
    hungryAndNeedyText: 'Help for people who find themselves in difficult life situations (loss of breadwinner, elderly lonely people, disabled people, single mothers, large low-income families, temporarily unemployed), including food assistance, food aid.',
    travelerHelp: '3. Help for Travelers',
    travelerHelpText: 'Purchase of tickets for returning to homeland for people in difficult life situations, migrants.',
    legalHelp: '4. Legal Help',
    legalHelpText: 'Legal consultations, protection of rights and representation of interests, preparation of documents for people who find themselves in difficult life situations.',
    foundationNote: 'Baqara Foundation: "We do not encourage begging, but help those who are in a difficult situation or have fallen into trouble!"',
    // New translations for card 3
    ramadan: '1. Ramadan',
    ramadanText: 'Organization of meals, as well as assistance with food packages to the needy and destitute, including through funds transferred as certain forms of charity, such as\n"fitr-sadaqah"\n"fidya-sadaqah"\n"sadaqah-nazr"',
    kurban: '2. Kurban',
    kurbanText: 'Organization of ordering and distribution of sacrificial animal meat for low-income families and needy during Kurban Ait holidays\nConducting festive lunches in cafes and restaurants of Kazakhstan cities.',
    mosqueSupport: '3. Construction and Support of Mosques',
    mosqueSupportText: 'Material assistance for construction, maintenance, improvement of mosques and educational institutions\nOpening and equipping prayer rooms\nSupport for events aimed at developing religious self-awareness and enlightenment.',
    // New translations for card 4
    publicSpaces: 'Improvement of Public Spaces',
    publicSpacesText: 'Improvement of public spaces is not only a place for leisure but also one of the ways to form moral values.\n\nWe live on a beautiful planet Earth, rich in forests, mountains, and water bodies, which we can enjoy while walking there, and we must value these natural riches.\n\nThe beauty of the world in which a person lives has a beneficial effect on their psychological, physical, and spiritual state, inspires and energizes. But often, instead of enjoying the beauty and cleanliness of the surrounding world, the singing of birds, the azure of water, we face pollution of nature, which man carelessly allowed.\n\nThe "Improvement" program is designed to beautify neglected land areas, clean them from garbage, plant greenery, arrange leisure places in cities and beyond, as well as promote the importance of preserving the environment.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = () => {
    setLanguage(prev => {
      switch (prev) {
        case 'ru':
          return 'kk';
        case 'kk':
          return 'en';
        case 'en':
          return 'ru';
        default:
          return 'ru';
      }
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 