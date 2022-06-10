import React from "react";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";

const NavBar = () => {

    const logout = async (e) => {
        e.preventDefault()
        await signOut(auth)
    }

    return (
        <div>
            <div>
                <Link to='/landingPage'>Home</Link>
            </div>
            <div>
                <Link to='/Instructions'>Instructions</Link>
            </div>
            <div>
                <Link to='/backpack'>Backpack</Link>
            </div>
            <div>
                <Link to="/" onClick={logout}>Quit</Link>
            </div>
        </div>
    )
}

export default NavBar
