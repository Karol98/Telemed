import React from "react";
import NaviBar from "./NaviBar";
import './css/style.css'


export default function DoctorFinderTab(data) {
    return (
        <>
            <NaviBar/> <br/><br/>
            <div className="container">
                <h2 className="text-center justify-content-center mt-5 border bg-light p-4 border-success rounded">Znaleziono w okolicy: </h2>
                <div className="row mt-5 justify-content-md-center">
                    {data.data.results.map((data, index) => {
                            return (
                                <div className="col col-5 border bg-light p-2 border-primary rounded m-2">
                                    <img id="logo" src={data.icon} alt="icon"/>
                                    <p>Nazwa: {data.name} <br/>
                                        Adres: {data.vicinity} <br/>
                                        Ocena użytkowników: {data.rating}
                                    <button id="showmap" className="btn-success  float-right">Pokaż na mapie</button>
                                    </p>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
