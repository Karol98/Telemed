import React from "react";


export default function NaviBar() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">TeleMed</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Główna strona <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nasi Lekarze</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Kontakt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">O nas</a>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn-primary">Zaloguj</button>
                </form>
            </div>
        </nav>
    )
}