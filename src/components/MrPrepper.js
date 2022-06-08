import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Backpack from "./Backpack";
import NavBar from "./Navbar"
import HomePage from "./HomePage";


const MrPrepper = () => {

    return (
        <Router>
            <div>
                <h1> Mr.Prepper </h1>
                <NavBar/>
                <div>
                    <Routes>
                        <Route path="/" component={HomePage}/>
                        <Route path="/instructions" component={Backpack}/>
                        <Route path="/shop"/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}


export default MrPrepper