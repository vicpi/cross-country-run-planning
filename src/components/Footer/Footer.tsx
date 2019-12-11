/// <reference path="../../../definitely-typed/gps-to-gpx.d.ts" />
import React from 'react';
import Button from '../Button/Button';
import createGpx from 'gps-to-gpx';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';

const Footer: React.FC = () => {
    const waypoints = useSelector((state: AppState) => state.waypoints);
    const downloadGPXFile = () => {
        const waypointData = waypoints.map(
            waypoint => ({ latitude: waypoint.coords[0], longitude: waypoint.coords[1] })
        )
        const gpxContent = createGpx(waypointData, {
            activityName: 'RUN',
            creator: 'Viktor Pyskunov'
        });
        console.log(gpxContent);
    }
    
    return (
        <div className="footer">
            <Button onClick={downloadGPXFile}>Download your Route</Button>
        </div>
    );
}

export default Footer;