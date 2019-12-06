export interface Waypoint {
    id: string,
    order: number,
    coords: [number, number]
};

export interface Action {
    type: string,
    payload: any
}