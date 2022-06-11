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

            {registered === "" && <div className="logoSpacing">
                <h1 className="title">Mr. Prepper</h1>
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
                        <div className="buttonBack">
                            <button className="menuButton" onClick={e => {
                                e.preventDefault()
                                setRegistered("notRegistered")
                                setIsUsingForm(true)
                            }}>Register!
                            </button>
                        </div>
                        <span className="description">Already have an account? </span>
                        <div className="buttonBack">
                            <button className="menuButton" onClick={e => {
                                e.preventDefault()
                                setRegistered("registered")
                                setIsUsingForm(true)
                            }}>LogIn!
                            </button>
                        </div>
                    </div>}

                {/*Rejestracja*/}

                {(registered === "notRegistered" && isUsingForm) &&
                    <form onSubmit={register} className="registrationForm">

                        <div>
                            <h1>Registration</h1>

                        </div>
                        <div className="registrationInputWrapper">
                            <label className="description" htmlFor="email">Enter Your email below:</label>
                            <input className="inputVisuals" type="email"
                                   id="email"
                                   onChange={e => setEmail(e.target.value)}
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="registrationInputWrapper">
                            <label className="description" htmlFor="password">Enter Your password below:</label>
                            <input className="inputVisuals" type="password"
                                   id="password"
                                   onChange={e => setPassword(e.target.value)}
                                   placeholder="Password"/>
                        </div>
                        <div className="registrationInputWrapper">
                            <label className="description" htmlFor="passwordConfirm">Enter Your email below:</label>
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
                        {error === "Zarejestrowano!" && <>
                        <span
                            className="description">Twoje konto zostało założone i jesteś zalogowany jako {user.email}!</span>
                            <div className="linkButton">
                                <Link
                                    to="landingPage">Przejdź do Aplikacji!
                                </Link>
                            </div>
                        </>}
                        {error && <p>{error}</p>}
                    </form>
                }

                {/*Login*/}
                {(registered === "registered" && isUsingForm ) &&
                    <form onSubmit={login} className="registrationForm">
                        <div>
                            <h1>Log in!</h1>
                            {error && <p>{error}</p>}
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
                            <button type="button" onClick={logoutFromReg} className="menuButton"> Back</button>
                        </div>
                        {error === "Zalogowano!" && <>
                            <span className="description">Jesteś zalogowany jako {user.email}!</span>
                            <Link
                                to="landingPage">Przejdź do Aplikacji!
                            </Link>
                        </>}
                    </form>}
            </div>
        </div>
    </div>)
}

export default AuthPage