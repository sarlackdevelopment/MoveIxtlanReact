import React from 'react'
import About from './About/About'
import AboutBreed from './AboutBreed/AboutBreed'
import Exhibitions from './Exhibitions/Exhibitions'
import Video from './Video/Video'
import FullListOfNews from './FullListOfNews/FullListOfNews'
import DocumentsAndCertificates from './DocumentsAndCertificates/DocumentsAndCertificates'
import 'bootstrap'

function MainPills() {
    return (
        <div>
            <div style={{ 'backgroundColor': 'rgba(248, 249, 250, 0.5)' }} className="container border-bottom border-left border-right border-primary">

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
                    <About />
                </section>

                <section className="tab-pane fade border-bottom border-primary" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">
                    <AboutBreed />
                </section>

                <section className="tab-pane fade" id="v-pills-exhibitions" role="tabpanel" aria-labelledby="v-pills-exhibitions-tab">
                    <Exhibitions />
                </section>

                <section className="tab-pane fade" id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab">
                    <Video />
                </section>

                <section className="tab-pane fade" id="v-pills-news" role="tabpanel" aria-labelledby="v-pills-news-tab">        
                    <FullListOfNews />
                </section>

                <section className="tab-pane fade" id="v-pills-autors" role="tabpanel" aria-labelledby="v-pills-autors-tab">
                    <DocumentsAndCertificates />
                </section>

            </div>
        </div>
    )
}

export default MainPills