import React, {useEffect, useRef, useState} from "react";
import NavBar from "./Navbar";
import Map from 'react-map-gl';
import mapboxgl from "mapbox-gl";

const MapBox = () => {

    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const [lng, setLng] = useState("20.057221055030823")
    // const [lat, setLat] = useState("50.01899074975202")
    // const [zoom, setZoom] = useState("14`")
    //
    //
    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on('move', () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // },);

    return <div className="mapBox">
        <NavBar/>
        {/*mapbox docelowy*/}
        <Map className="mapBox"
             mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
             initialViewState={{
                 // center: [lng, lat],
                 longitude: 20.057221055030823,
                 latitude: 50.01899074975202,
                 zoom: 14
             }}
             mapStyle="mapbox://styles/piotreksy/cl4fz85f0000p14n5srzbnu0y"
             tileset="piotreksy.cl4gy7zm3008920qjezeprw65-9j04g"
        />

        {/*<div ref={mapContainer} className="map-container"/>*/}

        {/*<Marker latitude={}/>*/}
        <div className="mapBox">
            <div className="mapNavBar">
                <div className="wholeButton">
                    <button className="mapNavButtonBack" onClick={() => console.log("a")}>
                        <div className='iconHome'/>
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
        </div>
    </div>
}

export default MapBox