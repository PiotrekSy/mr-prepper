import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Backpack from "./Backpack";
import AuthPage from "./Auth Page";
import Instructions from "./Instructions";
import Contact from "./Contact";
import LoadingScreen from "./LoadingScreen"
import Login from "./Login"
import Dashboard from "./Dashboard"

const MrPrepper = () => {

    const [isLoading, setIsLoading] = useState(true)
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter <= 100) {
            setTimeout(() => {
                setCounter(prevState => prevState + 1);
            }, 10);
            if (counter === 100) {
                return setIsLoading(false);
            }
        }
    }, [counter]);


    if (!isLoading) {
        return (
            <Router>
                <div>
                    <div>
                        <Routes>
                            <Route exact path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/" element={<AuthPage/>}/>
                            <Route path="instructions" element={<Instructions/>}/>
                            <Route path="backpack" element={<Backpack/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    } else {
        return <LoadingScreen counter={counter}/>
    }
}

export default MrPrepper