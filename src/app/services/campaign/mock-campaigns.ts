import { CampaignStatus, ICampaign } from "./ICampaign";

export const MOCK_CAMPAIGNS: Array<ICampaign> = [
  {
    id: 1,
    name: 'Cart Abandonment Campaign',
    status: CampaignStatus.DRAFT,
    author: {name: 'Brando Sando'}
  },
  {
    id: 2,
    name: 'Birthday Coupon Code',
    status: CampaignStatus.RUNNING,
    author: {name: 'John Green'}
  },
  {
    id: 3,
    name: 'Email Course',
    status: CampaignStatus.RUNNING,
    author: {name: 'Hank Green'}
  }
];
