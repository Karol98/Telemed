import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import photo from "./img/logo_header.png"
import './css/style.css'



export default function Contact() {
    return (
        <>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
            <div className="jumbotron">
                <div className="container">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Index</th>
                            <th scope="col">Imie</th>
                            <th scope="col">Nazwisko</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>s18866</td>
                            <td>Mario</td>
                            <td>Gliwa</td>
                            <td>s18866@pjwstk.edu.pl</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>s18497</td>
                            <td>Karol</td>
                            <td>Skwierawski</td>
                            <td>s18497@pjwstk.edu.pl</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>s19375</td>
                            <td>Filip</td>
                            <td>Werra</td>
                            <td>s19375@pjwstk.edu.pl</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <Body/>
            <NaviBar/>
            <Footer/>
        </>
    )
}