import React from "react";
import NaviBar from "./NaviBar";
import Data from "./data/data.json"

export default function Doctors() {

    return (
        <>
            <NaviBar/>
            <div className=" jumbotron_doc mt-5">
                <div className="container">
                    <h1 className="display-3 mt-5">Nasi Lekarze</h1>
                    <p>Zaufaj naszym specjalistom, i wybierz jednego z dostępnej listy<br/><br/></p>
                </div>
            </div>
            <div className="found_places row mt-5 justify-content-md-center">
                {Data.map((data) => {
                        return (
                            <div className="col col-3 doctors border bg-light p-2 border-primary rounded m-2">
                                <p> Imię: {data.name} <br/>
                                    Specjalizacja: {data.type} <br/>
                                    Szkoła: {data.school} <br/>
                                    Ocena: {data.rate}  <br/>
                                    Kontakt: {data.contact}
                                </p>
                                <img src={data.photo} alt="streetView"/>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )

}