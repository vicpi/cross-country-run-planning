export interface Waypoint {
    id: string,
    order: number,
    title: string,
    coords: [number, number]
};

export interface Action {
    type: string,
    payload: any
}