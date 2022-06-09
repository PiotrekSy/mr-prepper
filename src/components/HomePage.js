import React from "react";

const HomePage = () => {
    return (
        <div>
            <div>
                <div>
                    <div>logo placeholder TODO wstawić logo</div>
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
                    <br/>   <br/>
                    <button type="button"> Sign In!</button>
                </form>
            </div>
            <br/>
            <span className="creator">Created by PiotrekSy</span>
        </div>

    )
}

export default HomePage