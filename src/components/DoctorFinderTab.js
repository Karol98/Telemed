import React, {useState} from "react";
import NaviBar from "./NaviBar";
import './css/style.css'


export default function DoctorFinderTab(data) {

    const [placeId, SetPlaceId] = useState();


    return (
        <>
            <NaviBar/> <br/><br/>

            (
            <div className="container">
                <div className="map justify-content-center d-flex">
                    {placeId !== undefined ?
                        <iframe
                            width="600"
                            height="450"
                            frameBorder="0" style={{border: "1px solid black"}}
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw
                &q=place_id:${placeId}`} allowFullScreen>
                        </iframe> : null}
                </div>
                <h2 className="text-center justify-content-center mt-5 border bg-light p-4 border-success rounded">Znaleziono
                    w okolicy: </h2>
                <div className="found_places row mt-5 justify-content-md-center">
                    {data.data.results.map((data, index) => {
                            return (
                                <div className="col col-5 border bg-light p-2 border-primary rounded m-2">
                                    <img id="logo" src={data.icon} alt="icon"/>
                                    <p>Nazwa: {data.name} <br/>
                                        Adres: {data.vicinity} <br/>
                                        Ocena użytkowników: {data.rating}
                                        <button id="showmap" className="btn-success  float-right"
                                                onClick={() => SetPlaceId(data.place_id)}>Pokaż na mapie
                                        </button>
                                    </p>
                                    <img
                                        src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${data.geometry.location.lat},${data.geometry.location.lng}&fov=80&heading=70&pitch=0&key=AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw`}
                                        alt="streetView"/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
