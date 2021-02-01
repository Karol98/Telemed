import React from "react";
import Footer from "./Footer";
import NaviBar from "./NaviBar";

export default function Diagnose() {

    async function getDiagnose(e) {
        e.preventDefault();
        console.log("diagnoza");
    }

    return (
        <>
            <NaviBar/>
            <div className="jumbotron jumbotron_diagnose">
                <div className="container">
                    <h1 className="display-3">Automatyczna diagnoza</h1>
                    <p>Wyślij nam swoje zdjęcie rentgenowskie i uzyskaj wynik diagnozy<br/><br/></p>
                    <form onSubmit={getDiagnose} className="w-25 justify-content-center mt-3 text-center">
                        <input type="file" id="rtg" accept="image/jpeg"/>
                        <button className="btn-primary form-control mt-3">Diagnozuj!</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}