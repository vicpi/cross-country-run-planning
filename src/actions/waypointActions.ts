import { Waypoint } from '../types';

export const SET_WAYPOINTS = 'SET_WAYPOINTS';
export const REMOVE_WAYPOINT = 'REMOVE_WAYPOINT';

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
