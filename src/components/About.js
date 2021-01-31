import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import photo from "./img/logo_header.png"
import './css/style.css'


export default function About() {
    return (
        <>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
            <div className="jumbotron">
                <div className="container">
                    <img id="logo_pjatk" src={photo} alt="logo"></img>
                    <div>Telemed jest projektem zaliczeniowym z przedmiot ARC</div>
                </div>
            </div>
            <Body/>
            <NaviBar/>
            <Footer/>
        </>
    )
}