export enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

// export interface IShop {
//   data: any;
// }

// export interface ShopState {
//   items: IShop[];
//   status: Status;
//   error: string;
// }

export type sectionShop = {
  id:string | undefined
  landingPriority: number | undefined
  name: string | undefined
}

type shop = {
  bannder: {}
  buyAllowed: boolean
  categories: string[]
  displayAssets: [{}]
  displayDescription: string
  displayName: string
  displayType: string
  firstReleaseDate: string
  giftAllowed: boolean
  granted: [{}]
  groupIndex: number
  mainId: string
  mainType: string
  offerId: string
  offerTag: {}
  priority: number
  rarity: {}
  section: sectionShop
  series: null
  storeName: string
  tileSize: string
}


export interface IShop {
  shop: shop[] | undefined
}