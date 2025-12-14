import { SODYO_ACTION_TYPES } from "../constants/sodyoActionTypes";
interface ISodyoAction {
    actionType: keyof typeof SODYO_ACTION_TYPES;
    destination: string;
    metadata: Record<any, any>;
    sender: string;
}
export interface ISodyoActionNavigate extends ISodyoAction {
    params: {
        address: string;
    };
}
export interface ISodyoActionUrl extends ISodyoAction {
    params: {
        url: string;
    };
}
export interface ISodyoActionPhone extends ISodyoAction {
    params: {
        phone: string;
    };
}
export interface ISodyoActionContact extends ISodyoAction {
    params: {
        [key: string]: string;
    };
}
export interface ISodyoActionEvent extends ISodyoAction {
    params: ISodyoEventDetails;
}
export interface ISodyoEventDetails {
    address: string;
    date: number;
    eventType: 'timeRange' | 'allDay';
    time: ISodyoActionEventTime | 'null';
    title: string;
}
export interface ISodyoActionEventTime {
    start: number;
    end: number;
}
export {};
