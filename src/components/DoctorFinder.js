import React, {useRef, useState} from "react";
import Footer from "./Footer";
import {Form} from "react-bootstrap";
import NaviBar from "./NaviBar";
import DoctorFinderTab from "./DoctorFinderTab";

export default function DoctorFinder() {
    const [searching, SetSearching] = useState(false);
    const [list, SetList] = useState();
    const selectRef = useRef();
    const radiusRef = useRef();

    function getLocation() {
        return new Promise(resolve =>
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            }));
    }

    async function handleSearch(event) {
        event.preventDefault();
        SetList(undefined);
        SetSearching(true);
        let locations = await getLocation();
        console.log(locations);
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
        const location = `location=${locations.latitude},${locations.longitude}`;
        const radius = `&radius=${radiusRef.current.value}`;
        const type = `&keyword=${selectRef.current.value}`;
        const key = '&key=AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw';
        const SearchUrl = proxy + url + location + radius + type + key;
        let x = await myRespone(SearchUrl);
        {
            console.log(x)
        }
        ;
        SetList(x);
    }

    async function myRespone(SearchUrl) {
        try {
            let res = await fetch(SearchUrl);
            return res.json();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <NaviBar/>
            <div className="jumbotron mt-5">
                <div className="container">
                    <div className="justify-content-center d-flex ">
                        <Form onSubmit={handleSearch} className="mt-5">
                            <Form.Group>
                                <Form.Label><h1 className="font-weight-bolder">Czego szukasz?</h1></Form.Label>
                                <Form.Control as="select" ref={selectRef}>
                                    <option value="doctor">Lekarz</option>
                                    <option value="hospital">Szpital</option>
                                    <option value="health">Zdrowie</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>W odległości: (m) </Form.Label>
                                <Form.Control type="text" ref={radiusRef} required/>
                            </Form.Group>
                            <button type="submit" className="btn-primary mt-2 form-control font-weight-bolder">Szukaj</button>
                        </Form>
                    </div>
                </div>
            </div>

            {searching ? list === undefined ? <div className="loader mt-5"/> : <DoctorFinderTab data={list}/> : null}
            <Footer/>
        </div>
    )
}
