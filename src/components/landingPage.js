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
        <>
            <h2 >Mr.Prepper</h2>
            <ul>
                <li className="linkButton">
                    <Link to='/Instructions'>Instructions</Link>
                </li>
                <li className="linkButton">
                    <Link to='/backpack'>Backpack</Link>
                </li >
            </ul>
            <div className="linkButton">
                <Link to ="/" onTouchStart={logout}>quit</Link>
            </div>

        </>
    )
}

export default LandingPage