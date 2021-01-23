import React, {useState} from "react";
import Footer from "./Footer";
import {Form} from "react-bootstrap";
import firebase from "firebase";

// Nie działa przez CORS :(

export default function DoctorFinder() {
    const [latitude, SetLatitude] = useState("54.33573817998878");
    const [longitude, SetLongitude] = useState("18.198659771185657");
    const [list, SetList] = useState();

    const handleSearch = async (e) => {
        e.preventDefault();
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
        const location = `location=${latitude},${longitude}`;
        const radius = '&radius=2000';
        const type = '&keyword=restaurant';
        const key = '&key=AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw';
        const SearchUrl = proxy + url + location + radius + type + key;
        await myRespone(SearchUrl);
        console.log(list);
    }

    function myRespone(SearchUrl) {
        fetch(SearchUrl).then(response => response.json()).then(result => {
            SetList({list: result})
        })
    }

    return (
        <div>
            <br/>
            <br/>
            <Form onSubmit={handleSearch}>
                <button type="submit" className="btn-primary">Szukaj Lekarzy</button>
            </Form>
            <Footer/>
        </div>
    )

}