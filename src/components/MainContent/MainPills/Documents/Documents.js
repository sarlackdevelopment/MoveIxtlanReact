import React from 'react'
import 'bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Documents() {
    const responsiveOWL = {
        0: {items: 1}
    };
    return (

        <div id="accordionCatsCertificates">

            <h4 className="text-center">Документы</h4>
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

                            <OwlCarousel className="owl-theme" loop={true} margin={10} nav={false} autoplay={true} smartSpeed={3000} autoplayTimeout={5000} responsive={responsiveOWL}>
                                <div className="item"><img src="images/Certificates/large/1.jpg" /></div>
                                <div className="item"><img src="images/Certificates/large/2.jpg" /></div>
                                <div className="item"><img src="images/Certificates/large/3.jpg" /></div>
                            </OwlCarousel>

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
    )
}

export default Documents