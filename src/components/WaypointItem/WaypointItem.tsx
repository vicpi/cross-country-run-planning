import React, { useState, DragEvent } from 'react';
import { ReactComponent as MenuIcon } from '../../images/menu.svg';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { removeWaypoint, setDraggedItemId, setOrderIndex, stopDragProcess } from '../../actions/waypointActions';
import { Waypoint } from '../../types';
import useIsDragging from '../../hooks/useIsDragging';
import useDraggedItem from '../../hooks/useDraggedItem';
import { SWaypointItem, SDragIcon, SDropZone, SRemove, SWaypointTitle } from './WaypointItem.styles';

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
    const onDragStart = (e: React.DragEvent<HTMLSpanElement>) => {
        dispatch(setDraggedItemId(waypoint.id));
        e.dataTransfer.setData("text", waypoint.id);
        e.dataTransfer.effectAllowed = "move";
        const node: any = e.target
        e.dataTransfer.setDragImage(node.parentNode, 20, 20);
    }
    const onDragEnd = (e: DragEvent) => {
        dispatch(stopDragProcess());
    }
    const onDragOver = (e: DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }
    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        const draggedOverItemId = waypoint.id;
        dispatch(setOrderIndex(draggedOverItemId))
        setActiveDropZone(true);
    }
    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        setActiveDropZone(false);
    }
    const onDrop = (e: DragEvent) => {
        e.preventDefault();
        setActiveDropZone(false);
    }

    return (
        <SWaypointItem 
            className={classnames({ 
                'active': draggedItem === waypoint.id
            })}
        >
            <SDragIcon
                draggable
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            >
                <MenuIcon />
            </SDragIcon>
            <SWaypointTitle>{waypoint.title}</SWaypointTitle>
            <SRemove><TrashIcon onClick={onDelete} /></SRemove>
            <SDropZone
                className={classnames({ 
                    'active': activeDropZone,
                    'visible': isDragging && (draggedItem !== waypoint.id)
                })}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onDrop}
            ></SDropZone>
        </SWaypointItem>
    )
}

export default WaypointItem;