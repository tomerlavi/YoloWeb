import { Env } from "./env";
import { EMarkerOrigin } from "./markerOrigin";
export interface IGetAnalyzerUrlParams {
    env?: Env;
    version?: string;
    stopAnalyze?: boolean;
}
export declare const getAnalyzerUrl: (config: IGetAnalyzerUrlParams) => string;
interface IContentUrlParams {
    appKey: string;
    appUserId: string;
    markerCode: string;
    markerOrigin: EMarkerOrigin;
    env: Env;
    customLabel?: string;
}
export declare const getContentUrl: (config: IContentUrlParams) => string;
export declare const getContentMetadataUrl: (config: IContentUrlParams) => string;
export declare const getAnalyticsUrl: (env: Env) => string;
export declare const getExploreCampaignsUrl: (env: Env) => string;
export {};
