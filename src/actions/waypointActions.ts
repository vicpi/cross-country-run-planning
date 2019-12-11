import { Waypoint, WaypointId } from '../types';

export const SET_WAYPOINTS = 'SET_WAYPOINTS';
export const REMOVE_WAYPOINT = 'REMOVE_WAYPOINT';
export const SET_DRAGGED_ITEM_ID = 'SET_DRAGGED_ITEM_ID';
export const CLEAR_DRAGGED_ITEM_ID = 'CLEAR_DRAGGED_ITEM_ID';
export const REORDER_WAYPOINTS = 'REORDER_WAYPOINTS';
export const SET_ORDER_INDEX = 'SET_ORDER_INDEX';
export const STOP_DRAG_PROCESS = 'STOP_DRAG_PROCESS';

interface SetWaypointsAction {
    type: string,
    payload: {
        waypoints: Array<Waypoint>
    }
};

interface RemoveWaypointAction {
    type: string,
    payload: {
        waypoint: Waypoint
    }
};

interface SetDragItemIdAction {
    type: string,
    payload: {
        waypointId: WaypointId
    }
};

interface ClearDragItemIdAction {
    type: string
};

interface ReorderWaypointsAction {
    type: string,
    payload: {
        draggedOverWaypointId: string
    }
};

interface SetOrderIndexAction {
    type: string,
    payload: {
        waypointId: WaypointId | null
    }
};

interface StopDragProcessAction {
    type: string
};

export const setWaypoints = (waypoints: Array<Waypoint>): SetWaypointsAction => {
    return {
        type: SET_WAYPOINTS,
        payload: {
            waypoints
        }
    }
}

export const removeWaypoint = (waypoint: Waypoint): RemoveWaypointAction => {
    return {
        type: REMOVE_WAYPOINT,
        payload: {
            waypoint
        }
    }
}

export const setDraggedItemId = (waypointId: WaypointId): SetDragItemIdAction => {
    return {
        type: SET_DRAGGED_ITEM_ID,
        payload: {
            waypointId
        }
    }
}

export const clearDragItemId = (): ClearDragItemIdAction => {
    return {
        type: CLEAR_DRAGGED_ITEM_ID
    }
}

export const reorderWaypoints = (draggedOverWaypointId: string): ReorderWaypointsAction => {
    return {
        type: REORDER_WAYPOINTS,
        payload: {
            draggedOverWaypointId
        }
    }
}

export const setOrderIndex = (waypointId: WaypointId | null): SetOrderIndexAction => {
    return {
        type: SET_ORDER_INDEX,
        payload: {
            waypointId
        }
    }
}

export const stopDragProcess = (): StopDragProcessAction => {
    return {
        type: STOP_DRAG_PROCESS
    }
}
