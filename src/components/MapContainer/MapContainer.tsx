import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './MapContainer.scss';
import { LeafletMouseEvent } from 'leaflet';

const MapContainer: React.FC = () => {
    const [waypoints, setWaypoints] = useState<any[]>([])

    const onClick = (event: LeafletMouseEvent) => {
        setWaypoints([
            ...waypoints,
            { coords: [event.latlng.lat, event.latlng.lng]}
        ])
    }

    return (
        <div className="map-container">
            <Map center={[47.872332, 15.638276]} zoom={12} onClick={onClick}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {waypoints.map(point => 
                    <Marker position={point.coords}></Marker>
                )}
            </Map>
        </div>
    );
}
    
export default MapContainer;
