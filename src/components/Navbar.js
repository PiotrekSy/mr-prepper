import React from "react";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";

const NavBar = () => {

    const logout = async (e) => {
        e.preventDefault()
        await signOut(auth)
    }
 //TODO STYLOWANIE BUTTONÓW I ROBIENIE NAVBARA
    return (
        <div className = "navBar">
            <div>
                <Link to='/landingPage' className="navButton"> </Link>
            </div>
            <div>
                <Link to='/Instructions' className="navButton">Instructions</Link>
            </div>
            <div>
                <Link to='/backpack' className="navButton">Backpack</Link>
            </div>
            <div>
                <Link to="/" onClick={logout} className="navButton">Quit</Link>
            </div>
        </div>
    )
}

export default NavBar
