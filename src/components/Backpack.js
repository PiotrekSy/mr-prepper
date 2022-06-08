import React, {useEffect, useState} from "react";
import {onSnapshot, collection} from "@firebase/firestore"
import db from './firebase';

const Backpack = () => {

    const [items, setItems] = useState([{name: "LOADING....." , id: "loader" }]);

    useEffect(() => {
            onSnapshot(collection(db, "backpack"), (snapshot) => {
                setItems(snapshot.docs.map(doc => doc.data()));
            });
        }, []
    )

    return (
        <form>
            <input type="text"/>
            <button>Add me! me!</button>
            <br/>
            <div>{items.map(element => <li key={element.id}><br/>{element.name} <p>{element.description}</p></li>)}</div>
        </form>
    )
}

export default Backpack