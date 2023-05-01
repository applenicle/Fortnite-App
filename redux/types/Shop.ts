export enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

export type sectionShop = {
  id: string;
  landingPriority: number;
  name: string;
};

type bannder = {
  id: string;
  name: string;
  intensity: string;
};

type displayAssets = {
  background: string;
  background_texture: string;
  displayAsset: string;
  flipbook: null;
  full_background: string;
  materialInstance: string;
  url: string;
};

type images = {
  background: string;
  featured: string;
  full_background: string;
  icon: string;
  icon_background: string;
};
type type = {
  id: string;
  name: string;
};
type rarity = type & {};

type granted = {
  audio: null;
  description: string;
  gameplayTags: string[];
  id: string;
  images: images;
  name: string;
  rarity: rarity;
  series: null;
  set: null;
  type: type;
  video: null;
};

type price = {
  finalPrice: number;
  regularPrice: number;
};

export type shop = {
  bannder: bannder;
  buyAllowed: boolean;
  categories: string[];
  displayAssets: displayAssets[];
  displayDescription: string;
  displayName: string;
  displayType: string;
  firstReleaseDate: string;
  giftAllowed: boolean;
  granted: granted[];
  groupIndex: number;
  mainId: string;
  mainType: string;
  offerId: string;
  offerTag: null;
  previousReleaseDate: string;
  price: price;
  priority: number;
  rarity: rarity;
  section: sectionShop;
  series: null;
  storeName: string;
  tileSize: string;
};

type currentRotation = {
  CustomizeHeroB: string;
  Daily: string;
  Featured: string;
  Featured2: string;
  Featured3: string;
  HeroGearB: string;
  JBalvinB: string;
  PatrickMahomes1B: string;
  VaultShop: string;
  VaultShop2: string;
  VaultShop3: string;
};

type lastUpdate = {
  date: string;
  uid: string;
};

export interface Shop {
  carousel: null;
  currentRotation: currentRotation;
  customBackground: null;
  fullShop: boolean;
  lastUpdate: lastUpdate;
  nextrotation: null;
  result: boolean;
  shop: shop[];
  specialOfferVideo: null;
}

export interface ShopSliceType {
  items: Shop[];
  error: string;
  status: Status.LOADING;
}
