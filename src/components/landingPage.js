import React from "react";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";

const LandingPage = () => {

    const logout = async (e) => {
        e.preventDefault()
        await signOut(auth);
    }

    return (
        <div className="landingPage">
            <h1 className="title">Mr.Prepper</h1>
            <div className="menuOptions">
                <Link to='/Instructions' className = "landingPageLink">
                    <button type="button" className="landingButton" style={{marginTop: "5vh"}}>Instructions</button>
                </Link>
                <Link to='/backpack' className = "landingPageLink">
                    <button type="button" className="landingButton" style={{marginTop: "5vh"}}>Backpack</button>
                </Link>
                <Link to='/mapbox' className = "landingPageLink">
                    <button type="button" className="landingButton" style={{marginTop: "5vh"}}>Map</button>
                </Link>

                <Link to="/" onClick={logout}>
                    <button type="button" className="landingButton"
                            style={{marginTop: "10vh"}}>Log out!
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default LandingPage