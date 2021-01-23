import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import photo from "./img/photo.png"
import './style.css'


export default function Home() {
    return (
        <>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Sztuczna Inteligencja!</h1>
                <img id="photo" src={photo} alt=""/>
                <p>Wypróbuj naszej zaawansowanej sztucznej inteligencji do automatycznej diagnozy twojego zdjęcia
                    rentgenowskiego.<br/><br/> POGCHAMP</p>
                <p><a className="btn btn-primary btn-lg"  role="button">Wypróbuj!</a></p>
            </div>
        </div>
        <Body/>
        <NaviBar/>
        <Footer/>
        </>
    )
}