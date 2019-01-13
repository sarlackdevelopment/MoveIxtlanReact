import React from 'react'
import 'bootstrap'

function Header() {
    return (
        <header className="container border border-primary mb-1 mt-1">
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <img title="котята норвежской лесной кошки цена норвежские лесные котята" src="images/navigation.png"
                        alt="норвежские лесные котята" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Главная
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="cats_females.html">Кошки </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="cats_males.html">Коты </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="kitty.html">Котята (бронирование) </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="articles.html">Статьи </a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header