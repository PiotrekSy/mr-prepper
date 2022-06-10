import React, {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {Button} from "react-bootstrap";
import {auth} from "./firebase"
import "firebase/auth"
import {Link} from "react-router-dom";

const AuthPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState('')
    const [user, setUser] = useState({})
    const [registered, setRegistered] = useState("")

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
    }

    return (<div className="wholeApp">
        <div className="wholeAuth">
            <div className="logoSpacing">
                <h1 className="title">Mr. Prepper</h1>
                <div className="logo"/>
            </div>
            <div className="formSpacingAuth">
                {/*Ekran startowy, jeżeli żaden form nie jest aktywny*/}
                {registered === "" && <div className="mainMenu">
                    <span className="description">Dont have an account?</span>
                    <button className="menuButton" onClick={e => {
                        e.preventDefault()
                        setRegistered("notRegistered")
                    }}>Register!
                    </button>
                    <span className="description">Already have an account? </span>
                    <button className="menuButton" onClick={e => {
                        e.preventDefault()
                        setRegistered("registered")
                    }}>LogIn!
                    </button>
                </div>}

                {/*Rejestracja*/}
                {(registered === "notRegistered") && <form onSubmit={register} className="registrationForm">
                    <div>
                        <h1>Registration form</h1>
                        {error && <p>{error}</p>}
                    </div>
                    <div className="form-group">
                        <label className="description" htmlFor="email"></label>
                        <input className="inputVisuals" type="email"
                               id="email"
                               onChange={e => setEmail(e.target.value)}
                               aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label className="description" htmlFor="password"></label>
                        <input className="inputVisuals" type="password"
                               id="password"
                               onChange={e => setPassword(e.target.value)}
                               placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label className="description" htmlFor="passwordConfirm"></label>
                        <input className="inputVisuals" type="password"
                               id="passwordConfirm"
                               onChange={e => setPasswordConfirm(e.target.value)}
                               placeholder="Confirm Password"/>
                    </div>
                    <button type="submit"
                            className="menuButton">SignUp!
                    </button>
                    <button type="button"
                            className="menuButton"
                            onClick={logoutFromReg}> Back
                    </button>

                    {error === "Zarejestrowano!" && <>
                        <span
                            className="description">Twoje konto zostało założone i jesteś zalogowany jako {user.email}!</span>
                        <div className="linkButton">
                            <Link
                                to="landingPage">Przejdź do Aplikacji!
                            </Link>
                        </div>
                    </>}
                </form>
                }

                {/*Login*/}
                {(registered === "registered") &&
                    <form onSubmit={login}>
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
                        <Button type="submit" className="menuButton">LogIn!</Button>
                        <Button type="button" onClick={logoutFromReg} className="menuButton"> Back </Button>

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