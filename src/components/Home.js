import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";

export default function Home() {

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
        </head>
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Sztuczna Inteligencja!</h1>
                <p>Wypróbuj naszej zaawansowanej sztucznej inteligencji do automatycznej diagnozy twojego zdjęcia
                    rentgenowskiego.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Wypróbuj!</a></p>
            </div>
        </div>
        <Body/>
        <NaviBar/>
        <Footer/>
        </html>
    )
}
