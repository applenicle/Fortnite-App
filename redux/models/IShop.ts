export enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

export interface IShop {
  data: any;
}

export interface ShopState {
  items: IShop[];
  status: Status;
  error: string;
}
