import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import photo from "./img/photo.png"
import './css/style.css'
import {Link} from "react-router-dom";


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
                        rentgenowskiego.<br/><br/></p>
                    <Link to="/diagnose"><p className="btn btn-primary btn-lg" role="button">Wypróbuj!</p></Link>
                </div>
            </div>
            <Body/>
            <NaviBar/>
            <Footer/>
        </>
    )
}