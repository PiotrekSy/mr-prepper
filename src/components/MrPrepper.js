import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Backpack from "./Backpack";
import AuthPage from "./Auth Page";
import Instructions from "./Instructions";
import LandingPage from "./landingPage";
import LoadingScreen from "./LoadingScreen"


const MrPrepper = () => {

    const [isLoading, setIsLoading] = useState(true)
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter <= 100) {
            setTimeout(() => {
                setCounter(prevState => prevState + 1);
            }, 15);
            if (counter === 100) {
                return setIsLoading(false);
            }
        }
    }, [counter]);

    if (!isLoading) {
        return (
            <Router>
                <div className="wholeApp">
                    <div>
                        <Routes>
                            <Route path="/" element={<AuthPage/>}/>
                            <Route path="instructions" element={<Instructions/>}/>
                            <Route path="backpack" element={<Backpack/>}/>
                            <Route path="landingPage" element={<LandingPage/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    } else {
        return <LoadingScreen counter={counter} />
    }

}

export default MrPrepper