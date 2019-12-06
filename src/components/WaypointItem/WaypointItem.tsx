import React from 'react';
import { ReactComponent as MenuIcon } from '../../images/menu.svg';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { useDispatch } from 'react-redux';
import { removeWaypoint } from '../../actions/waypointActions';
import { Waypoint } from '../../types';
import './WaypointItem.scss';

interface WaypointItemProps {
    waypoint: Waypoint
}

const WaypointItem: React.FC<WaypointItemProps> = ({ waypoint }) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(removeWaypoint(waypoint));
    }

    return (
        <div className="waypoint-item">
            <MenuIcon />
            <span className="waypoint-title">{waypoint.title}</span>
            <TrashIcon onClick={onDelete} />
        </div>
    )
}

export default WaypointItem;