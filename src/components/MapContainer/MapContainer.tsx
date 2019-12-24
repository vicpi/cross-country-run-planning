import React, { useState } from 'react';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';
import { useSelector, useDispatch } from 'react-redux';
import WaypointMarker from '../WaypointMarker/WaypointMarker';
import { setWaypoints } from '../../actions/waypointActions';
import { AppState } from '../../reducers/rootReducer';
import uuid from 'uuid/v1';
import { Waypoint } from '../../types';
import { SMapContainer, SMapContainerGlobalStyle } from './MapContainer.styles';

const MapContainer: React.FC = () => {
    const waypoints = useSelector((state: AppState) => state.waypoints);
    const dispatch = useDispatch();

    const onClick = (event: LeafletMouseEvent) => {
        const order = waypoints.length === 0
            ? 1
            : Math.max(
                ...waypoints.map(waypoint => waypoint.order)
            ) + 1;
        
        const newWaypoint: Waypoint = {
            id: uuid(), 
            order,
            coords: [event.latlng.lat, event.latlng.lng],
            title: `Waypoint ${order}`
        };
        
        dispatch(setWaypoints([
            ...waypoints,
            newWaypoint
        ]));
    }

    const polylinePositions = waypoints.map(waypoint => waypoint.coords)

    return (<>
        <SMapContainerGlobalStyle />
        <SMapContainer>
            <Map center={[47.872332, 15.638276]} zoom={12} onClick={onClick}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {waypoints.map(waypoint => 
                    <WaypointMarker key={waypoint.id} waypoint={waypoint} />
                )}
                <Polyline positions={polylinePositions} />
            </Map>
        </SMapContainer>
    </>);
}
    
export default MapContainer;
