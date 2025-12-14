export declare const getFormattedCalendarEventTime: (timestamp: number) => string;
interface IConvertTimeToTimestampParams {
    date: number;
    time: string;
}
export declare const convertTimeToTimestamp: (data: IConvertTimeToTimestampParams) => number;
export {};
