import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/Instructions'>Instructions</Link>
                <Link to='/backpack'>Backpack</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar
