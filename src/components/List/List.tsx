import React from 'react';
import WaypointItem from '../WaypointItem/WaypointItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import './List.scss';

const List: React.FC = () => {
    const waypoints = useSelector((state: AppState) => state.waypoints);
    return (
        <div className="list">
            {waypoints.map(waypoint => 
                <WaypointItem key={waypoint.id} waypoint={waypoint} />
            )}
        </div>
    );
}

export default List;