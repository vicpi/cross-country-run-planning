import { SET_WAYPOINTS } from '../actions/waypointActions';
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
        default:
            return state
    }
}

export default rootReducer;