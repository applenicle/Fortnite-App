type channels = {
  displayName: string;
  id: string;
  name: string;
};
type benefits = {
  benefitID: string;
  createdAt: string;
  entitlementLimit: number;
  imageAssetURL: string;
  isIosAvailable: boolean;
  name: string;
};

type timeBasedDrops = {
  benefits: benefits;
  endDate: string;
  name: string;
  requiredMinutesWatched: number;
  startDate: string;
  timeBasedDropUUID: string;
};
type allowed = {
  channels: channels[];
  isEnabled: boolean;
};

type drops = {
  allowed: allowed;
  description: string;
  detailsURL: string;
  dropUUID: string;
  endDate: string;
  gameArtUrl: string;
  name: string;
  startDate: string;
  status: string;
  timeBasedDrops: timeBasedDrops;
};
export interface Twitch {
  drops: drops[];
  result: boolean;
  status: null;
}
