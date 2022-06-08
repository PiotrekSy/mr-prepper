import React, {useEffect, useState} from "react";
import {onSnapshot, collection} from "@firebase/firestore"
import db from './firebase';

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
    return (
        <div>
            <div>
                {items.map(element =>
                    <li key={element.id}>
                        <br/>{element.name}
                        <p>{element.description}</p>
                    </li>)
                }
            </div>
        </div>
    )
}

export default Backpack