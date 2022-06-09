import React from "react";

const LoadingScreen = ({counter}) => {
    return (
        <div className="loadingWrapper">
            <div>LOGO</div>
            <div className="">
                <div className="loadingBar">
                    <div className="appEnter">{counter}</div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen