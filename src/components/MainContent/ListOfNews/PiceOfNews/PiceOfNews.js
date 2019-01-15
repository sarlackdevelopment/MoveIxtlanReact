import React from 'react'
import 'bootstrap'

function PiceOfNews(props) {
    return (
        <article className="card">
            <header className="card-header" id={props.idHeadNews}>
                <h5 className="mb-0 text-center">
                    <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                        data-target={props.dataTarget} aria-expanded="false" aria-controls={props.idBodyNews}>
                        {props.title}
                    </button>
                </h5>
            </header>
            <div id={props.idBodyNews} className="collapse" aria-labelledby={props.idHeadNews} data-parent="#accordion">
                <div className="card-body">
                    {props.text}
                </div>
            </div>
        </article>
    )
}

export default PiceOfNews