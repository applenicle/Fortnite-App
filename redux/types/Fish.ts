type fish = {
  description: string;
  details: string;
  enabled: boolean;
  heal: number;
  id: string;
  image: string;
  location: [];
  maxStackSize: number;
  name: string;
  needsProFishingRod: boolean;
  rarity: string;
  sizeMax: number;
  sizeMin: number;
  tags: string[];
  timeOfDay: [];
};
export interface Fish {
  fish: fish[];
  lang: string;
  result: boolean;
  season: number;
}
