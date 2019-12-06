import React, { useState } from 'react';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet'
import './MapContainer.scss';
import L, { LeafletMouseEvent } from 'leaflet';

const MapContainer: React.FC = () => {
    const [waypoints, setWaypoints] = useState<any[]>([])

    const onClick = (event: LeafletMouseEvent) => {
        setWaypoints([
            ...waypoints,
            { coords: [event.latlng.lat, event.latlng.lng]}
        ])
    }

    const markerIcon = L.divIcon({
        className: 'waypoint-marker',
        html: '<span>1</span>'
    });

    const polylinePositions = waypoints.map(point => point.coords)

    return (
        <div className="map-container">
            <Map center={[47.872332, 15.638276]} zoom={12} onClick={onClick}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {waypoints.map(point => 
                    <Marker position={point.coords} icon={markerIcon}></Marker>
                )}
                <Polyline positions={polylinePositions} />
            </Map>
        </div>
    );
}
    
export default MapContainer;
