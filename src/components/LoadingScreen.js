import React from "react";

const LoadingScreen = ({counter}) => {

    return (
        <div className="wholeAuth">
            <div className="logoSpacing">
                <h1 className="title">Mr. Prepper</h1>
                <div className="logo"/>
            </div>
            <div className="formSpacingLoading">
                <div className="loadingWrapper" style={{width: (0.8 * counter + "%"), maxWidth: "800px"}}>
                    <div className="loadingBarElement">
                        <div className="loadingBar">{counter}%</div>
                    </div>
                </div>
                <span className="creator">Created by PiotrekSy</span>
            </div>
        </div>
    )
}

export default LoadingScreen