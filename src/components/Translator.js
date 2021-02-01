
import React,{useState} from "react"
import { useAccordionToggle } from "react-bootstrap";
import './css/style.css'



export default  function About(props) {

    var api = "AIzaSyCF3BBVNrwHWDCWqjyQfqXGTZzrA9rjpnw";
  
     
    const [translated,setTranslated]= useState("");
    
    var googleTranslate = require('google-translate')(api);
  
    var texts = props.textToTranslate;
    
    googleTranslate.translate(texts, 'en',  function(err, translation) {
      
        getInfo(translation.translatedText);
    });	
    
   
    async function getInfo(pom){
       await setTranslated(pom);
    }
       
    
  
    



    return (
        <> 
        {translated}
        </>
    )

}