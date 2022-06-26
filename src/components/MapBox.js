import React, {useEffect, useRef, useState} from "react";
import NavBar from "./Navbar";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const MapBox = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(20.0572);
    const [lat, setLat] = useState(50.0189);
    const [zoom, setZoom] = useState(16);

    //generowanie mapy:
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom
        });
    });

    //czytanie current place on map:
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div className="mapBox">
            <NavBar/>
            <div ref={mapContainer} className="mapContainer"/>
            <div className="sidebar">Dł: {lng}, Szer: {lat}</div>
            {/*nawigacja do mapy:*/}
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
    )
}

export default MapBox