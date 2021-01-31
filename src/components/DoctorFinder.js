import React, {useRef, useState} from "react";
import Footer from "./Footer";
import {Form, Card} from "react-bootstrap";
import NaviBar from "./NaviBar";
import {map} from "react-bootstrap/ElementChildren";
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

    if (list === undefined) {
        return (
            <div>
                <NaviBar/>
                <br/>
                <br/>
                <br/>
                <div className="mt-5 justify-content-center d-flex ">
                    <Form onSubmit={handleSearch} className="mt-5">
                        <Form.Group>
                            <Form.Label><h2>Czego szukasz?</h2></Form.Label>
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
                        <button type="submit" className="btn-primary m-5 w-50">Szukaj</button>
                    </Form>
                </div>
                <Footer/>
            </div>
        )
    } else {
        return (
            <DoctorFinderTab data={list}/>
        )
    }
}
