import { useState } from 'react'
import './App.css'
import { LanguageProvider, useLanguage, translations } from './context/LanguageContext'

function AppContent() {
  const [isOpen, setIsOpen] = useState(true);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <body className=''>
      <header className="max-w-[1440px] mx-auto px-8 py-6 h-auto md:h-[290px] flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#D8D8D8] gap-4 md:gap-0">
        {/* Логотип */}
        <div className="w-full md:w-[250px] flex justify-center md:justify-start ">
          <img src="/logo.png" alt="logo" className="max-w-[200px] " />
        </div>

        {/* Навигация */}
        <nav className="w-full md:max-w-[830px] flex justify-center gap-4">
          <ul className="flex flex-wrap justify-center md:justify-end font-semibold text-[18px] md:text-[20px] xs:text-[16px] text-[#373535] ">
            <li className="px-2 md:px-4 border-l-2 first:border-l-0 hover:text-neutral-600  mb-2">
              <a href="#about-fund">{t.aboutFund}</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 hover:text-neutral-600 mb-2">
              <a href="#programs">{t.programs}</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 hover:text-neutral-600 mb-2">
              <a href="#charity">{t.charity}</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 hover:text-neutral-600 mb-2">
              <a href="#help">{t.help}</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 border-r-2 hover:text-neutral-600 mb-2">
              <a href="#contacts">{t.contacts}</a>
            </li>
          </ul>
        </nav>
        <button 
          onClick={toggleLanguage}
          className="font-bold text-base rounded-xl bg-[#F5831F] max-w-[100px] self-center px-4 py-2 text-white cursor-pointer"
        >
          {language === 'ru' ? 'қазақша' : 'русский'}
        </button>
      </header>

      <main>
        <section className="relative w-full h-[360px] sm:h-[420px]">
          {/* затемнение */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

          <div
            className="relative z-10 bg-[url('/bg-hay.png')] bg-cover bg-center w-full h-full flex items-center justify-center flex-col text-center px-4"
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[56px] text-white font-bold italic mb-4">
              "Спешите творить благое"
            </h1>

            <button className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold px-5 sm:px-6 md:px-7 py-2 rounded-2xl text-[#24364A] bg-[#B9DEFF] flex items-center gap-2 cursor-pointer">
              {t.wantToHelp}
              <img src="/heart.svg" alt="heart" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-[100px] mt-8" id='about-fund'>
          <h2 className="text-[#4F4F4F] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-10 sm:mb-[110px] pb-4 border-b-[3px] border-[#B3D8FF]">
            {t.whoWeAre}
          </h2>

          <div className="flex flex-col-reverse md:flex-row flex-wrap items-center justify-around gap-6">
            <div className="w-full md:max-w-[770px] p-4">
              <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-bold text-[#F5831F] mb-2">
                <img src="/orange-heart.svg" alt="orange-heart" className="inline mx-1 w-6 h-6" />
                {t.mission}
              </h3>
              <p className="font-light text-[16px] sm:text-[20px] md:text-[24px]">
                {t.missionText}
              </p>
            </div>

            <img
              src="/sky.png"
              alt="sky"
              className="w-full max-w-[530px] h-auto p-4"
            />
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-[100px] mt-[60px]" id='programs'>
          <h2 className="text-[#4F4F4F] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-10 sm:mb-[110px] pb-4 border-b-[3px] border-[#B3D8FF]">
            {t.programsTitle}
          </h2>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-around">
            {/** Карточка 1 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/teacher-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                {t.enlightenment}
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  {isOpen ? (
                    <img src="/arrow.svg" alt="up" className="w-[40px] sm:w-[65px]" />
                  ) : (
                    <img src="/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 text-[16px] sm:text-[20px] md:text-[28px] text-gray-800 bg-white p-3 rounded-xl border font-light">
                  <p className="font-normal">
                    <strong>{t.spiritualDevelopment}</strong>
                  </p>
                  <p>
                    {t.spiritualDevelopmentText}
                  </p>
                  <p className="font-normal">
                    <strong>{t.socialEvents}</strong>
                  </p>
                  <p>{t.socialEventsText}</p>
                  <p className="font-normal">
                    <strong>{t.education}</strong>
                  </p>
                  <p>{t.educationText}</p>
                </div>
              )}
            </div>

            {/** Карточка 2 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/plov-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
              >
                {t.helpNeedy}
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  <img src="/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                </span>
              </button>
            </div>

            {/* Карточка 3 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/build-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
              >
                {t.socialProjects}
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  <img src="/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                </span>
              </button>
            </div>

            {/* Карточка 4 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/garden-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
              >
                {t.socialProjects}
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  <img src="/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-8 md:px-[100px] mt-[40px] sm:mt-[60px]" id='charity'>
          <h2 className="text-[#4F4F4F] text-[23px] sm:text-[36px] md:text-[48px] font-bold mb-6 sm:mb-[60px] pb-2 sm:pb-4 border-b-[3px] border-[#B3D8FF]">
            {t.aboutCharity}
          </h2>

          <h3 className="font-semibold text-[28px] sm:text-[40px] md:text-[67px] text-[#F5831F] text-center mb-6 sm:mb-[25px]">
            {t.charityPost}
          </h3>

          <img
            src="/hadis.png"
            alt="img"
            className="w-full max-w-[860px] mx-auto mb-6 sm:mb-[25px]"
          />

          <p className="font-light text-[16px] sm:text-[20px] md:text-[26px] mx-auto max-w-[1050px] leading-relaxed space-y-2">
            {t.charityRole}

            <br /><br />
            {t.charityReligions}

            <br /><br />
            {t.quranQuote}<br />
            <em>{t.quranText}</em>

            <br /><br />
            {t.greatQuotes}

            <br /><br />
            <strong>{t.prophetMuhammad}</strong><br />
            {t.prophetMuhammadQuote}

            <br /><br />
            <strong>{t.prophetIsa}</strong><br />
            {t.prophetIsaQuote}

            <br /><br />
            <strong>{t.imamAli}</strong><br />
            {t.imamAliQuote}

            <br /><br />
            <strong>{t.imamGhazali}</strong><br />
            {t.imamGhazaliQuote}

            <br /><br />
            <strong>{t.dalaiLama}</strong><br />
            {t.dalaiLamaQuote}

            <br /><br />
            <strong>{t.tolstoy}</strong><br />
            {t.tolstoyQuote}
          </p>
        </section>

        <section className="mx-auto px-4 sm:px-8 md:px-[100px] mt-[40px] md:mt-[60px] mb-[60px] md:mb-[80px]" id='help'>
          <h2 className="text-[#4F4F4F] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-8 md:mb-[110px] pb-2 md:pb-4 border-b-[3px] border-[#B3D8FF]">
            {t.helpTitle}
          </h2>

          <h3 className="text-center text-[#4F4F4F] text-xl sm:text-2xl md:text-[40px] mb-5">
            {t.currentData}
          </h3>

          <div className="mb-[40px] space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl md:text-[40px]">БИН: 241140036302</p>
            <p className="text-lg sm:text-xl md:text-[40px]">VISA: VISA 4277 0455 0754 2713</p>
            <p className="text-lg sm:text-xl md:text-[40px]">Telegram channel - @BAQARAfoundation</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <button className="font-bold text-lg sm:text-2xl md:text-[40px] rounded-xl bg-[#F5831F] w-full max-w-[390px] py-4 sm:py-[20px] text-white mb-[30px] cursor-pointer">
              {t.helpButton}
            </button>

            <h3 className="text-xl sm:text-2xl md:text-[36px] font-bold text-[#F5831F] mb-[30px] text-center">
              {t.verifyRecipient}
            </h3>

            <div
              className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-6 px-4 py-12"
              id='contacts'
            >
              <img
                src="/kaspi.png"
                alt="kaspi"
                className="w-full max-w-[280px] sm:max-w-[320px] md:w-1/3 md:max-w-[280px] lg:max-w-[300px] h-auto rounded-lg  object-contain mb-5"
              />
              <img
                src="/halyk-qr.jpg"
                alt="halyk-qr"
                className="w-full max-w-[280px] sm:max-w-[320px] md:w-1/3 md:max-w-[280px] lg:max-w-[300px] h-auto rounded-lg  object-contain mb-5"
              />
              <img
                src="/halyk.png"
                alt="halyk"
                className="w-full max-w-[280px] sm:max-w-[320px] md:w-1/3 md:max-w-[280px] lg:max-w-[600px] h-auto rounded-lg  object-contain mb-5"
              />
            </div>

          </div>
        </section>

      </main>
      <footer className="bg-[#FFD5B3] px-5 md:px-[100px] py-6 flex flex-col md:flex-row items-center md:justify-around text-center md:text-left gap-[20px] md:gap-0">
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[80px] md:max-w-[105px] order-3 md:order-1"
        />

        <div className="text-[18px] sm:text-[20px] md:text-[28px] font-light text-black order-1 md:order-2">
          {t.allRightsReserved}
        </div>

        <div className="flex gap-3 justify-center order-2 md:order-3">
          <img src="/whatsapp.svg" alt="whatsapp" className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8" />
          <img src="/insta.svg" alt="insta" className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8" />
          <img src="/tg.svg" alt="tg" className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </footer>


    </body>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
