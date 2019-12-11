import React, { useState, DragEvent } from 'react';
import { ReactComponent as MenuIcon } from '../../images/menu.svg';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { removeWaypoint, setDraggedItemId, reorderWaypoints, setOrderIndex, stopDragProcess } from '../../actions/waypointActions';
import { Waypoint } from '../../types';
import useIsDragging from '../../hooks/useIsDragging';
import './WaypointItem.scss';
import useDraggedItem from '../../hooks/useDraggedItem';

interface WaypointItemProps {
    waypoint: Waypoint
}

const WaypointItem: React.FC<WaypointItemProps> = ({ waypoint }) => {
    const dispatch = useDispatch();
    const [activeDropZone, setActiveDropZone] = useState(false);
    const draggedItem = useDraggedItem();
    const isDragging = useIsDragging();
    const onDelete = () => {
        dispatch(removeWaypoint(waypoint));
    }
    const onDragStart = (e: DragEvent) => {
        const node: any = e.target
        e.dataTransfer.effectAllowed = "move";
        dispatch(setDraggedItemId(waypoint.id));
        e.dataTransfer.setDragImage(node.parentNode, 20, 20);
    }
    const onDragEnd = (e: DragEvent) => {
        console.log('onDragEnd')
        dispatch(stopDragProcess());
    }
    const onDragOver = (e: DragEvent) => {
    }
    const onDragEnter = (e: DragEvent) => {
        const draggedOverItemId = waypoint.id;
        dispatch(setOrderIndex(draggedOverItemId))
        console.log('onDragEnter', e.target)
        setActiveDropZone(true);
    }
    const onDragLeave = (e: DragEvent) => {
        console.log('onDragLeave', e.target)
        setActiveDropZone(false);
    }

    return (
        <div 
            className={classnames('waypoint-item', { 
                'active': draggedItem === waypoint.id
            })}
        >
            <span
                className="drag-icon"
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
            >
                <MenuIcon />
            </span>
            <span className="waypoint-title">{waypoint.title}</span>
            <TrashIcon onClick={onDelete} />
            <div
                className={classnames('drop-zone', { 
                    'active': activeDropZone,
                    'visible': isDragging && (draggedItem !== waypoint.id)
                })}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
            ></div>
        </div>
    )
}

export default WaypointItem;