import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "@firebase/firestore";
import db from "./firebase";

const Instruction = () => {
    //stan plecaka z początkowym stanem Loading zanim pobierze dane z servera:
    const [items, setItems] = useState([{name: "LOADING.....", id: "loader"}]);
    //zaciąganie info z serwera i dodawanie ich do tablicy items
    useEffect(() => {
            onSnapshot(collection(db, "instructions"), (snapshot) => {
                setItems(snapshot.docs.map(doc => doc.data()));
            });
        }, []
    )

    const [elementHeight, setElementHeight] = useState("6vh")

    const showDescription = (e) => {
        e.preventDefault()
        elementHeight !== "auto" ? setElementHeight("auto") : setElementHeight("6vh")
    }

    return (
        <div className="list">
            {items.map(element =>
                <li key={element.id} className="wholeBpkElement listElement" style={{height: elementHeight}}>
                    <div className="elementContent" >
                        <div >
                            <p>{element.name}</p>
                            <p className={elementHeight !== "auto" ? "hidden" : "shown"}> {element.description}</p>
                        </div>
                        <button onClick={showDescription} title={element.name} type="button" className="infoButton">
                            <div className="iconDescription"/>
                        </button>
                    </div>
                </li>
            )}
        </div>
    )
}

export default Instruction