import { SET_WAYPOINTS, REMOVE_WAYPOINT } from '../actions/waypointActions';
import { Action, Waypoint } from '../types';

export interface AppState {
    waypoints: Array<Waypoint>
};

const initialState: AppState = {
    waypoints: []
};

function rootReducer(state = initialState, action: Action) {
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
        default:
            return state
    }
}

export default rootReducer;