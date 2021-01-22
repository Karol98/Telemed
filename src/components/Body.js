import React from "react";


export default function Body() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="font-weight-bold">Chat</h2>
                    <p>Wejdz na nasz chat publiczny, gdzie możesz w czasie rzeczywistym oraz anonimowo
                        dyskutować z innymi użytkownikami</p>
                    <p><a className="btn btn-secondary"  role="button">Chatuj! &raquo;</a></p>
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