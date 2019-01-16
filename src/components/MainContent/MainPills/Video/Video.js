import React from 'react'
import 'bootstrap'

function Video() {
    return (

        <div style={{ 'backgroundColor': 'rgba(248, 249, 250, 0.5)' }} className="container-fluid border border-primary">
            <h3 className="text-center">Видео</h3>
            <div className="container-fluid embed-responsive embed-responsive-16by9 m-1">
                <iframe title="котята норвежской норвежский котенок норвежские лесные котята" className="embed-responsive-item" src="https://www.youtube.com/embed/7ATrqGquF5E"
                    allowFullScreen name="slider"></iframe>
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
    )
}

export default Video