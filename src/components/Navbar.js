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
        <div className="navBar">
            <div className="navButton">
                <Link to='/landingPage' className="navButtonBack">
                    <div className='iconBack'/>
                </Link>
            </div>
            <div className="navButton">
                <Link to='/Instructions' className="navButtonBack">
                    <div className='iconInstructions'/>
                </Link>
            </div>
            <div className="navButton">
                <Link to='/backpack' className="navButtonBack">
                    <div className='iconBackpack'/>
                </Link>
            </div>
            <div className="navButton">
                <Link to='/mapbox' className="navButtonBack">
                    <div className='iconMap'/>
                </Link>
            </div>
            <div className="navButton">
                <Link to="/" onClick={logout} className="navButtonBack">
                    <div className='iconLogout'/>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
