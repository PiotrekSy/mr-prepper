import React from "react";

const LoadingScreen = ({counter}) => {
    return (
        <div className="">
            <h1>Mr.Prepper</h1>
            <div>LOGO</div>
            <div className="">
                <div className="">
                    <div className="">{counter}</div>
                </div>
            </div>
            <span className="creator">Created by PiotrekSy</span>
        </div>
    )
}

export default LoadingScreen