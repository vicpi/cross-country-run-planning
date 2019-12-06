import React from 'react';
import { Marker } from 'react-leaflet';
import { Waypoint } from '../../types';
import L from 'leaflet';
import './WaypointMarker.scss';

interface WaypointMarkerProps {
    waypoint: Waypoint
};

const WaypointMarker: React.FC<WaypointMarkerProps> = ({ waypoint }) => {
    const markerIcon = L.divIcon({
        className: 'waypoint-marker',
        html: `<span>${waypoint.order}</span>`
    });

    return (
        <Marker position={waypoint.coords} icon={markerIcon}></Marker>
    );
}

export default WaypointMarker;
