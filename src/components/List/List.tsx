import React, { useState, DragEvent } from 'react';
import classnames from 'classnames';
import WaypointItem from '../WaypointItem/WaypointItem';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import './List.scss';
import { setOrderIndex } from '../../actions/waypointActions';
import useIsDragging from '../../hooks/useIsDragging';

const List: React.FC = () => {
    const waypoints = useSelector((state: AppState) => state.waypoints);
    const dispatch = useDispatch();
    const [activeDropZone, setActiveDropZone] = useState(false);
    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(setOrderIndex(null));
        setActiveDropZone(true);
        console.log('onDragEnter', e.target)
        // setActiveDropZone(true);
    }
    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        setActiveDropZone(false);
        console.log('onDragLeave', e.target)
    }
    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }
    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setActiveDropZone(false);
    }
    return (
        <div className={classnames('list')}>
            {waypoints.map(waypoint => 
                <WaypointItem key={waypoint.id} waypoint={waypoint} />
            )}
            <div className={classnames('free-drop-zone', { 'active': activeDropZone })}
                 onDragEnter={onDragEnter}
                 onDragLeave={onDragLeave}
                 onDragOver={onDragOver}
                 onDrop={onDrop}
            ></div>
        </div>
    );
}

export default List;