import React from 'react'
import 'bootstrap'

function PiceOfFullNews(props) {
    return (
        <article className="container border-top border-left border-right border-primary">
            <header>
                <h3 className="text-center">{props.title}</h3>
            </header>
            {props.text}
        </article>
    )
}

export default PiceOfFullNews