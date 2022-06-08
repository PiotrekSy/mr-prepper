import React, {useEffect, useState} from "react";
import {onSnapshot, collection} from "@firebase/firestore"
import db from './firebase';

const Backpack = () => {

    const [items, setItems] = useState([]);


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
            <div>{items.map(element => <li key ={element.id}>{element.Name} {element.Description}</li>)}</div>
        </form>
    )
}

export default Backpack