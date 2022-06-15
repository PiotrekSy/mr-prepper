import React from "react";

const MapNavBar = () => {

    return (
        <div className="mapNavBar">
            <div className="wholeButton">
                <button className="mapNavButtonBack" onClick={() => console.log("a")}>
                    <p className="mapNavButton">a</p>
                </button>
            </div>
            <div className="wholeButton">
                <button className="mapNavButtonBack" onClick={() => console.log("b")}>
                    <p className="mapNavButton">b</p>
                </button>
            </div>
            <div className="wholeButton">
                <button className="mapNavButtonBack" onClick={() => console.log("c")}>
                    <p className="mapNavButton">c</p>
                </button>
            </div>
            <div className="wholeButton">
                <button className="mapNavButtonBack" onClick={() => console.log("d")}>
                    <p className="mapNavButton">d</p>
                </button>
            </div>
            <div className="wholeButton">
                <button className="mapNavButtonBack" onClick={() => console.log("e")}>
                    <p className="mapNavButton">e</p>
                </button>
            </div>
        </div>
    )
}

export default MapNavBar