import React from "react";
import "firebase/auth"

const AuthPage = () => {
    return (
        <div>
            <div>
                <div>
                    <div>LOGO</div>
                </div>
                <br/>
                <form>
                    <label htmlFor="login">
                        e-mail: <br/><input type="email" name="login"/>
                    </label>
                    <br/>
                    <label htmlFor="password">
                        password: <br/><input type="password" name="password"/>
                    </label>
                    <br/>
                    <label htmlFor="confirmPassword">
                        confirmPassword: <br/><input type="password" name="confirmPassword"/>
                    </label>
                    <br/>   <br/>
                    <button type="button"> Sign In!</button>
                </form>
            </div>
            <br/>
        </div>

    )
}

export default AuthPage