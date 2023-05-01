type colors = {
  A: string;
  B: string;
  C: string;
};

type descriptions = {
  battlepass: string;
  title: string;
  vbucksTitle: string;
};

type images = {
  apiRender: string;
  battlepass: string;
  battlepassTile: string;
  itemShopTile: string;
  skin: string;
};
type itemImages = {
  background: string;
  featured: null;
  full_background: string;
  icon: string;
  icon_background: string;
};

type type = {
  id: string;
  name: string;
};

type rarity = type & {};

type introduction = {
  chapter: string;
  season: string;
  text: string;
};

type item = {
  description: string;
  gameplayTags: string[];
  id: string;
  images: itemImages;
  introduction: introduction;
  name: string;
  rarity: rarity;
  series: null;
  type: type;
  video: null;
};

type rewards = {
  item: item;
  quantity: number;
};

type history = {
  colors: colors;
  date: string;
  descriptions: descriptions;
  images: images;
  rewards: rewards[];
  skinImageTakeOver: boolean;
  type: string;
  video: null;
};

export interface Crew {
  history: history[];
  result: boolean;
}
