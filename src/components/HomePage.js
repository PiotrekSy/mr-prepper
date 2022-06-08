import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>HOME PAGE</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/Instructions'>Instructions</Link>
                <Link to='/backpack'>Backpack</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default HomePage