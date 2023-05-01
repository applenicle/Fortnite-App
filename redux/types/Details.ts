type added = {
  date: string;
  version: string;
};
type displayAssets = {
  background: string;
  background_texture: null;
  displayAsset: string;
  flipbook: null;
  full_background: string;
  materialInstance: string;
  url: string;
};
type grants = {
  description: string;
  id: string;
  images: images;
  name: string;
  rarity: rarity;
  series: null;
  type: type;
};
type images = {
  background: string;
  featured: null;
  full_background: string;
  icon: string;
  icon_background: string;
};

type introduction = {
  chapter: string;
  season: string;
};
interface Set {
  partOf: string;
  extended: type;
}

type series = type & {};

export type item = {
  added: added;
  apiTags: [];
  audio: null;
  battlepass: null;
  builtInEmote: null;
  copyrightedAudio: false;
  description: string;
  displayAssets: displayAssets[];
  gameplayTags: [];
  grantedBy: [];
  grants: grants[];
  id: string;
  images: images;
  interest: number;
  introduction: null | introduction;
  lastAppearance: string;
  name: string;
  previewVideos: [];
  price: number;
  rarity: rarity;
  reactive: boolean;
  releaseDate: string;
  searchTags: [];
  series: null | series;
  set: null | Set;
  shopHistory: string[];
  styles: [];
  type: type;
  upcoming: boolean;
  video: null;
};

type type = {
  id: string;
  name: string;
};
type rarity = type & {};

export interface Details {
  item: item;
  result: boolean;
}
