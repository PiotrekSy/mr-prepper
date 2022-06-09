import React, {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import {Button} from "react-bootstrap";
import {auth} from "./firebase"
import "firebase/auth"

const AuthPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState('')
    const [user, setUser] = useState({})

    const register = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            return setError('Passwords do not match!')
        }
        try {
            setError("")
            const user = await createUserWithEmailAndPassword(auth, email, password)
            onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
            console.log(user)
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
        } catch {
            setError("Failed to create an account!")
        }
    }

    const logout = async (e) => {
        e.preventDefault()
        await signOut(auth)
    }

    return (
        <div>
            <div>
                <div>LOGO</div>
                <div>
                    <h1>Sign Up!</h1>
                    {error && <p>{error}</p>}
                </div>

                <form onSubmit={register}>
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
                </form>
                {user?.email && `Zalogowano z adresu email: ${user?.email}`}
                <br/>
                <Button onClick={logout}>Log Out!</Button>
                <div>
                    Already have an account? <br/>
                    <Button onClick={login}>Log In!</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthPage