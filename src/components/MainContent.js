import React from 'react'
import 'bootstrap'

function MainContent() {
    return (
        <main className="container border border-primary">
            <div className="row">

                <section id="newsArea" className="col-4 border-right border-primary">

                    <div className="container-fluid">

                        <h4 className="text-center">Новости</h4>

                        <section style={{ 'background-color': 'rgba(254, 221, 98, 1)' }} className="alert mt-1 mb-1" role="alert">

                            <p className="text-justify text-center">У нас <mark>родились котята.</mark></p>
                            <p className="lead">
                                <a className="btn btn-primary btn-sm btn-block" href="kitty.html" role="button">Забронировать</a>
                            </p>
                        </section>

                        <div id="accordion">

                            <article className="card">
                                <header className="card-header" id="heading1">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                            Ноябрь в окно - пополнение полным ходом в дверь
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Роддом. Вот роддом и всё тут. Писки, вопли, бессонные ночи. <mark>Норвежские
                                                лесные котята</mark> причиняют столько же радости и беспокойства при
                                            рождении, сколько и обычные, но есть и отличия.</p>
                                        <p>Прайд, оказывается - это не только о львах. Неотвратимая и основная черта
                                            характера кошки-матери у этой породы - это фундаментальный материнский
                                            инстинкт,
                                            причём по отношению ко всем котятам, не только своим.</p>
                                        <p> Обе кошки стали матерями
                                            с разницей в один день, поэтому всё делают вместе - кормят, умывают, отдыхают.
                                            Так сказать, в общее лукошко все рожали кошки. Ладно. Хватит шуток.
                                            Всем, кто хочет <mark>купить котенка в Москве</mark> (в общем-то и за её
                                            пределами никто вам не мешает), добро пожаловать в <a href="kitty.html" role="button">соответствующий
                                                раздел.</a></p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="heading2">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Воронеж, 27-28 октября 2018. Выставка "Осенние смотрины" от КЛК Люкс.
                                            (Тыквенные мысли часть
                                            2)
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Дубль второй. Серое небо рушится вбок. Осень в разгаре без компромиссов и
                                            пощады. Всё те же старые необходимости, приготовления. Снова сидеть два дня в
                                            тесной палатке. Само собой, знаменитый характер <mark>норвежской лесной</mark>
                                            породы и врожденная деликатность не дает мне возможности громогласно
                                            возмутиться.
                                            Проживая вторую часть этого странного представления, начинаешь все чаще об этом
                                            вспоминать. Ну а после. Что после?
                                            Наконец, домой. Увижу семью.</p>
                                        <p>В этот раз открыт титул <mark>Большого международного чемпиона.</mark> Меня
                                            теперь ждут иные земли. Ну что ж, посмотрим, чем они смогут меня удивить.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="heading3">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Воронеж, 5-7 октября 2018. Выставка "Звезда Черноземья" (Тыквенные мысли часть
                                            1)
                                        </button>
                                    </h5>
                                </header>
                                <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Незнакомый город пульсирует красками неожиданной осени. Её холодное дыхание
                                            заползает под кожу. Нам опять в дорогу. Опять. Сколько их было, сколько ещё
                                        будет. Нескончаемая вереница людей с всех сторон. Шумы, запахи, всполохи огня.
                                        Всё это так знакомо, но, с другой стороны, привыкнуть невозможно. С момента
                                        моего последнего выхода в свет прошла уже пара месяцев, и вот снова я на чужой,
                                        чёрной как смоль земле. Это Воронеж, столица Черноземья. Здесь мы задержимся на
                                        целый месяц. Добро пожаловать мне. Увидимся после.</p>
                                        <p>Закончили. Теперь могу с уверенностью сказать, что о таких как я здесь почти не
                                            слышали. Взял первое в своей жизни первое место. Первое "первое". Мда. Надо,
                                        видимо, больше читать. Помимо этого, теперь я <mark>Международный чемпион</mark>.
                                                Еще
                                        чуть-чуть и задеру свой прямой <mark>норвежский лесной нос.</mark></p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="heading4">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Москва. 16-17 июня 2018 – Первая выставка!
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Ну что, барышни, с первой выставкой вас, однако! Много нервов потрачено, много
                                        времени и сил, но оно того стоило.</p>
                                        <p><mark>Питомники норвежских лесных кошек в Москве</mark> крайне немногочислены,
                                            но они есть и активно снабжают достойными конкурентами. Однако и мы не лыком,
                                            как говорится, шиты. Получены первые оценки и номинации, получен бесценный
                                            опыт, который будет использован в дальнейшем. Что тут еще скажешь? Дерзайте,
                                        барышни! В добрый путь.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="heading5">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Москва. 9 января 2018 г. – Прибытие Пампкина
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Мохнатая чешская тыква или разбавим скромную женскую компанию нескромным мужским
                                            присутствием. В общем, пятиминутка контролируемой глупости срочно в студию /
                                        номер ну и т.д.</p>
                                        <p>Кот крепок душой, стоек психикой, доверчив и любит путешествовать самолетами и
                                        другими видами транспорта. Выдающийся экземпляр <mark>норвежской лесной</mark>
                                            породы.
                                            Ласковый, с вдумчивым и глубоким голосом, апельсиновыми глазами и хвостом
                                            размером с ещё одного кота. Воспитанник замечательной чешской семьи приехал
                                        покорять Россию и, надо сказать, пока все идёт по плану.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="heading6">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            20 декабря 2017 – Регистрация питомника. Наш официальный день рождения.
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Немного прозы. Перефразировав одну из известных русских поговорок, можно
                                        сказать, что без бумажки ты букашка, а с бумажкой <mark>норвежская лесная
                                            кошка.</mark></p>. <p>С миром повседневности нужно уметь взаимодействовать.
                                Регистрацию
                                в системе WCF (World Cat Federation, Германия) и полученные сертификаты можно
                                считать первой ступенькой на это выщербленной лестнице. Вот так и происходит.
                                        Время неумолимо. Вчера ты маленький <mark>норвежский котенок</mark>, а сегодня
                                        дипломировнный экземляр породы.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="heading7">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link btn-wrap-normal" data-toggle="collapse" data-target="#collapse7"
                                            aria-expanded="true" aria-controls="collapse7">
                                            1 октября 2017 г. – Прибытие кошек. Наш неофициальный день рождения.
                                    </button>
                                    </h5>
                                </header>

                                <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Итак, свершилось. Две <mark>норвежские лесные</mark> красавицы обрели новый дом.
                                        Начало одного - есть всегда окончание другого.</p>
                                        <p>Шум осеннего дождя и шуршание опадающих листьев ознаменовал
                                            переход от котят к кошкам. Но не стоит спешить с выводами. Трансорфация
                                        протекает плавно - без резких движений и перекосов. Тем не менее <mark>путешествие
                                                    в
                                            Икстлан</mark> можно считать начатым. Это путешествие знаменито
                                        недостижимостью того
                                        положения вещей, которое было в момент его начала - в момент зарождения нового
                                        длинного пути. Но, как известно, прелесть ни в факте достижения конечной цели,
                                        а самом процессе.</p>
                                    </div>
                                </div>
                            </article>

                        </div>

                    </div>

                </section>

                <section id="mainArea" className="col-8">

                    <div className="container border-left border-right border-bottom border-primary">
                        <img title="купить норвежского котенка в москве норвежская лесная кошка особенности характера характер норвежской лесной кошки"
                            src="images/Caption.png" alt="котенок норвежской лесной" className="mx-auto d-block img-fluid" />
                        <h1 className="text-center">Питомник норвежских лесных кошек в Москве</h1>
                    </div>

                    <section id="mainNews">
                        <div style={{ 'background-color': 'rgba(254, 221, 98, 1)' }} className="alert mt-1 mb-1" role="alert">
                            <p className="text-justify text-center">У нас родились котята.</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-sm btn-block" href="kitty.html" role="button">Забронировать</a>
                            </p>
                        </div>
                    </section>

                    <div style={{ 'background-color': 'rgba(248, 249, 250, 0.5)' }} className="container border-bottom border-left border-right border-primary">

                        <div className="nav nav-fill nav-pills" id="v-pills-tab" role="tablist">
                            <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                                role="tab" aria-controls="v-pills-profile" aria-selected="true">О
                            питомнике</a>
                            <a className="nav-link" id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab"
                                aria-controls="v-pills-about" aria-selected="false">О породе</a>
                            <a className="nav-link" id="v-pills-exhibitions-tab" data-toggle="pill" href="#v-pills-exhibitions"
                                role="tab" aria-controls="v-pills-exhibitions" aria-selected="false">Выставки</a>
                            <a className="nav-link" id="v-pills-video-tab" data-toggle="pill" href="#v-pills-video" role="tab"
                                aria-controls="v-pills-video" aria-selected="false">Видео</a>
                            <a className="nav-link" id="v-pills-news-tab" data-toggle="pill" href="#v-pills-news" role="tab"
                                aria-controls="v-pills-news" aria-selected="false">Новости</a>
                            <a className="nav-link" id="v-pills-autors-tab" data-toggle="pill" href="#v-pills-autors" role="tab"
                                aria-controls="v-pills-autors" aria-selected="false">Документы</a>
                        </div>

                    </div>

                    <div id="v-pills-tabContent" className="tab-content">

                        <section className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                            <div style={{ 'background-color': 'rgba(248, 249, 250, 0.5)' }} className="container border-left border-right border-bottom border-primary">
                                <h4 className="text-center">О питомнике</h4>

                                <p>Приветствуем вас! Наш <mark>питомник норвежских лесных кошек</mark> занимается
                                    разведением
                                    соответствующей породы. Располагайтесь. Если вы здесь, то, скорее всего, это значит,
                                    что вы
                                    интересуетесь этой прекрасной аборигенной породой. Ну а если набрели случайно, то не
                                стесняйтесь. Мы рады всем и каждому.</p>

                                <img id="subLogoSecond" title="фото котят норвежской кошки норвежская лесная кошка купить в москве питомники"
                                    src="images/pumpkin.jpg" className="w-75 d-none d-sm-block rounded img-fluid border border-primary"
                                    alt="норвежская лесная купить" />
                                <img id="subLogoSecondHidden" title="питомник норвежских лесных кошек норвежский котенок"
                                    src="images/pumpkin.jpg" className="w-100 d-block d-sm-none rounded img-fluid border border-primary"
                                    alt="питомники норвежских кошек" />

                                <p>Неважно, только пытаетесь ли вы определиться с породой, или уже собираетесь <mark>купить
                                    норвежскую лесную кошку</mark>, в любом случае выбор этой породы - самый
                                правильный выбор! Эти
                                кошки – замечательные компаньоны, верные друзья и, конечно, дивной красоты животные.
                                Врождённое воспитание, такт и ненавязчивость. Это одни из самых умных животных.
                                Подробнее о
                                породе читайте в соответствующем разделе.</p>

                                <p>Здесь вы найдёте информацию о породе, о нашем питомнике, о наших кошках и котах и о
                                    многом
                                    другом. Много профессиональных фотографий, видео, интересные статьи - все это ждёт вас.
                                Здесь вы можете увидеть фото котят, зарезервировать и <mark>купить котенка</mark>.</p>

                                <p>Также вы можете найти наши контакты и, не стесняясь, звонить, если у вас есть какие-либо
                                вопросы и предложения. Начните своё <mark>путешествие в Икстлан</mark> с нами. Добро
                                пожаловать!</p>

                            </div>

                        </section>

                        <section className="tab-pane fade border-bottom border-primary" id="v-pills-about" role="tabpanel"
                            aria-labelledby="v-pills-about-tab">
                            <h3 className="text-center">Порода Норвежская лесная кошка</h3>
                            <div style={{ 'background-color': 'rgba(248, 249, 250, 0.5)' }}>
                                <p>Доброго времени, гость! Располагайся. Мы из породы <mark>норвежских лесных кошек</mark>.
                                    Мы крепки
                                    здоровьем и
                                    психикой. Нас никто не выводил и не скрещивал. Мы естественный результат эволюции в
                                    условиях
                                    суровой северной природы. Ты увидишь в наших глазах разум и легкий отблеск печали по
                                    соснам, пронзающим небо, и
                                    бесконченому
                                снегу.</p>

                                <img id="subLogo" title="фото котят норвежской кошки" src="images/logo.jpg" className="w-75 d-none d-sm-block rounded img-fluid border border-primary"
                                    alt="норвежская лесная питомник" />
                                <img id="subLogoHidden" title="норвежская лесная питомник норвежские лесные котята норвежская лесная кошка питомник москва"
                                    src="images/logo.jpg" className="w-100 d-block d-sm-none rounded img-fluid border border-primary"
                                    alt="питомник норвежской" />
                                <p>Впрочем, мы ощутимо повеселеем, если нам предложить сытную трапезу. Если предлагать её
                                    регулярно,
                                в конце концов мы вырастем до внушительных размеров.</p>
                                <p>Наши мужчины массивнее и тяжелее большинства других пород (за исключением наших
                                    собратьев по
                                    ту сторону
                                    Атлантики и с бескрайних просторов Сибири). Наши женщины нам под стать, однако чуть
                                    меньше.
                                    Вес
                                взрослой кошки в среднем около 5 кг, коты на 2-3 кг тяжелее.</p>
                                <p>Одеваемся мы тепло, а как иначе? Попробуй поторчи на морозе 24 часа в сутки! Даже самый
                                маленький <mark>норвежский котенок</mark> густо окутан несколькими слоями самой теплой
                                        и плотной шерсти. Итого:
                                        основная
                                        шерсть
                                        с густым подшёрстком, длинный покров из остевых волос вдоль хребта и на хвосте, которые
                                        отталкивают
                                воду (да да. иногда приходится и купаться).</p>
                                <p>Лапы и челюсти быстры. Всех, у кого было по-другому, отсеяла безжалостная
                                    стерва-эволюция.
                                    Уши крупные
                                с кисточками. В наличии длинный пушистый хвост, доходящий до лопаток.</p>
                                <p>Характер нордический, выдержанный. Вывести из себя невозможно - не представляю себе
                                    такого,
                                    но с
                                    другой стороны моментальное расположение и любовь не гарантированы. Излишняя
                                    фамильярность
                                    никому
                                не приятна (кроме некоторых пород собак) так почему же мы должны быть исключением?</p>
                                <p>Дайте нам время привыкнуть. Привыкание ускоряют: лакомства, периодические вычесывания,
                                    наши
                                    женщины
                                    от этого в восторге. Мы любим сидеть рядом и разговаривать, но от в объятий лучше
                                    воздержаться,
                                хотя бывают и исключения</p>
                                <p>С нами можно гулять в том числе и зимой. Мы любим снег и легкий зимний ветер. Нам нужно
                                    движение
                                почти так же как кислород.</p>
                                <p>Мы верные друзья. От нас нет проблем и мы не требуем слишком многого. Ревность и
                                    излишние
                                    проявления
                                эмоций совершенно не про нас, но, с другой стороны, можем и поиграть под настроение.</p>
                                <p>Сейчас наша стоянка в Москве.</p>
                                <aside>
                                    <p>Более подробно про <mark>содержание норвежской лесной кошки</mark> можно прочитать в
                                    соотвествующем <a href="articles.html">разделе</a>.</p>
                                </aside>
                            </div>
                        </section>

                        <section className="tab-pane fade" id="v-pills-exhibitions" role="tabpanel" aria-labelledby="v-pills-exhibitions-tab">
                            <h3 className="text-center">Выставки</h3>
                            <div id="accordionExhibitions">

                                <div className="card">
                                    <div className="card-header" id="headingExhibitions1">
                                        <h5 className="text-center mb-0">
                                            <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                                data-target="#collapseExhibitions1" aria-expanded="true" aria-controls="collapseExhibitions1">
                                                Воронеж. 27-28 октября 2018. Выставка "Осенние смотрины" от КЛК Люкс.
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseExhibitions1" className="collapse show" aria-labelledby="headingExhibitions1"
                                        data-parent="#accordionExhibitions">
                                        <div className="card-body">

                                            <div className="container border border-primary">
                                                <h5 className="text-center">Воронеж. 27-28 октября 2018. Выставка "Осенние
                                                    смотрины"
                                                от КЛК Люкс.</h5>

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img title="норвежские лесные котята" src="images/Exhibitions/Exhibitions5/large/3.jpg"
                                                                alt="продажа норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежские лесные котята купить норвежская лесная кошка купить норвежская лесная кошка описание породы"
                                                                src="images/Exhibitions/Exhibitions5/large/4.jpg" alt="норвежские лесные котята" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="фото котят норвежской кошки котята норвежской норвежские лесные котята купить"
                                                                src="images/Exhibitions/Exhibitions5/large/7.jpg" alt="норвежский котенок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка питомник москва где купить котенка норвежской лесной породы котята норвежской лесной кошки купить"
                                                                src="images/Exhibitions/Exhibitions5/large/8.jpg" alt="котята норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить котенка норвежской лесной кошки норвежская лесная кошка особенности характера норвежская лесная кошка котята"
                                                                src="images/Exhibitions/Exhibitions5/large/9.jpg" alt="путешествие в икстлан" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная купить норвежская лесная кошка купить в москве питомники"
                                                                src="images/Exhibitions/Exhibitions5/large/10.jpg" alt="купить котенка в москве" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions5/large/11.jpg" alt="путешествие в икстлан" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/3.jpg">
                                                                <img className="img-fluid" title="Норвежские лесные красавицы"
                                                                    src="images/Exhibitions/Exhibitions5/small/3.jpg" alt="норвежские лесные красавицы" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/4.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions5/small/4.jpg" alt="Норвежские лесные красавицы" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/7.jpg">
                                                                <img className="img-fluid" title="норвежские лесные котята купить норвежская лесная кошка купить в москве"
                                                                    src="images/Exhibitions/Exhibitions5/small/7.jpg" alt="котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/8.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions5/small/8.jpg" alt="норвежский котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/9.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions5/small/9.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/10.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка купить в москве кошки породы норвежская лесная"
                                                                    src="images/Exhibitions/Exhibitions5/small/10.jpg" alt="котенок норвежской лесной" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition11" href="images/Exhibitions/Exhibitions5/large/11.jpg">
                                                                <img className="img-fluid" title="кошки породы норвежская лесная котята норвежской лесной кошки цена"
                                                                    src="images/Exhibitions/Exhibitions5/small/11.jpg" alt="норвежская лесная купить" />
                                                            </a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка особенности характера" src="images/Exhibitions/Exhibitions5/large/1.jpg"
                                                                alt="питомники норвежских кошекй" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions5/large/2.jpg" alt="питомники норвежских кошек" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка особенности характера" src="images/Exhibitions/Exhibitions5/large/5.jpg"
                                                                alt="питомник норвежской продажа норвежской котята норвежской норвежская лесная питомник" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions5/large/6.jpg" alt="норвежская лесная питомник" />
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition12" href="images/Exhibitions/Exhibitions5/large/1.jpg">
                                                                <img className="img-fluid" title="питомники норвежских кошек"
                                                                    src="images/Exhibitions/Exhibitions5/small/1.jpg" alt="питомник норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition12" href="images/Exhibitions/Exhibitions5/large/2.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions5/small/2.jpg" alt="продажа норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition12" href="images/Exhibitions/Exhibitions5/large/5.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка описание и характер купить котенка в москве"
                                                                    src="images/Exhibitions/Exhibitions5/small/5.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition12" href="images/Exhibitions/Exhibitions5/large/6.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва норвежская лесная кошка купить"
                                                                    src="images/Exhibitions/Exhibitions5/small/6.jpg" alt="норвежский котенок" />
                                                            </a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="container border border-primary">
                                                    <p>Вторая воронежская выставка прошла под эгидой "Кто этот рыжий?!",
                                                    чем слабо отличалась от первой.</p>
                                                    <p>И вправду зверь для города совершенно неизвестный и редкий в своём,
                                                        что называется, полёте. Очередной титул открыт. 7 из 28 место на
                                                        WCF-ринге в первый день и 5 из 26 – во второй, плюс номинации на
                                                    <mark>Best in Show</mark> оба дня прилагаются.</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingExhibitions2">
                                        <h5 className="text-center mb-0">
                                            <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                                data-target="#collapseExhibitions2" aria-expanded="true" aria-controls="collapseExhibitions2">
                                                Воронеж. 5-7 октября 2018. Выставка "Звезда Черноземья".
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseExhibitions2" className="collapse" aria-labelledby="headingExhibitions2"
                                        data-parent="#accordionExhibitions">
                                        <div className="card-body">

                                            <div className="container border border-primary">
                                                <h5 className="text-center">Воронеж. 5-7 октября 2018. Выставка "Звезда
                                                Черноземья".</h5>

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img title="купить котенка в москве" src="images/Exhibitions/Exhibitions4/large/1.jpg"
                                                                alt="питомник норвежской продажа норвежской котята норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions4/large/2.jpg" alt="котята норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка особенности характера котята норвежской лесной кошки купить в москве"
                                                                src="images/Exhibitions/Exhibitions4/large/3.jpg" alt="купить котенка в москве" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions4/large/4.jpg" alt="путешествие в икстлан" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка особенности характера" src="images/Exhibitions/Exhibitions4/large/5.jpg"
                                                                alt="норвежские лесные красавицы" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить в москве" src="images/Exhibitions/Exhibitions4/large/6.jpg"
                                                                alt="котенок в подарок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка описание породы" src="images/Exhibitions/Exhibitions4/large/7.jpg"
                                                                alt="норвежский котенок в подарок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить в москве цена " src="images/Exhibitions/Exhibitions4/large/8.jpg"
                                                                alt="норвежские лесные котята" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка описание породы норвежская лесная кошка купить в москве цена "
                                                                src="images/Exhibitions/Exhibitions4/large/9.jpg" alt="котенок норвежской лесной" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва норвежская лесная кошка купить в москве питомники"
                                                                src="images/Exhibitions/Exhibitions4/large/10.jpg" alt="норвежская лесная купить" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="порода кошек норвежская лесная фото" src="images/Exhibitions/Exhibitions4/large/11.jpg"
                                                                alt="питомники норвежских кошек" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить" src="images/Exhibitions/Exhibitions4/large/12.jpg"
                                                                alt="норвежская лесная питомник" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="котята норвежской лесной кошки купить в москве порода норвежская лесная кошка"
                                                                src="images/Exhibitions/Exhibitions4/large/14.jpg" alt="питомник норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежский котенок" src="images/Exhibitions/Exhibitions4/large/15.jpg"
                                                                alt="порода норвежская лесная кошка котята норвежской лесной москва" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежские лесные котята норвежская лесная кошка купить в москве питомники"
                                                                src="images/Exhibitions/Exhibitions4/large/16.jpg" alt="продажа норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить в москве" src="images/Exhibitions/Exhibitions4/large/21.jpg"
                                                                alt="норвежские лесные котята" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions4/large/22.jpg" alt="норвежский котенок" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/1.jpg">
                                                                <img className="img-fluid" title="норвежская лесная купить в москве Котенок в подарок на новый год"
                                                                    src="images/Exhibitions/Exhibitions4/small/1.jpg" alt="котята норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/2.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва норвежская лесная кошка особенности характера"
                                                                    src="images/Exhibitions/Exhibitions4/small/2.jpg" alt="купить котенка в москве" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/3.jpg">
                                                                <img className="img-fluid" title="питомники норвежских лесных кошек в москве"
                                                                    src="images/Exhibitions/Exhibitions4/small/3.jpg" alt="путешествие в икстлан" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/4.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/4.jpg" alt="норвежские лесные красавицы" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/5.jpg">
                                                                <img className="img-fluid" title="питомники норвежских лесных кошек в москве"
                                                                    src="images/Exhibitions/Exhibitions4/small/5.jpg" alt="котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/6.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка купить в москве питомники норвежская лесная кошка купить питомник норвежских лесных кошек москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/6.jpg" alt="норвежский котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/7.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/7.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/8.jpg">
                                                                <img className="img-fluid" title="купить котенка норвежской лесной кошки в москве"
                                                                    src="images/Exhibitions/Exhibitions4/small/8.jpg" alt="котенок норвежской лесной" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/9.jpg">
                                                                <img className="img-fluid" title="котята норвежской лесной кошки купить в москве"
                                                                    src="images/Exhibitions/Exhibitions4/small/9.jpg" alt="норвежская лесная купить" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/10.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/10.jpg" alt="питомники норвежских кошек" />
                                                            </a>
                                                        </div>

                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/11.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка купить в москве питомники"
                                                                    src="images/Exhibitions/Exhibitions4/small/11.jpg" alt="норвежская лесная питомник" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/12.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/12.jpg" alt="питомник норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/14.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/14.jpg" alt="продажа норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/15.jpg">
                                                                <img className="img-fluid" title="купить котенка в москве" src="images/Exhibitions/Exhibitions4/small/15.jpg"
                                                                    alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/16.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка купить в москве цена котенок в подарок на новый год"
                                                                    src="images/Exhibitions/Exhibitions4/small/16.jpg" alt="норвежский котенок" />
                                                            </a>
                                                        </div>

                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/21.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка купить в москве норвежская лесная кошка купить кошки породы норвежская лесная"
                                                                    src="images/Exhibitions/Exhibitions4/small/21.jpg" alt="котята норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition21" href="images/Exhibitions/Exhibitions4/large/22.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва норвежская лесная кошка купить"
                                                                    src="images/Exhibitions/Exhibitions4/small/22.jpg" alt="купить котенка в москве" />
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить норвежская лесная кошка купить в москве питомники норвежская лесная кошка купить"
                                                                src="images/Exhibitions/Exhibitions4/large/17.jpg" alt="путешествие в икстлан" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить в москве котенок в подарок котенок в подарок на новый год"
                                                                src="images/Exhibitions/Exhibitions4/large/18.jpg" alt="норвежские лесные красавицы" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                src="images/Exhibitions/Exhibitions4/large/19.jpg" alt="котенок в подарок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва норвежский котенок"
                                                                src="images/Exhibitions/Exhibitions4/large/20.jpg" alt="норвежский котенок в подарок" />
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition22" href="images/Exhibitions/Exhibitions4/large/17.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/17.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition22" href="images/Exhibitions/Exhibitions4/large/18.jpg">
                                                                <img className="img-fluid" title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва"
                                                                    src="images/Exhibitions/Exhibitions4/small/18.jpg" alt="котенок норвежской лесной" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition22" href="images/Exhibitions/Exhibitions4/large/19.jpg">
                                                                <img className="img-fluid" title="купить норвежского лесного котенка из питомника купить котенка норвежской лесной в москве"
                                                                    src="images/Exhibitions/Exhibitions4/small/19.jpg" alt="норвежская лесная купить" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition22" href="images/Exhibitions/Exhibitions4/large/20.jpg">
                                                                <img className="img-fluid" title="где купить котенка норвежской лесной породы котята норвежской лесной кошки купить"
                                                                    src="images/Exhibitions/Exhibitions4/small/20.jpg" alt="питомники норвежских кошек" />
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">
                                                    <p>Первая выставка в Воронеже. Редкая порода - редкий гость с севера.
                                                        Настоящий Норман и истинный сын бесконечного снега произвел
                                                    неизгладимое впечатление.</p>
                                                    <p>Высота <mark>Best of best</mark> наконец взята. Первая победа всегда
                                                        самая
                                                        запоминающаяся, особенно добытая в такой борьбе. Итак, на первой
                                                    воронежской выставке кот лучший и точка. Этим все сказано.</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingExhibitionsOne">
                                        <h5 className="text-center mb-0">
                                            <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                                data-target="#collapseExhibitionsOne" aria-expanded="true" aria-controls="collapseExhibitionsOne">
                                                Москва. 7-8 июля 2018
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseExhibitionsOne" className="collapse" aria-labelledby="headingExhibitionsOne"
                                        data-parent="#accordionExhibitions">
                                        <div className="card-body">

                                            <div className="container border border-primary">
                                                <h5 className="text-center">Москва. Выставка от 7-8 июля 2018</h5>

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img title="содержание норвежской лесной кошки характер норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions1/large/1.jpg" alt="норвежская лесная питомник" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="фото котят норвежской кошки норвежский котенок" src="images/Exhibitions/Exhibitions1/large/2.jpg"
                                                                alt="питомник норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="характер норвежской лесной кошки стоимость норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions1/large/3.jpg" alt="продажа норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная питомник питомники норвежских кошек кошки породы норвежская лесная"
                                                                src="images/Exhibitions/Exhibitions1/large/4.jpg" alt="норвежские лесные котята" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="котята норвежской лесной москва купить котенка норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions1/large/5.jpg" alt="норвежский котенок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить котенка норвежской лесной кошки норвежские лесные котята купить норвежские лесные котята"
                                                                src="images/Exhibitions/Exhibitions1/large/6.jpg" alt="котята норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка котята купить котенка норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions1/large/7.jpg" alt="купить котенка в москве" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="котенок в подарок котенок в подарок на новый год"
                                                                src="images/Exhibitions/Exhibitions1/large/8.jpg" alt="путешествие в икстлан" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="купить котенка в москве купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                src="images/Exhibitions/Exhibitions1/large/9.jpg" alt="норвежские лесные красавицы" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="характер норвежской лесной кошки норвежская лесная кошка описание и характер норвежская лесная кошка особенности характера"
                                                                src="images/Exhibitions/Exhibitions1/large/10.jpg" alt="котенок в подарок" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/1.jpg">
                                                                <img className="img-fluid" title="котята норвежской лесной кошки купить купить норвежского лесного котенка из питомника где купить котенка норвежской лесной породы"
                                                                    src="images/Exhibitions/Exhibitions1/small/1.jpg" alt="норвежский котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/2.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка питомник москва норвежская лесная кошка купить в москве питомники"
                                                                    src="images/Exhibitions/Exhibitions1/small/2.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/3.jpg">
                                                                <img className="img-fluid" title="котята норвежской лесной кошки купить в москве котята норвежской норвежский котенок"
                                                                    src="images/Exhibitions/Exhibitions1/small/3.jpg" alt="котенок норвежской лесной" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/4.jpg">
                                                                <img className="img-fluid" title="питомник норвежской норвежская лесная питомник котята норвежской лесной москва"
                                                                    src="images/Exhibitions/Exhibitions1/small/4.jpg" alt="норвежская лесная купить" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/5.jpg">
                                                                <img className="img-fluid" title="котенок в подарок на новый год норвежский котенок в подарок котенок в подарок"
                                                                    src="images/Exhibitions/Exhibitions1/small/5.jpg" alt="питомники норвежских кошек" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/6.jpg">
                                                                <img className="img-fluid" title="купить котенка в москве купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                    src="images/Exhibitions/Exhibitions1/small/6.jpg" alt="норвежская лесная питомник" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/7.jpg">
                                                                <img className="img-fluid" title="характер норвежской лесной кошки норвежская лесная кошка описание и характер норвежская лесная кошка особенности характера"
                                                                    src="images/Exhibitions/Exhibitions1/small/7.jpg" alt="питомник норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/8.jpg">
                                                                <img className="img-fluid" title="купить котенка норвежской лесной котята норвежской лесной кошки купить купить норвежского лесного котенка из питомника"
                                                                    src="images/Exhibitions/Exhibitions1/small/8.jpg" alt="продажа норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/9.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка купить в москве питомники купить норвежскую лесную кошку в москве норвежская лесная кошка купить в москве"
                                                                    src="images/Exhibitions/Exhibitions1/small/9.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="exhibition3" href="images/Exhibitions/Exhibitions1/large/10.jpg">
                                                                <img className="img-fluid" title="норвежские лесные котята фото котят норвежской кошки продажа норвежской"
                                                                    src="images/Exhibitions/Exhibitions1/small/10.jpg" alt="норвежский котенок" />
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">
                                                    <p>Во второй выставке участвовал только кот (ровно в день выставки
                                                        ему
                                                        исполнилось
                                                    10 месяцев).</p>
                                                    <p>Он благополучно спал и ел. В общем, занимался своими прямыми
                                                        обязанностями
                                                        на твердую пятерку. В промежутках между сном и едой, а также
                                                        редкими,
                                                        но напористыми попытками исследовать новые территории, он
                                                        удостоился
                                                        отличных оценок, четвертого места на ринге в первый день и
                                                        второго
                                                        места
                                                    на второй день. </p>
                                                    <p>Также стал лучшим взрослым в шоу полудлинношерстных пород и во
                                                        второй день
                                                    получил <mark>Best of Best</mark>.</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingExhibitionsTwo">
                                        <h5 className="text-center mb-0">
                                            <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                                data-target="#collapseExhibitionsTwo" aria-expanded="true" aria-controls="collapseExhibitionsTwo">
                                                Москва. 16-17 июня 2018
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseExhibitionsTwo" className="collapse" aria-labelledby="headingExhibitionsTwo"
                                        data-parent="#accordionExhibitions">
                                        <div className="card-body">

                                            <div className="container border border-primary">
                                                <h5 className="text-center">Выставка от 16-17 июня 2018</h5>

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img title="питомники норвежских кошек питомник норвежских лесных кошек продажа норвежских лесных котят"
                                                                src="images/Exhibitions/Exhibitions2/large/1.jpg" alt="котята норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img title=" кошки породы норвежская лесная норвежская лесная кошка описание породы"
                                                                src="images/Exhibitions/Exhibitions2/large/2.jpg" alt="купить котенка в москве" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="питомник норвежских лесных кошек москва норвежская лесная кошка купить в москве питомники"
                                                                src="images/Exhibitions/Exhibitions2/large/3.jpg" alt="путешествие в икстлан" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежская лесная кошка купить в москве норвежская лесная кошка купить в москве"
                                                                src="images/Exhibitions/Exhibitions2/large/4.jpg" alt="норвежские лесные красавицы" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="питомники норвежских лесных кошек в москве котенок норвежской лесной кошки в москве купить котенка норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions2/large/5.jpg" alt="котенок в подарок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="норвежские лесные котята котята норвежской лесной москва норвежские лесные котята купить"
                                                                src="images/Exhibitions/Exhibitions2/large/6.jpg" alt="норвежский котенок в подарок" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="котята норвежской лесной кошки цена котенок в подарок на новый год"
                                                                src="images/Exhibitions/Exhibitions2/large/7.jpg" alt="норвежские лесные котята" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="путешествие в икстлан содержание норвежской лесной кошки купить котенка в москве"
                                                                src="images/Exhibitions/Exhibitions2/large/8.jpg" alt="котенок норвежской лесной" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="особенности содержания норвежской лесной кошки стоимость норвежской лесной кошки характер норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions2/large/9.jpg" alt="норвежская лесная купить" />
                                                        </div>
                                                        <div className="item">
                                                            <img title="уход за норвежской лесной кошкой купить котенка норвежской лесной в москве купить котенка норвежской лесной"
                                                                src="images/Exhibitions/Exhibitions2/large/10.jpg" alt="питомники норвежских кошек" />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container border border-primary">

                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/1.jpg">
                                                            <img className="img-fluid" title="питомник норвежских лесных кошек продажа норвежских лесных котят порода норвежская лесная кошка"
                                                                src="images/Exhibitions/Exhibitions2/small/1.jpg" alt="норвежская лесная питомник" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/2.jpg">
                                                            <img className="img-fluid" title="сайт питомника норвежских лесных кошек питомник норвежских лесных кошек москва"
                                                                src="images/Exhibitions/Exhibitions2/small/2.jpg" alt="питомник норвежской" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/3.jpg">
                                                            <img className="img-fluid" title="норвежская лесная кошка купить норвежская лесная купить в москве норвежская лесная кошка купить в москве"
                                                                src="images/Exhibitions/Exhibitions2/small/3.jpg" alt="продажа норвежской" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/4.jpg">
                                                            <img className="img-fluid" title="норвежская лесная кошка купить в москве питомники питомники норвежских лесных кошек в москве"
                                                                src="images/Exhibitions/Exhibitions2/small/4.jpg" alt="норвежские лесные котята" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/5.jpg">
                                                            <img className="img-fluid" title="купить котенка норвежской лесной кошки в москве котенок норвежской лесной"
                                                                src="images/Exhibitions/Exhibitions2/small/5.jpg" alt="норвежский котенок" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/6.jpg">
                                                            <img className="img-fluid" title="норвежская лесная кошка котята сколько стоит котенок норвежской лесной кошки"
                                                                src="images/Exhibitions/Exhibitions2/small/6.jpg" alt="котята норвежской" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/7.jpg">
                                                            <img className="img-fluid" title="норвежский котенок в подарок котенок в подарок норвежские лесные красавицы"
                                                                src="images/Exhibitions/Exhibitions2/small/7.jpg" alt="купить котенка в москве" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/8.jpg">
                                                            <img className="img-fluid" title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                src="images/Exhibitions/Exhibitions2/small/8.jpg" alt="путешествие в икстлан" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/9.jpg">
                                                            <img className="img-fluid" title="характер норвежской лесной кошки норвежская лесная кошка описание и характер"
                                                                src="images/Exhibitions/Exhibitions2/small/9.jpg" alt="норвежские лесные красавицы" />
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-6 thumb">
                                                        <a data-fancybox="exhibition4" href="images/Exhibitions/Exhibitions2/large/10.jpg">
                                                            <img className="img-fluid" title="купить котенка норвежской лесной в москве купить котенка норвежской лесной"
                                                                src="images/Exhibitions/Exhibitions2/small/10.jpg" alt="котенок в подарок" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="container border border-primary">
                                                <p>Первый день, жара, семь утра. Выходные начинаются с раннего подъема.
                                                    Все
                                                    приготовления
                                                    закончены - долгожданная выставка начинается через несколько часов.
                                            </p>
                                                <p>Работа грумера заставила задуматься над двумя вещами: во-первых,
                                                    сколько
                                                    же можно
                                                вычесать из одной <mark>норвежской лесной красавицы</mark>?! Казалось,
                                                    еще немного и можно связать еще
                                                    одну
                                                кошку (похоже, так они и размножаются). </p>
                                                <p>Во-вторых, сколько человек нужно на одно животное, чтобы удерживать
                                                    его
                                                    на месте
                                                    два часа во время работы фена? После обоих вопросов можно смело
                                                    ставить
                                                многоточие...</p>
                                                <p>Но в итоге шанс был использован, и высота, пусть и не самая высокая,
                                                    но
                                                    самая
                                                    долгожданная, была взята. Наших красавиц оценили по достоинству.
                                                    Были
                                                    получены
                                                первые оценки и <mark>номинации на BIS</mark>. Пусть так будет всегда.</p>
                                                <p>Все подробности в фотоотчете. Приятного просмотра!</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </section>

                        <section className="tab-pane fade" id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab">

                            <h3 className="text-center">Видео</h3>
                            <div style={{ 'background-color': 'rgba(248, 249, 250, 0.5)' }} className="container-fluid border border-primary">
                                <div className="container-fluid embed-responsive embed-responsive-16by9 m-1">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/7ATrqGquF5E"
                                        allowfullscreen name="slider"></iframe>
                                </div>

                                <div className="d-flex flex-row bd-highlight justify-content-center mb-3">
                                    <a href="https://www.youtube.com/embed/7ATrqGquF5E" target="slider"><img className="bd-highlight m-1"
                                        title="котята норвежской норвежский котенок норвежские лесные котята" src="http://img.youtube.com/vi/7ATrqGquF5E/default.jpg"
                                        alt="норвежский котенок в подарок" /></a>
                                    <a href="https://www.youtube.com/embed/PqHSGhg8_ug" target="slider"><img className="bd-highlight m-1"
                                        title="котята норвежской норвежский котенок норвежские лесные котята" src="http://img.youtube.com/vi/PqHSGhg8_ug/default.jpg"
                                        alt="норвежские лесные котята" /></a>
                                    <a href="https://www.youtube.com/embed/Y_jS7Klj_nw" target="slider"><img className="bd-highlight m-1"
                                        title="котята норвежской норвежский котенок норвежские лесные котята" src="http://img.youtube.com/vi/Y_jS7Klj_nw/default.jpg"
                                        alt="котенок норвежской лесной" /></a>
                                </div>
                            </div>

                        </section>

                        <section className="tab-pane fade" id="v-pills-news" role="tabpanel" aria-labelledby="v-pills-news-tab">
                            <h3 className="text-center">Новости</h3>

                            <div style={{ 'background-color': 'rgba(248, 249, 250, 0.5)' }}>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">Ноябрь в окно - пополнение полным ходом в дверь</h3>
                                    </header>
                                    <p>Роддом. Вот роддом и всё тут. Писки, вопли, бессонные ночи. <mark>Норвежские
                                        лесные котята</mark> причиняют столько же радости и беспокойства при
                                    рождении, сколько и обычные, но есть и отличия.</p>
                                    <p>Прайд, оказывается - это не только о львах. Неотвратимая и основная черта
                                        характера кошки-матери у этой породы - это фундаментальный материнский
                                        инстинкт,
                                    причём по отношению ко всем котятам, не только своим.</p>
                                    <p> Обе кошки стали матерями
                                        с разницей в один день, поэтому всё делают вместе - кормят, умывают, отдыхают.
                                        Так сказать, в общее лукошко все рожали кошки. Ладно. Хватит шуток.
                                    Всем, кто хочет <mark>купить котенка в Москве</mark> (в общем-то и за её
                                    пределами никто вам не мешает), добро пожаловать в <a href="kitty.html" role="button">соответствующий
                                        раздел.</a></p>
                                </article>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">Воронеж, 27-28 октября 2018. Выставка "Осенние смотрины" от
                                            КЛК Люкс.
                                            (Тыквенные мысли часть
                                        2)</h3>
                                    </header>
                                    <p>Дубль второй. Серое небо рушится вбок. Осень в разгаре без компромиссов и
                                        пощады. Всё те же старые необходимости, приготовления. Снова сидеть два дня в
                                    тесной палатке. Само собой, знаменитый характер <mark>норвежской лесной</mark>
                                        породы и врожденная деликатность не дает мне возможности громогласно
                                        возмутиться.
                                        Проживая вторую часть этого странного представления, начинаешь все чаще об этом
                                        вспоминать. Ну а после. Что после?
                                    Наконец, домой. Увижу семью.</p>
                                    <p>В этот раз открыт титул <mark>Большого международного чемпиона.</mark> Меня
                                    теперь ждут иные земли. Ну что ж, посмотрим, чем они смогут меня удивить.</p>
                                </article>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">Воронеж, 5-7 октября 2018. Выставка "Звезда Черноземья"
                                            (Тыквенные мысли часть
                                        1)</h3>
                                    </header>
                                    <p>Незнакомый город пульсирует красками неожиданной осени. Её холодное дыхание
                                        заползает под кожу. Нам опять в дорогу. Опять. Сколько их было, сколько ещё
                                        будет. Нескончаемая вереница людей с всех сторон. Шумы, запахи, всполохи огня.
                                        Всё это так знакомо, но, с другой стороны, привыкнуть невозможно. С момента
                                        моего последнего выхода в свет прошла уже пара месяцев, и вот снова я на чужой,
                                        чёрной как смоль земле. Это Воронеж, столица Черноземья. Здесь мы задержимся на
                                    целый месяц. Добро пожаловать мне. Увидимся после.</p>
                                    <p>Закончили. Теперь могу с уверенностью сказать, что о таких как я здесь почти не
                                        слышали. Взял первое в своей жизни первое место. Первое "первое". Мда. Надо,
                                    видимо, больше читать. Помимо этого, теперь я <mark>Международный чемпион</mark>.
                                        Еще
                                    чуть-чуть и задеру свой прямой <mark>норвежский лесной нос.</mark></p>
                                </article>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">Москва. 16-17 июня 2018 – Первая выставка!</h3>
                                    </header>
                                    <p>Ну что, барышни, с первой выставкой вас, однако! Много нервов потрачено, много
                                    времени и сил, но оно того стоило.</p>
                                    <p><mark>Питомники норвежских лесных кошек в Москве</mark> крайне немногочислены,
                                        но они есть и активно снабжают достойными конкурентами. Однако и мы не лыком,
                                        как говорится, шиты. Получены первые оценки и номинации, получен бесценный
                                        опыт, который будет использован в дальнейшем. Что тут еще скажешь? Дерзайте,
                                    барышни! В добрый путь.</p>
                                </article>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">Москва. 9 января 2018 г. – Прибытие Пампкина</h3>
                                    </header>
                                    <p>Мохнатая чешская тыква или разбавим скромную женскую компанию нескромным мужским
                                        присутствием. В общем, пятиминутка контролируемой глупости срочно в студию /
                                    номер ну и т.д.</p>
                                    <p>Кот крепок душой, стоек психикой, доверчив и любит путешествовать самолетами и
                                    другими видами транспорта. Выдающийся экземпляр <mark>норвежской лесной</mark>
                                        породы.
                                        Ласковый, с вдумчивым и глубоким голосом, апельсиновыми глазами и хвостом
                                        размером с ещё одного кота. Воспитанник замечательной чешской семьи приехал
                                    покорять Россию и, надо сказать, пока все идёт по плану.</p>
                                </article>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">20 декабря 2017 – Регистрация питомника. Наш официальный
                                        день рождения.</h3>
                                    </header>
                                    <p>Немного прозы. Перефразировав одну из известных русских поговорок, можно
                                    сказать, что без бумажки ты букашка, а с бумажкой <mark>норвежская лесная
                                        кошка.</mark></p>. <p>С миром повседневности нужно уметь взаимодействовать.
                                Регистрацию
                                в системе WCF (World Cat Federation, Германия) и полученные сертификаты можно
                                считать первой ступенькой на это выщербленной лестнице. Вот так и происходит.
                                    Время неумолимо. Вчера ты маленький <mark>норвежский котенок</mark>, а сегодня
                                    дипломировнный экземляр породы.</p>
                                </article>

                                <article className="container border-top border-left border-right border-primary">
                                    <header>
                                        <h3 className="text-center">1 октября 2017 г. – Прибытие кошек. Наш неофициальный день
                                        рождения.</h3>
                                    </header>
                                    <p>Итак, свершилось. Две <mark>норвежские лесные</mark> красавицы обрели новый дом.
                                    Начало одного - есть всегда окончание другого.</p>
                                    <p>Шум осеннего дождя и шуршание опадающих листьев ознаменовал
                                        переход от котят к кошкам. Но не стоит спешить с выводами. Трансорфация
                                    протекает плавно - без резких движений и перекосов. Тем не менее <mark>путешествие
                                            в
                                        Икстлан</mark> можно считать начатым. Это путешествие знаменито
                                    недостижимостью того
                                    положения вещей, которое было в момент его начала - в момент зарождения нового
                                    длинного пути. Но, как известно, прелесть ни в факте достижения конечной цели,
                                    а самом процессе.</p>
                                </article>

                            </div>

                        </section>

                        <section className="tab-pane fade" id="v-pills-autors" role="tabpanel" aria-labelledby="v-pills-autors-tab">

                            <h4 className="text-center">Документы</h4>

                            <div id="accordionCatsCertificates">

                                <div className="card">
                                    <div className="card-header" id="headingCertificates1">
                                        <h5 className="text-center mb-0">
                                            <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                                data-target="#collapseCertificates1" aria-expanded="true" aria-controls="headingCertificates1">
                                                Родословные.
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseCertificates1" className="collapse show" aria-labelledby="headingCertificates1"
                                        data-parent="#accordionCatsCertificates">
                                        <div className="card-body">

                                            <div className="container border border-primary">

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item"><img title="норвежская лесная кошка купить в москве питомники норвежская лесная купить"
                                                            src="images/Certificates/large/1.jpg" alt="норвежская лесная купить" /></div>
                                                        <div className="item"><img title="норвежская лесная кошка купить в москве норвежская лесная кошка купить в москве"
                                                            src="images/Certificates/large/2.jpg" alt="питомники норвежских кошек" /></div>
                                                        <div className="item"><img title="норвежская лесная кошка купить в москве питомники питомники норвежских лесных кошек в москве"
                                                            src="images/Certificates/large/3.jpg" alt="норвежская лесная питомник" /></div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/1.jpg">
                                                                <img className="img-fluid" title="купить котенка норвежской лесной кошки в москве котенок норвежской лесной"
                                                                    src="images/Certificates/small/1.jpg" alt="питомник норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/2.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка котята сколько стоит котенок норвежской лесной кошки котята норвежской лесной кошки цена"
                                                                    src="images/Certificates/small/2.jpg" alt="продажа норвежской" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/3.jpg">
                                                                <img className="img-fluid" title="котенок в подарок на новый год норвежский котенок в подарок котенок в подарок"
                                                                    src="images/Certificates/small/3.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingCertificates2">
                                        <h5 className="text-center mb-0">
                                            <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                                data-target="#collapseCertificates2" aria-expanded="true" aria-controls="headingCertificates2">
                                                Дипломы и сертификаты.
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseCertificates2" className="collapse" aria-labelledby="headingCertificates2"
                                        data-parent="#accordionCatsCertificates">
                                        <div className="card-body">

                                            <div className="container border border-primary">

                                                <div className="container border border-primary">

                                                    <div className="owl-carousel">
                                                        <div className="item">
                                                            <img src="images/Certificates/large/4.jpg" title="купить котенка в москве купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                alt="норвежский котенок" />
                                                        </div>
                                                        <div className="item">
                                                            <img src="images/Certificates/large/5.jpg" title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                                alt="котята норвежской" />
                                                        </div>
                                                        <div className="item">
                                                            <img src="images/Certificates/large/6.jpg" title="норвежская лесная кошка описание и характер норвежская лесная кошка особенности характера"
                                                                alt="купить котенка в москве" />
                                                        </div>
                                                        <div className="item">
                                                            <img src="images/Certificates/large/7.jpg" title="купить котенка норвежской лесной котята норвежской лесной кошки купить"
                                                                alt="путешествие в икстлан" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="container border border-primary">

                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/4.jpg">
                                                                <img className="img-fluid" title="норвежская лесная кошка питомник москва норвежская лесная кошка купить в москве питомники"
                                                                    src="images/Certificates/large/4.jpg" alt="норвежские лесные красавицы" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/5.jpg">
                                                                <img className="img-fluid" title="котята норвежской лесной кошки купить в москве котята норвежской"
                                                                    src="images/Certificates/large/5.jpg" alt="котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/6.jpg">
                                                                <img className="img-fluid" title="фото котят норвежской кошки продажа норвежской питомник норвежской"
                                                                    src="images/Certificates/large/6.jpg" alt="норвежский котенок в подарок" />
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-6 thumb">
                                                            <a data-fancybox="certificates1" href="images/Certificates/large/7.jpg">
                                                                <img className="img-fluid" title="продажа норвежских лесных котят порода норвежская лесная кошка"
                                                                    src="images/Certificates/large/7.jpg" alt="норвежские лесные котята" />
                                                            </a>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>

                    </div>

                </section>

                <section className="row m-1">

                    <div id="newsAreaBottom" className="col">

                        <h3 className="text-center">Новости</h3>

                        <div id="accordionBottom">

                            <article className="card">
                                <header className="card-header" id="headingBottom1">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottom1" aria-expanded="false" aria-controls="collapseBottom1">
                                            Ноябрь в окно - пополнение полным ходом в дверь
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapseBottom1" className="collapse" aria-labelledby="headingBottom1" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Роддом. Вот роддом и всё тут. Писки, вопли, бессонные ночи. <mark>Норвежские
                                            лесные котята</mark> причиняют столько же радости и беспокойства при
                                        рождении, сколько и обычные, но есть и отличия.</p>
                                        <p>Прайд, оказывается - это не только о львах. Неотвратимая и основная черта
                                            характера кошки-матери у этой породы - это фундаментальный материнский
                                            инстинкт,
                                        причём по отношению ко всем котятам, не только своим.</p>
                                        <p> Обе кошки стали матерями
                                            с разницей в один день, поэтому всё делают вместе - кормят, умывают, отдыхают.
                                            Так сказать, в общее лукошко все рожали кошки. Ладно. Хватит шуток.
                                        Всем, кто хочет <mark>купить котенка в Москве</mark> (в общем-то и за её
                                        пределами никто вам не мешает), добро пожаловать в <a href="kitty.html" role="button">соответствующий
                                            раздел.</a></p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="headingBottom2">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottom2" aria-expanded="false" aria-controls="collapseBottom2">
                                            Воронеж, 27-28 октября 2018. Выставка "Осенние смотрины" от КЛК Люкс.
                                            (Тыквенные мысли часть
                                            2)
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapseBottom2" className="collapse" aria-labelledby="headingBottom2" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Дубль второй. Серое небо рушится вбок. Осень в разгаре без компромиссов и
                                            пощады. Всё те же старые необходимости, приготовления. Снова сидеть два дня в
                                        тесной палатке. Само собой, знаменитый характер <mark>норвежской лесной</mark>
                                            породы и врожденная деликатность не дает мне возможности громогласно
                                            возмутиться.
                                            Проживая вторую часть этого странного представления, начинаешь все чаще об этом
                                            вспоминать. Ну а после. Что после?
                                        Наконец, домой. Увижу семью.</p>
                                        <p>В этот раз открыт титул <mark>Большого международного чемпиона.</mark> Меня
                                        теперь ждут иные земли. Ну что ж, посмотрим, чем они смогут меня удивить.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="headingBottom3">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottom3" aria-expanded="false" aria-controls="collapseBottom3">
                                            Воронеж, 5-7 октября 2018. Выставка "Звезда Черноземья" (Тыквенные мысли часть
                                            1)
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapseBottom3" className="collapse" aria-labelledby="headingBottom3" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Незнакомый город пульсирует красками неожиданной осени. Её холодное дыхание
                                            заползает под кожу. Нам опять в дорогу. Опять. Сколько их было, сколько ещё
                                            будет. Нескончаемая вереница людей с всех сторон. Шумы, запахи, всполохи огня.
                                            Всё это так знакомо, но, с другой стороны, привыкнуть невозможно. С момента
                                            моего последнего выхода в свет прошла уже пара месяцев, и вот снова я на чужой,
                                            чёрной как смоль земле. Это Воронеж, столица Черноземья. Здесь мы задержимся на
                                        целый месяц. Добро пожаловать мне. Увидимся после.</p>
                                        <p>Закончили. Теперь могу с уверенностью сказать, что о таких как я здесь почти не
                                            слышали. Взял первое в своей жизни первое место. Первое "первое". Мда. Надо,
                                        видимо, больше читать. Помимо этого, теперь я <mark>Международный чемпион</mark>.
                                            Еще
                                        чуть-чуть и задеру свой прямой <mark>норвежский лесной нос.</mark></p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="headingBottom4">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottom4" aria-expanded="false" aria-controls="collapseBottom4">
                                            Москва. 16-17 июня 2018 – Первая выставка!
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapseBottom4" className="collapse" aria-labelledby="headingBottom4" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Ну что, барышни, с первой выставкой вас, однако! Много нервов потрачено, много
                                        времени и сил, но оно того стоило.</p>
                                        <p><mark>Питомники норвежских лесных кошек в Москве</mark> крайне немногочислены,
                                            но они есть и активно снабжают достойными конкурентами. Однако и мы не лыком,
                                            как говорится, шиты. Получены первые оценки и номинации, получен бесценный
                                            опыт, который будет использован в дальнейшем. Что тут еще скажешь? Дерзайте,
                                        барышни! В добрый путь.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="headingBottom5">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottom5" aria-expanded="false" aria-controls="collapseBottom5">
                                            Москва. 9 января 2018 г. – Прибытие Пампкина
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapseBottom5" className="collapse" aria-labelledby="headingBottom5" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Мохнатая чешская тыква или разбавим скромную женскую компанию нескромным мужским
                                            присутствием. В общем, пятиминутка контролируемой глупости срочно в студию /
                                        номер ну и т.д.</p>
                                        <p>Кот крепок душой, стоек психикой, доверчив и любит путешествовать самолетами и
                                        другими видами транспорта. Выдающийся экземпляр <mark>норвежской лесной</mark>
                                            породы.
                                            Ласковый, с вдумчивым и глубоким голосом, апельсиновыми глазами и хвостом
                                            размером с ещё одного кота. Воспитанник замечательной чешской семьи приехал
                                        покорять Россию и, надо сказать, пока все идёт по плану.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="headingBottom6">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                                            data-target="#collapseBottom6" aria-expanded="false" aria-controls="collapseBottom6">
                                            20 декабря 2017 – Регистрация питомника. Наш официальный день рождения.
                                    </button>
                                    </h5>
                                </header>
                                <div id="collapseBottom6" className="collapse" aria-labelledby="headingBottom6" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Немного прозы. Перефразировав одну из известных русских поговорок, можно
                                        сказать, что без бумажки ты букашка, а с бумажкой <mark>норвежская лесная
                                            кошка.</mark></p>. <p>С миром повседневности нужно уметь взаимодействовать.
                                    Регистрацию
                                    в системе WCF (World Cat Federation, Германия) и полученные сертификаты можно
                                    считать первой ступенькой на это выщербленной лестнице. Вот так и происходит.
                                        Время неумолимо. Вчера ты маленький <mark>норвежский котенок</mark>, а сегодня
                                        дипломировнный экземляр породы.</p>
                                    </div>
                                </div>
                            </article>

                            <article className="card">
                                <header className="card-header" id="headingBottom7">
                                    <h5 className="mb-0 text-center">
                                        <button className="btn btn-link btn-wrap-normal" data-toggle="collapse" data-target="#collapseBottom7"
                                            aria-expanded="true" aria-controls="collapseBottom7">
                                            1 октября 2017 г. – Прибытие кошек. Наш неофициальный день рождения.
                                    </button>
                                    </h5>
                                </header>

                                <div id="collapseBottom7" className="collapse" aria-labelledby="headingBottom7" data-parent="#accordionBottom">
                                    <div className="card-body">
                                        <p>Итак, свершилось. Две <mark>норвежские лесные</mark> красавицы обрели новый дом.
                                        Начало одного - есть всегда окончание другого.</p>
                                        <p>Шум осеннего дождя и шуршание опадающих листьев ознаменовал
                                            переход от котят к кошкам. Но не стоит спешить с выводами. Трансорфация
                                        протекает плавно - без резких движений и перекосов. Тем не менее <mark>путешествие
                                                в
                                            Икстлан</mark> можно считать начатым. Это путешествие знаменито
                                        недостижимостью того
                                        положения вещей, которое было в момент его начала - в момент зарождения нового
                                        длинного пути. Но, как известно, прелесть ни в факте достижения конечной цели,
                                        а самом процессе.</p>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default MainContent