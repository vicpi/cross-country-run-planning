import React, { useState } from 'react';
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
    const isDragging = useIsDragging();
    const [draggingOverFreeZone, setDraggingOverFreeZone] = useState(false);
    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(setOrderIndex(null));
        setDraggingOverFreeZone(true);
        console.log('onDragEnter', e.target)
        // setActiveDropZone(true);
    }
    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggingOverFreeZone(false);
        console.log('onDragLeave', e.target)
    }
    return (
        <div className={classnames('list')}>
            {waypoints.map(waypoint => 
                <WaypointItem key={waypoint.id} waypoint={waypoint} />
            )}
            <div className={classnames('free-drop-zone', { 'active': draggingOverFreeZone })}
                 onDragEnter={onDragEnter}
                 onDragLeave={onDragLeave}
            ></div>
        </div>
    );
}

export default List;