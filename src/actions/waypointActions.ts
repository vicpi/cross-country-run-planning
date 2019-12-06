import { Waypoint } from '../types';

export const SET_WAYPOINTS = 'SET_WAYPOINTS';

interface SetWaypointsAction {
    type: string,
    payload: {
        waypoints: Array<Waypoint>
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
