import React from "react"
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Backpack from "./Backpack";
import NavBar from "./Navbar"
import HomePage from "./HomePage";
import Instructions from "./Instructions";
import Contact from "./Contact";

const MrPrepper = () => {

    const returnToStart = () => {
        console.log("wracanie do startu")
    }

    return (
        <Router>
            <div>
                <h1 onClick={returnToStart}>Mr.Prepper</h1>
                <NavBar/>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="instructions" element={<Instructions/>}/>
                        <Route path="backpack" element={<Backpack/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default MrPrepper