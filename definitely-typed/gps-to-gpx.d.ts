// Type definitions for gps-to-gpx

declare module 'gps-to-gpx' {
    interface Options {
        activityName?: string,
        creator?: string,
        courseKey?: string,
        eleKey?: string,
        extKey?: string,
        hdopKey?: string,
        latKey?: string,
        lonKey?: string,
        speedKey?: string,
        startTime?: any,
        timeKey?: string,
        vdopKey?: string,
    };

    function createGpx(waypoints: any[], options: Options = {}): string

    export = createGpx;
}