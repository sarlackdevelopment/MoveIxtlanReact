import React from 'react'
import 'bootstrap'
import OwlCarousel from 'react-owl-carousel';
import Gallery from 'react-grid-gallery';

function Documents() {
    const responsiveOWL = {
        0: { items: 1 }
    };

    const IMAGES =
        [{
            src: "images/Certificates/small/1.jpg",
            thumbnail: "images/Certificates/small/1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174
        },
        {
            src: "images/Certificates/small/2.jpg",
            thumbnail: "images/Certificates/small/2.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "images/Certificates/small/3.jpg",
            thumbnail: "images/Certificates/small/3.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }]

    return (

        <div>

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
                                <div className="item"><img src="images/Certificates/large/1.jpg" alt='SEOSEOSEO'/></div>
                                <div className="item"><img src="images/Certificates/large/2.jpg" /></div>
                                <div className="item"><img src="images/Certificates/large/3.jpg" /></div>
                            </OwlCarousel>

                            <Gallery images={IMAGES} backdropClosesModal={true} showLightboxThumbnails = {true} />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Documents