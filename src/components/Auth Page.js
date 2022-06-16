import React, {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth} from "./firebase"
import "firebase/auth"
import {Link} from "react-router-dom";

const AuthPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [registered, setRegistered] = useState("");
    const [isUsingForm, setIsUsingForm] = useState(false);

    const register = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            return setError('Passwords do not match!')
        }
        try {
            setError("")
            await createUserWithEmailAndPassword(auth, email, password)
            onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
            setError("Zarejestrowano!")
        } catch {
            setError("Failed to create an account!")
        }
    }
    const login = async (e) => {
        e.preventDefault()
        try {
            setError("")
            await signInWithEmailAndPassword(auth, email, password)
            onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
            setError("Zalogowano!")
        } catch {
            setError("Failed to log in!")
        }
    }
    const logoutFromReg = async (e) => {
        e.preventDefault()
        await signOut(auth)
        setRegistered("")
        setIsUsingForm(false)
        setError('')
    }

    return (<div className="wholeApp">
        <div className="wholeAuth">
            {/*logo*/}
            {registered === "" && <div className="logoSpacing">
                <h1 className="title">Mr.Prepper</h1>
                <div className="logo"/>
            </div>}
            <div className="formSpacingAuth"
                 style={{
                     marginTop: isUsingForm ? "5vh" : "50vh",
                     height: isUsingForm ? "100vh" : "40vh"
                 }}>
                {/*Ekran startowy, jeżeli żaden form nie jest aktywny*/}
                {registered === "" &&
                    <div className="mainMenu">
                        <span className="description">Dont have an account?</span>
                        <button className="menuButton" onClick={e => {
                            e.preventDefault()
                            setRegistered("notRegistered")
                            setIsUsingForm(true)
                        }}>Register!
                        </button>
                        <span className="description">Already have an account? </span>
                        <button className="menuButton" onClick={e => {
                            e.preventDefault()
                            setRegistered("registered")
                            setIsUsingForm(true)
                        }}>Log In!
                        </button>
                    </div>}
                {/*Rejestracja*/}
                {(registered === "notRegistered" && isUsingForm) &&
                    <form onSubmit={register} className="registrationForm">
                        {error !== "Zarejestrowano!" &&
                            <>
                                <div>
                                    <h1 className="pageTitle">Register Now! </h1>
                                </div>
                                <div className="registrationInputWrapper">
                                    <label className="description" htmlFor="email"></label>
                                    <input className="inputVisuals" type="email"
                                           id="email"
                                           onChange={e => setEmail(e.target.value)}
                                           aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="registrationInputWrapper">
                                    <label className="description" htmlFor="password"></label>
                                    <input className="inputVisuals" type="password"
                                           id="password"
                                           onChange={e => setPassword(e.target.value)}
                                           placeholder="Password"/>
                                </div>
                                <div className="registrationInputWrapper">
                                    <label className="description" htmlFor="passwordConfirm"></label>
                                    <input className="inputVisuals" type="password"
                                           id="passwordConfirm"
                                           onChange={e => setPasswordConfirm(e.target.value)}
                                           placeholder="Confirm Password"/>
                                </div>
                                <div className="buttonBack">
                                    <button type="submit"
                                            className="menuButton">SignUp!
                                    </button>
                                </div>
                                <div className="buttonBack">
                                    <button type="button"
                                            className="menuButton"
                                            onClick={logoutFromReg}> Back
                                    </button>
                                </div>
                            </>}
                    </form>
                }
                {error === "Zarejestrowano!" &&
                    <>
                        <div style={{
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-around",
                            height: "100vh",
                            alignSelf: "center"
                        }}>
                            {error && <p style={{fontSize: "12vw"}}>{error}</p>}
                            <span className="description"
                                  style={{fontSize: "clamp(10px, 9vw, 30px"}}>Witaj, {user.email}!</span>
                            <Link to="landingPage">
                                <button className="menuButton">Przejdź do Aplikacji!</button>
                            </Link>
                        </div>
                    </>
                }


                {/*Login*/}
                {(registered === "registered" && isUsingForm) &&
                    <form onSubmit={login} className="registrationForm">
                        {error !== "Zalogowano!" &&
                            <>
                                <div>
                                    <h1 className="pageTitle">Log in!</h1>
                                </div>
                                <div className="form-group">
                                    <label className="description" htmlFor="email"/>
                                    <input className="inputVisuals" type="email"
                                           id="email"
                                           onChange={e => setEmail(e.target.value)}
                                           aria-describedby="emailHelp" placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="description" htmlFor="password"/>
                                    <input className="inputVisuals" type="password"
                                           id="password"
                                           onChange={e => setPassword(e.target.value)}
                                           placeholder="Password"
                                    />
                                </div>
                                <div className="buttonBack">
                                    <button type="submit" className="menuButton">LogIn!</button>
                                </div>
                                <div className="buttonBack">
                                    <button type="button" onClick={logoutFromReg} className="menuButton"> Back
                                    </button>
                                </div>
                            </>
                        }
                        {error === "Zalogowano!" &&
                            <>
                                {error && <p style={{fontSize: "15vw"}}>{error}</p>}
                                <span className="description"
                                      style={{fontSize: "clamp(10px, 9vw, 30px"}}>Witaj, {user.email}!</span>
                                <Link to="landingPage">
                                    <button className="menuButton">Przejdź do Aplikacji!</button>
                                </Link>
                            </>}

                    </form>}
            </div>
        </div>
    </div>)
}

export default AuthPage