import React, {useState} from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import photo from "./img/logo_header.png"
import './css/style.css'
import Translator from './Translator'

export default function About() {

    const [translate, SetTranslate] = useState(false);

    const texts = "Telemed jest projektem zaliczeniowym z przedmiotu ARC.Napisany jest za pomocą reacta, wykorzystujący firebase,Cloud Translation API,Street View static APi,google maps embed Api,Googla places Api. Strona jest skierowana dla ludzi potrzebujących porad medycznych,w łatwy sposób mogą znaleźć szpital w swojej kolicy, mają również możliwość pisać na czacie na żywo"

    return (
        <>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
            <div className="jumbotron mt-5">
                <div className="container">
                    <img id="logo_pjatk" src={photo} alt="logo"/><br/>

                    <button className="btn btn-secondary" onClick={() => SetTranslate(!translate)}>
                        Translate
                    </button>
                    <select className="btn btn-secondary" id="languages">
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="ru">русский</option>
                        <option value="it">Italiana</option>
                        <option value="ar">Arabic</option>
                        <option value="bg">Bulgarian</option>
                        <option value="zh">Chinese</option>
                        <option value="el">Greek</option>
                        <option value="fr">French</option>
                    </select>

                    <div>{texts}</div>
                    <br/>

                    {translate ?
                        <Translator lan={document.getElementById("languages").value} textToTranslate={texts}/> : null}
                </div>
            </div>
            <Body/>
            <NaviBar/>
            <Footer/>
        </>
    )
}