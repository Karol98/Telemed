import React from "react";
import photo from "./img/photo.png";
import Footer from "./Footer";
import NaviBar from "./NaviBar";

export default function Diagnose() {
    return (
        <>
            <NaviBar/>
            <div className="jumbotron jumbotron_diagnose">
                <div className="container">
                    <h1 className="display-3">Automatyczna diagnoza</h1>
                    <p>Wyślij nam swoje zdjęcie rentgenowskie i uzyskaj wynik diagnozy<br/><br/></p>
                </div>
            </div>
            <Footer/>
        </>
    )
}