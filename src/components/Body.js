import React, {useEffect, useState} from 'react';
import Chat from './Chat'
import {Link} from "react-router-dom";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import firebase from 'firebase/app';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Body() {
    const auth = firebase.auth();
    const [buttonChat, SetbuttonChat] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <div className="container container_body mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="font-weight-bold">Chat</h2>
                    <p>Wejdz na nasz chat publiczny, gdzie możesz w czasie rzeczywistym oraz anonimowo
                        dyskutować z innymi użytkownikami</p>
                    {user ?
                        <button className="btn btn-secondary" onClick={() => SetbuttonChat(!buttonChat)}>
                            Chatuj!
                        </button> :
                        <Link to="/Login">
                            <button className="btn btn-secondary">
                                Zaloguj
                            </button>
                        </Link>}
                    {buttonChat ? <Chat/> : null}
                </div>
                <div className="col-md-4">
                    <h2 className="font-weight-bold">Lekarze w okolicy</h2>
                    <p>Znajdz lekarzy w swojej okolicy przy użyciu map google. </p>
                    <Link to="/find"><p><a className="btn btn-secondary" role="button">Szukaj! &raquo;</a></p></Link>
                </div>
            </div>
        </div>
    )
}
