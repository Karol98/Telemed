import React from "react";
import './style.css'
export default function Main() {
    return (
        <div>
            <head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <title>TeleMed</title>
                <meta name="description" content="Strona Telemed do konsultacji z lekarzem"/>
                <link rel="stylesheet" href="style.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <body>
            <div id="menu">
                <ul>
                    <li><a href="index.html"><i className="fa fa-home"></i> Strona Główna</a></li>
                    <li><a href="news.html"><i className="fa fa-newspaper-o"></i> Wiadomości</a></li>
                    <li><a href="contact.html"><i className="fa fa-phone"></i> Kontakt</a></li>
                    <li><a href="chat.html"><i className="fa fa-comment"></i> Chat</a></li>
                    <li className="account"><a><i className="fa fa-user-circle"></i> Konto</a>
                        <div className="dropmenu">
                            <ul>
                                <li><a href="logowanie.html">Logowanie</a></li>
                                <li><a href="rejestracja.html">Rejestracja</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <h1>STRONA GŁÓWNA</h1>


            </body>
        </div>
    )
}