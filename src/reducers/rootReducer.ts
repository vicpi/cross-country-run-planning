import {
    SET_WAYPOINTS, REMOVE_WAYPOINT, SET_DRAGGED_ITEM_ID, CLEAR_DRAGGED_ITEM_ID, REORDER_WAYPOINTS, SET_ORDER_INDEX, STOP_DRAG_PROCESS
} from '../actions/waypointActions';
import { Action, Waypoint, WaypointId } from '../types';

export interface AppState {
    waypoints: Array<Waypoint>,
    draggedItemId: WaypointId,
    orderIndex: WaypointId
};

const initialState: AppState = {
    waypoints: [],
    draggedItemId: null,
    orderIndex: null
};

function rootReducer(state = initialState, action: Action) {
    console.log('action', state, action)
    switch (action.type) {
        case SET_WAYPOINTS:
            return {
                ...state,
                waypoints: action.payload.waypoints
            }
        case REMOVE_WAYPOINT:
            return {
                ...state,
                waypoints: state.waypoints.filter(
                    item => item.id !== action.payload.waypoint.id
                )
            }
        case SET_DRAGGED_ITEM_ID:
            return {
                ...state,
                draggedItemId: action.payload.waypointId
            }
        case CLEAR_DRAGGED_ITEM_ID:
            return {
                ...state,
                draggedItemId: null
            }
        case SET_ORDER_INDEX:
            return {
                ...state,
                orderIndex: action.payload.waypointId
            }
        case STOP_DRAG_PROCESS:
            const draggedWaypoint = state.waypoints.find(
                waypoint => waypoint.id === state.draggedItemId
            );
            const filteredWaypoints = state.waypoints.filter(
                waypoint => waypoint.id !== state.draggedItemId
            );
            const index = filteredWaypoints.findIndex(
                waypoint => waypoint.id === state.orderIndex
            );
            const waypointsInNewOrder = [
                ...filteredWaypoints.slice(0, index),
                draggedWaypoint,
                ...filteredWaypoints.slice(index)
            ];
            return {
                ...state,
                waypoints: waypointsInNewOrder,
                draggedItemId: null
            }
        default:
            return state
    }
}

export default rootReducer;