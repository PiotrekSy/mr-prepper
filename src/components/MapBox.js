import React from "react";
import NavBar from "./Navbar";
import MapNavBar from "./MapNavBar"
import Map, {Marker} from 'react-map-gl';

const MapBox = () => {
    return <div className="mapBox">
        <NavBar/>
        {/*mapbox docelowy*/}
        <Map className="mapBox"
             mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
             initialViewState={{
                 longitude: 19.93658,
                 latitude: 50.06143,
                 zoom: 15
             }}
             mapStyle="mapbox://styles/mapbox/streets-v9"
        />
        {/*TODO punkty lokalizacji - dodawanie i odczytywanie*/}
        {/*<Marker latitude={}/>*/}
        <MapNavBar/>
    </div>
}

export default MapBox