export interface ICampaign {
  id: number;
  name: string;
  status: CampaignStatus;
  author: { name: string };
}

export enum CampaignStatus {
  DRAFT,
  RUNNING,
  ARCHIVED
}
