import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status, ShopState, IShop } from '../models/IShop';

export const initialState: ShopState = {
  // items: IShop[],
  items: [],
  error: '',
  status: Status.LOADING,
};

export const ShopSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = ShopSlice.actions;

export default ShopSlice.reducer;
