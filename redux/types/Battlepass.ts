type price = {
  amount: number;
  type: string;
};
type added = {
  date: string;
  version: string;
};

type displayText = {
  chapter: string;
  chapterSeason: string;
  season: string;
};
type battlepassObj = {
  battlePassName: string;
  displayText: displayText;
  page: number;
  season: number;
  tier: number;
  type: string;
};

type images = {
  background: string;
  featured: string;
  full_background: string;
  icon: string;
  icon_background: string;
};

type introduction = {
  chapter: string;
  season: string;
  text: string;
};

type type = {
  id: string;
  name: string;
};

type set = type & {
  partOf: string;
};

type rarity = type & {};

type item = {
  added: added;
  apiTags: [];
  audio: null;
  battlepass: battlepassObj;
  builtInEmote: null;
  copyrightedAudio: boolean;
  description: string;
  displayAssets: [];
  gameplayTags: string[];
  grantedBy: [];
  grants: [];
  id: string;
  images: images;
  interest: number;
  introduction: introduction;
  lastAppearance: null;
  name: string;
  previewVideos: [];
  price: number;
  rarity: rarity;
  reactive: boolean;
  releaseDate: null;
  searchTags: [];
  series: null;
  set: set;
  shopHistory: null;
  styles: [];
  type: type;
  upcoming: false;
  video: null;
};

type rewards = {
  battlepass: string;
  item: item;
  page: number;
  price: price;
  quantity: number;
  tier: number;
};

type seasonDates = {
  begin: string;
  end: string;
};

type videos = {
  lang: string;
  type: string;
  url: string;
};

type displayInfo = displayText & {
  battlepassName: string;
};

export interface Battlepass {
  displayInfo: displayInfo;
  result: boolean;
  rewards: rewards[];
  season: number;
  seasonDates: seasonDates;
  videos: videos;
}
