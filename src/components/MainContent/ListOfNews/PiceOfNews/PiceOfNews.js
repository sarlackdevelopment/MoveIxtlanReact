import React from 'react'
import 'bootstrap'

function PiceOfNews(props) {
    return (
        <article className="card">
            <header className="card-header" id={props.news.idHeadNews}>
                <h5 className="mb-0 text-center">
                    <button className="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                        data-target={props.news.dataTarget} aria-expanded="false" aria-controls={props.news.idBodyNews}>
                        {props.news.title}
                    </button>
                </h5>
            </header>
            <div id={props.news.idBodyNews} className="collapse" aria-labelledby={props.news.idHeadNews} data-parent="#accordion">
                <div className="card-body">
                    {props.news.text}
                </div>
            </div>
        </article>
    )

}

export default PiceOfNews