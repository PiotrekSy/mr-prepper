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

    const showDescription = (e) => {
        e.preventDefault();
        if (e.currentTarget.parentElement.firstElementChild.children[1].className === "hidden") {
            e.currentTarget.parentElement.firstElementChild.children[1].classList.remove("hidden");
            e.currentTarget.parentElement.firstElementChild.children[1].classList.add("shown");
            e.currentTarget.parentElement.parentElement.style.height = "auto";
            e.currentTarget.parentElement.children[0].style.paddingTop = "10px"
        } else if (e.currentTarget.parentElement.firstElementChild.children[1].className === "shown") {
            e.currentTarget.parentElement.firstElementChild.children[1].classList.remove("shown");
            e.currentTarget.parentElement.firstElementChild.children[1].classList.add("hidden");
            e.currentTarget.parentElement.parentElement.style.height = "8vh";
            e.currentTarget.parentElement.children[0].style.paddingTop = "0"
        }
    }

    return (
        <div className="list">
            {items.map(element =>
                <li key={element.id} className="wholeBpkElement listElement">
                    <div className="elementContent">
                        <div id={element.name}>
                            <p onClick={(e) =>
                                e.currentTarget.classList.toggle('linedTrough')}
                               className="elementTitle">{element.name}</p>
                            <p className="hidden">{element.description}</p>
                        </div>
                        <button onClick={showDescription} type="button" className="infoButton">
                            <div className="iconDescription"/>
                        </button>
                    </div>
                </li>
            )}
        </div>
    )
}

// return (
// <div className="list">
// {items.map(element =>
//                 <li key={element.id} className="wholeBpkElement listElement" style={{height: elementHeight}}>
//                     <div className="elementContent">
//                         <div onClick={check}>
//                             <p style={{textDecoration: checked ? "line-through" : "none"}}>{element.name}</p>
//                             <p style={{textDecoration: checked ? "line-through" : "none"}}
//                                className={elementHeight !== "auto" ? "hidden" : "shown"}>{element.description}</p>
//                         </div>
//                         {/*<button onClick={check} name={element.name} type="button" className="infoButton">*/}
//                         {/*    <div className="iconDescription"/>*/}
//                         {/*</button>*/}
//                         <button onClick={showDescription} title={element.name} type="button" className="infoButton">
//                             <div className="iconDescription"/>
//                         </button>
//                     </div>
//                 </li>
//             )}
//         </div>
//     )
// }

export default BackpackElement