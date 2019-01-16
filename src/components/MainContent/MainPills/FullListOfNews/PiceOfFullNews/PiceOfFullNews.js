import React from 'react'
import 'bootstrap'

function PiceOfFullNews(props) {
    return (
        <article className="container border-top border-left border-right border-primary">
            <header>
                <h3 className="text-center">{props.news.title}</h3>
            </header>
            {props.news.text}
        </article>
    )
}

export default PiceOfFullNews