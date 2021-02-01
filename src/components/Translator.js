import React, {useState} from "react"
import './css/style.css'


export default function About(props) {

    var api = "AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw";


    const [translated, setTranslated] = useState("");

    var googleTranslate = require('google-translate')(api);

    var texts = props.textToTranslate;
    var language = props.lan;
    googleTranslate.translate(texts, language, function (err, translation) {

        getInfo(translation.translatedText);
    });


    async function getInfo(pom) {
        await setTranslated(pom);
    }


    return (
        <>
            {translated}
        </>
    )

}