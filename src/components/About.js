import React,{useState} from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import photo from "./img/logo_header.png"
import './css/style.css'
import Translator from './Translator'


export default function About() {

    const [translate,SetTranslate] = useState(false);    



    return (
        <>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
            <div className="jumbotron">
                <div className="container">
                    <img id="logo_pjatk" src={photo} alt="logo"></img><br></br>
                    <button className="btn btn-secondary" onClick={() => SetTranslate(!translate)}>
                        Przetłumacz
                        </button>
                    <div>Telemed jest projektem zaliczeniowym z przedmiot ARC</div>
                  
                    {translate ?<Translator textToTranslate="Telemed jest projektem zaliczeniowym z przedmiot ARC"/> :null}  
                   



                </div>
            </div>
            <Body/>
            <NaviBar/>
              
            <Footer/>
        </>
    )
}