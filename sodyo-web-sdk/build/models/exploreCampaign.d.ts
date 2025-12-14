export interface IExploreCampaign {
    active: boolean;
    campaignDescription: string | null;
    campaignName: string | null;
    campaignUuid: string | null;
    displayName: string | null;
    imageUrl: string | null;
    interests: any[];
    markerCode: string | null;
    matchedAllTags: boolean;
    shareable: boolean;
    uuid: string;
}
