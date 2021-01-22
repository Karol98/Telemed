
import React, { useRef, useState } from 'react';
import Chat from './Chat'







import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

export default function Body() {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const analytics = firebase.analytics();

    const [buttonChat,SetbuttonChat] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="font-weight-bold">Chat</h2>
                    <p>Wejdz na nasz chat publiczny, gdzie możesz w czasie rzeczywistym oraz anonimowo
                        dyskutować z innymi użytkownikami</p>
                      {buttonChat ? <Chat />:null}    
                        <button className="btn btn-secondary" onClick={() => SetbuttonChat(!buttonChat)}>
                         Chatuj!
                        </button>
                </div>
                <div className="col-md-4">
                    <h2 className="font-weight-bold">Lekarze w okolicy</h2>
                    <p>Znajdz lekarzy w swojej okolicy przy użyciu map google. </p>
                    <p><a className="btn btn-secondary" role="button">Szukaj! &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2 className="font-weight-bolder">Tutaj jeszcze jakaś funkcjonalność</h2>
                    <p>Tu bedzie jeszcze jakaś dodatkowa funkcjonalność z użyciem jakichś
                        technologii od Googla </p>
                    <p><a className="btn btn-secondary" role="button">Już niedługo &raquo;</a></p>
                </div>
            </div>
            <hr/>
        </div>
    )
}
