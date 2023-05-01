type images = {
  background: string;
  icon: string;
};

type mainStats = {
  BulletsPerCartridge: number;
  ClipSize: number;
  DamageZone_Critical: number;
  DmgPB: number;
  FiringRate: number;
  ReloadTime: number;
  Spread: number;
  SpreadDownsights: number;
};

export type weapons = {
  description: string;
  enabled: boolean;
  gameplayTags: string[];
  id: string;
  images: images;
  mainStats: mainStats;
  name: string;
  rarity: string;
  searchTags: string;
  type: string;
};

export interface WeaponsType {
  lang: string;
  result: true;
  weapons: weapons[];
}
