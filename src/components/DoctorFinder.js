import React, {useState} from "react";
import Footer from "./Footer";
import {Form} from "react-bootstrap";
import NaviBar from "./NaviBar";

export default function DoctorFinder() {
    const [hasLocationPermission, SetLocationPermission] = useState(false);
    const [Latitude, SetLatitude] = useState();
    const [Longitude, SetLongitude] = useState();
    const [list, SetList] = useState();


    function getLocation() {
        return new Promise(resolve =>
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            }));
    }

    async function handleSearch()  {
        let locations = await getLocation();
        console.log(locations);
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
        const location = `location=${locations.latitude},${locations.longitude}`;
        const radius = '&radius=2000';
        const type = '&keyword=doctor';
        const key = '&key=AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw';
        const SearchUrl = proxy + url + location + radius + type + key;
        let x = await myRespone(SearchUrl);
        console.log(x.results);
    }(handleSearch())

    async function myRespone(SearchUrl) {
        try {
            console.log(SearchUrl);
            let res = await fetch(SearchUrl);
            return res.json();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <NaviBar/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )

}