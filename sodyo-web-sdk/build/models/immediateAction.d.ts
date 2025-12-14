export declare enum EContentActionType {
    INTERNAL_LINK = "INTERNAL_LINK",
    URL = "URL",
    EVENT = "EVENT",
    CALL = "CALL",
    CONTACT = "CONTACT",
    NAVIGATION = "NAVIGATION",
    DATA = "DATA"
}
export interface IContentDataAction extends IContentAction<EContentActionType.DATA> {
    data: string;
}
export interface IContentInternalLinkAction extends IContentAction<EContentActionType.INTERNAL_LINK> {
    targetFreeformContentPageIdentifier: string;
}
export interface IContentUrlAction extends IContentAction<EContentActionType.URL> {
    url: string;
}
export interface IContentEventAction extends IContentAction<EContentActionType.EVENT> {
    title: string;
    address: string;
    date: number | null;
    allDayEvent: boolean;
    timeFrom: string | null;
    timeTo: string | null;
}
export interface IContentCallAction extends IContentAction<EContentActionType.CALL> {
    phone: string;
}
export interface IContentContactAction extends IContentAction<EContentActionType.CONTACT> {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    url: string;
    company: string;
}
export interface IContentNavigationAction extends IContentAction<EContentActionType.NAVIGATION> {
    address: string;
}
interface IContentAction<T extends EContentActionType> {
    uuid: string;
    type: T;
    usage: string;
    destination: string;
}
export type TContentAction = IContentInternalLinkAction | IContentUrlAction | IContentEventAction | IContentCallAction | IContentContactAction | IContentNavigationAction | IContentDataAction;
export {};
