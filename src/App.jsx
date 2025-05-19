import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <body className=''>
      <header className="max-w-[1440px] mx-auto px-8 py-6 h-auto md:h-[290px] flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#D8D8D8] gap-4 md:gap-0">
        {/* Логотип */}
        <div className="w-full md:w-[250px] flex justify-center md:justify-start ">
          <img src="/public/logo.png" alt="logo" className="max-w-[200px] " />
        </div>

        {/* Навигация */}
        <nav className="w-full md:max-w-[830px] flex justify-center">
          <ul className="flex flex-wrap justify-center md:justify-end font-semibold text-[18px] md:text-[20px] xs:text-[16px] text-[#373535] ">
            <li className="px-2 md:px-4 border-l-2 first:border-l-0 hover:text-neutral-600  mb-2">
              <a href="#about-fund">о фонде</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 hover:text-neutral-600 mb-2">
              <a href="#programs">программы</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 hover:text-neutral-600 mb-2">
              <a href="#charity">о благотворительности</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 hover:text-neutral-600 mb-2">
              <a href="#help">помочь</a>
            </li>
            <li className="px-2 md:px-4 border-l-2 border-r-2 hover:text-neutral-600 mb-2">
              <a href="#contacts">контакты</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative w-full h-[360px] sm:h-[420px]">
          {/* затемнение */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

          <div
            className="relative z-10 bg-[url('/public/bg-hay.png')] bg-cover bg-center w-full h-full flex items-center justify-center flex-col text-center px-4"
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[56px] text-white font-bold italic mb-4">
              "Спешите творить благое"
            </h1>

            <button className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold px-5 sm:px-6 md:px-7 py-2 rounded-2xl text-[#24364A] bg-[#B9DEFF] flex items-center gap-2 cursor-pointer">
              Xочу помочь
              <img src="/public/heart.svg" alt="heart" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-[100px] mt-8" id='about-fund'>
          <h2 className="text-[#4F4F4F] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-10 sm:mb-[110px] pb-4 border-b-[3px] border-[#B3D8FF]">
            Кто мы?
          </h2>

          <div className="flex flex-col-reverse md:flex-row flex-wrap items-center justify-around gap-6">
            <div className="w-full md:max-w-[770px] p-4">
              <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-bold text-[#F5831F] mb-2">
                <img src="/public/orange-heart.svg" alt="orange-heart" className="inline mx-1 w-6 h-6" />
                Миссия
              </h3>
              <p className="font-light text-[16px] sm:text-[20px] md:text-[24px]">
                Развитие духовно-нравственных ценностей в современном обществе через помощь нуждающимся,
                строительство мечетей, благоустройство территорий, а так же другие социально-просветительские проекты.
              </p>
            </div>

            <img
              src="/public/sky.png"
              alt="sky"
              className="w-full max-w-[530px] h-auto p-4"
            />
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-[100px] mt-[60px]" id='programs'>
          <h2 className="text-[#4F4F4F] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-10 sm:mb-[110px] pb-4 border-b-[3px] border-[#B3D8FF]">
            Программы
          </h2>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-around">
            {/** Карточка 1 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/public/teacher-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                Просвещение
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  {isOpen ? (
                    <img src="/public/arrow.svg" alt="up" className="w-[40px] sm:w-[65px]" />
                  ) : (
                    <img src="/public/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 text-[16px] sm:text-[20px] md:text-[28px] text-gray-800 bg-white p-3 rounded-xl border font-light">
                  <p className="font-normal">
                    <strong>1. Духовно-Нравственное развитие.</strong>
                  </p>
                  <p>
                    В современном мире нам активно навязывают идею потребительского отношения к жизни, в результате чего формируется общество людей, главное для которых - лишь прожить сегодняшний день, любыми способами удовлетворяя свои прихоти и желания.
                    Причиной того, что общество, особенно молодежь, легко попадает под пропаганду культа потребления, является отсутствие духовных ориентиров. Зачастую многие родители считают, что достаточно лишь одеть, накормить ребенка, дать ему общее образование, но научить его быть человеком, привить ему высокие нравственные ценности не стоит на повестке дня.
                    Программа просвещения нацелена объединить всех неравнодушных к этой проблеме людей для      формирования общества с высокими духовными ценностями.
                    Программа включает в себя- распространение идей добра, взаимопомощи и справедливости путем  размещения информации в СМИ и общественных местах (стенды, баннеры, плакаты, табличек, аудио- видео материалы)
                  </p>
                  <p className="font-normal">
                    <strong>2. Социальные мероприятия</strong>
                  </p>
                  <p>Помощь в организации и проведении социально-просветительских мероприятий (олимпиады, военно-патриотические мероприятия, духовные постановки и поддержка духовно-просветительских мероприятий, благотворительные проекты)</p>
                  <p className="font-normal">
                    <strong>3. Образование</strong>
                  </p>
                  <p>
                    Оплата обучения, предоставление стипендий и премий
                    Содействие в работе учебных и просветительских центров
                    Содействие в проведении олимпиад, образовательных мероприятий
                    Если Ты научил кого либо благому, то все благие дела того человека засчитаются тебе так, как если бы Ты их совершил!
                  </p>
                </div>
              )}
            </div>

            {/** Карточка 2 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/public/plov-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
              >
                Помощь нуждающимся
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  <img src="/public/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                </span>
              </button>
            </div>

            {/* Карточка 3 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/public/build-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
              >
                Социальные проекты
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  <img src="/public/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                </span>
              </button>
            </div>

            {/* Карточка 4 */}
            <div className="w-full max-w-[610px] mb-[80px]">
              <img src="/public/garden-3section.png" alt="teacher" className="w-full h-auto mb-4" />
              <button
                className="text-[#F5831F] relative text-lg text-left sm:text-[26px] md:text-[34px] md:text-center font-extrabold border border-black rounded-2xl py-2 px-4 sm:px-8 w-full"
              >
                Социальные проекты
                <span className="ml-2 absolute right-2 top-1/2 -translate-y-1/2">
                  <img src="/public/arrow-under.svg" alt="down" className="w-[40px] sm:w-[65px]" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-8 md:px-[100px] mt-[40px] sm:mt-[60px]" id='charity'>
          <h2 className="text-[#4F4F4F] text-[23px] sm:text-[36px] md:text-[48px] font-bold mb-6 sm:mb-[60px] pb-2 sm:pb-4 border-b-[3px] border-[#B3D8FF]">
            О благотворительности
          </h2>

          <h3 className="font-semibold text-[28px] sm:text-[40px] md:text-[67px] text-[#F5831F] text-center mb-6 sm:mb-[25px]">
            Пост о благотворительности
          </h3>

          <img
            src="/public/hadis.png"
            alt="img"
            className="w-full max-w-[860px] mx-auto mb-6 sm:mb-[25px]"
          />

          <p className="font-light text-[16px] sm:text-[20px] md:text-[26px] mx-auto max-w-[1050px] leading-relaxed space-y-2">
            Благотворительность в жизни человека играет важную роль, ведь она помогает человеку обрести смысл — приняв ответственность за человечество в целом, стать наместником на земле, который заботится обо всем: о людях, животных, природе и нашем общем будущем.

            <br /><br />
            В разных религиях существуют такие понятия как милостыня, закят, садака, что означает определенные выплаты (пожертвования) для помощи малоимущим или на другие благотворительные цели. И всё это Всевышний вменил человеку в обязанность для его же блага, формируя милосердие, гуманность, сострадание и причастность в его сердце.

            <br /><br />
            В Священном Коране, сура «Аль-Бакара» (2:261) сказано:<br />
            <em>«Пример тех, кто расходует своё имущество на пути Аллаха, подобен зерну, из которого вырастает семь колосьев, и в каждом колосе — по сто зёрен. Аллах приумножает [награду] кому пожелает...»</em>

            <br /><br />
            Также уместно привести цитаты великих людей на тему благотворительности:

            <br /><br />
            <strong>1. Пророк Мухаммад (мир ему и благословение Аллаха):</strong><br />
            «Садака не уменьшает имущество, Аллах увеличивает то, что человек отдает.»

            <br /><br />
            <strong>2. Пророк Иса (мир ему и благословение Аллаха):</strong><br />
            «Рука дающего — не оскудеет.»

            <br /><br />
            <strong>3. Имам Али ибн Абу Талиб:</strong><br />
            «Когда ты даёшь садаку, ты исцеляешь свою душу и защищаешь своё имущество.»

            <br /><br />
            <strong>4. Имам Газали (Абу Хамид аль-Газали):</strong><br />
            «Благотворительность — это ключ к богатству души и шлем от огня Ада.»

            <br /><br />
            <strong>5. Далай-лама:</strong><br />
            «Если вы хотите, чтобы другие были счастливы — практикуйте сострадание. Если вы хотите быть счастливым — практикуйте сострадание.»

            <br /><br />
            <strong>6. Лев Толстой:</strong><br />
            «Истинная жизнь есть служение другим.»
          </p>
        </section>

        <section className="mx-auto px-4 sm:px-8 md:px-[100px] mt-[40px] md:mt-[60px] mb-[60px] md:mb-[80px]" id='help'>
          <h2 className="text-[#4F4F4F] text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-8 md:mb-[110px] pb-2 md:pb-4 border-b-[3px] border-[#B3D8FF]">
            Помочь
          </h2>

          <h3 className="text-center text-[#4F4F4F] text-xl sm:text-2xl md:text-[40px] mb-5">
            Актуальные данные
          </h3>

          <div className="mb-[40px] space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl md:text-[40px]">БИН: 241140036302</p>
            <p className="text-lg sm:text-xl md:text-[40px]">VISA: VISA 4277 0455 0754 2713</p>
            <p className="text-lg sm:text-xl md:text-[40px]">Telegram channel - @BAQARAfoundation</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <button className="font-bold text-lg sm:text-2xl md:text-[40px] rounded-xl bg-[#F5831F] w-full max-w-[390px] py-4 sm:py-[20px] text-white mb-[30px] cursor-pointer">
              Помочь
            </button>

            <h3 className="text-xl sm:text-2xl md:text-[36px] font-bold text-[#F5831F] mb-[30px] text-center">
              Убедитесь, что вышел получатель “BAQARA”
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4" id='contacts'>
              <img
                src="/public/kaspi.png"
                alt="kaspi"
                className="w-full max-w-[335px] h-auto object-contain"
              />
              <img
                src="/public/halyk.png"
                alt="halyk"
                className="w-full max-w-[910px] h-auto object-contain"
              />
            </div>
          </div>
        </section>

      </main>
      <footer className="bg-[#FFD5B3] px-5 md:px-[100px] py-6 flex flex-col md:flex-row items-center md:justify-around text-center md:text-left gap-[20px] md:gap-0">
        <img
          src="/public/logo.png"
          alt="logo"
          className="max-w-[80px] md:max-w-[105px] order-3 md:order-1"
        />

        <div className="text-[18px] sm:text-[20px] md:text-[28px] font-light text-black order-1 md:order-2">
          “Благотворительный фонд Baqara”, все права защищены, 2025
        </div>

        <div className="flex gap-3 justify-center order-2 md:order-3">
          <img src="/public/whatsapp.svg" alt="whatsapp" className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8" />
          <img src="/public/insta.svg" alt="insta" className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8" />
          <img src="/public/tg.svg" alt="tg" className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </footer>


    </body>
  )
}

export default App
