import React, {useEffect, useState} from "react";
import {onSnapshot, collection} from "@firebase/firestore"
import db from './firebase';
import NavBar from "./Navbar";

const Backpack = () => {
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
    const [info, setInfo] = useState("hidden")
    const [done, setDone] = useState(false)

    const showInfo = () => {

        info === "hidden" ? setInfo("shown") : setInfo("hidden")
    }


    return (
        <div className="backpack">
            <NavBar/>
            <div className="list">
                {items.map(element =>
                    <li key={element.id} className={done ? "done" : "notDone"}
                        onClick={() => done ? setDone(false) : setDone(true)}>
                        {element.name}
                        <button onClick={showInfo}>inform</button>
                        <p className={info}>{element.description}</p>
                    </li>)
                }
            </div>
        </div>
    )
}

export default Backpack