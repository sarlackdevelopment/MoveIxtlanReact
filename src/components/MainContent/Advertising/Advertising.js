import React from 'react'
import 'bootstrap'

function Advertising() {
    return (
        <section id="mainNews">
            <div style={{ 'backgroundColor': 'rgba(254, 221, 98, 1)' }} className="alert mt-1 mb-1" role="alert">
                <p className="text-justify text-center">У нас родились котята.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-sm btn-block" href="kitty.html" role="button">Забронировать</a>
                </p>
            </div>
        </section>
    )
}

export default Advertising