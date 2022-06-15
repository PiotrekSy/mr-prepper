import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from "./firebase";

const BackpackElement = () => {
    //stan plecaka z początkowym stanem Loading zanim pobierze dane z servera:
    const [items, setItems] = useState([{name: "LOADING.....", id: "loader"}]);
    //zaciąganie info z serwera i dodawanie ich do tablicy items
    useEffect(() => {
            onSnapshot(collection(db, "backpack"), (snapshot) => {
                setItems(snapshot.docs.map(doc => doc.data()));
            });
        }, []
    )
    // zwracam tablicę złożoną z elementów pobranych z firebase jupi :)


    //obsługa pokazywania elementu opisu jako pokazany, nie pokazany:

//TODO NIE WIEM JAK ZADZIAŁAĆ ŻEBY PRZEKREŚLENIE LEMENTU ODNOSIŁO SIĘ DO JEDNEGO ELEMENTU

    const [checked, setChecked] = useState(false)

    const check = (e) => {
        e.preventDefault()
        checked ? setChecked(false) : setChecked(true)
    }

    return (
        <div className="list">
            {items.map(element =>
                <li key={element.id} className="wholeBpkElement listElement">
                    <div className="elementContent">
                        <div onClick={check}>
                            <p style={{textDecoration: checked ? "line-through" : "none"}}>{element.name}</p>
                            {/*<p className="hidden">{element.description}</p>*/}
                        </div>
                        <button className="infoButton">
                            <div className="iconDescription"/>
                        </button>
                    </div>
                </li>
            )}
        </div>
    )
}

export default BackpackElement