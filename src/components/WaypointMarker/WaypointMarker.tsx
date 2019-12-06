import React from 'react';
import { Marker } from 'react-leaflet';
import './WaypointMarker.scss';
import L from 'leaflet';

const WaypointMarker: React.FC<any> = ({ waypoint }) => {
    const markerIcon = L.divIcon({
        className: 'waypoint-marker',
        html: `<span>${waypoint.order}</span>`
    });

    return (
        <Marker position={waypoint.coords} icon={markerIcon}></Marker>
    );
}

export default WaypointMarker;
