import React, {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
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

    return (
        <div>
            <div>
                <div>LOGO</div>
                {/*Ekran startowy, jeżeli żaden form nie jest aktywny*/}
                {registered === "" &&
                    <>
                        <p>{user.name}</p>
                        <span>Nie masz konta? </span>
                        <button onClick={e => {
                            e.preventDefault()
                            setRegistered("notRegistered")
                        }}>Zarejestruj się!
                        </button>
                        <br/>
                        <span>Masz już konto? </span>
                        <button onClick={e => {
                            e.preventDefault()
                            setRegistered("registered")
                        }}>Zaloguj!
                        </button>
                    </>
                }

                {/*Rejestracja*/}
                {(registered === "notRegistered") &&
                    <form onSubmit={register}>
                        <div>
                            <h1>Register form</h1>
                            {error && <p>{error}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email"
                                   id="email"
                                   onChange={e => setEmail(e.target.value)}
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   id="password"
                                   onChange={e => setPassword(e.target.value)}
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Password</label>
                            <input type="password"
                                   id="passwordConfirm"
                                   onChange={e => setPasswordConfirm(e.target.value)}
                                   placeholder="PasswordConfirm"/>
                        </div>
                        <Button type="submit">Sign Up!</Button>
                        <br/>

                        {
                            error === "Zarejestrowano!" &&
                            <>
                                <span>Twoje konto zostało założone i jesteś zalogowany jako {user.email}!</span>
                                <div className="linkButton">
                                    <Link
                                        to="landingPage">Przejdź do
                                        Aplikacji!
                                    </Link>
                                </div>
                            </>
                        }
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
                            <label htmlFor="email">Email address</label>
                            <input type="email"
                                   id="email"
                                   onChange={e => setEmail(e.target.value)}
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   id="password"
                                   onChange={e => setPassword(e.target.value)}
                                   placeholder="Password"/>
                        </div>
                        <Button type="submit">Log in!</Button>
                        {
                            error === "Zalogowano!" &&
                            <>
                                <span>Jesteś zalogowany jako {user.email}!</span>
                                <Link
                                    to="landingPage">Przejdź do Aplikacji!
                                </Link>
                            </>
                        }
                    </form>
                }
            </div>
        </div>
    )
}

export default AuthPage