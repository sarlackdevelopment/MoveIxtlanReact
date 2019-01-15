import React from 'react'
import 'bootstrap'
import ListOfNews from './ListOfNews/ListOfNews'
import Advertising from './Advertising/Advertising'
import MainPills from './MainPills/MainPills'

function MainContent() {
    return (
        <main className="container border border-primary">
            <div className="row">

                <ListOfNews />

                <section id="mainArea" className="col-8">

                    <div className="container border-left border-right border-bottom border-primary">
                        <img title="купить норвежского котенка в москве норвежская лесная кошка особенности характера характер норвежской лесной кошки"
                            src="images/Caption.png" alt="котенок норвежской лесной" className="mx-auto d-block img-fluid" />
                        <h1 className="text-center">Питомник норвежских лесных кошек в Москве</h1>
                    </div>

                    <Advertising />

                    <MainPills />

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