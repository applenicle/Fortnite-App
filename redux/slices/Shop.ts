import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shop, Status, ShopSliceType } from '../types/Shop';

export const initialState: ShopSliceType = {
  items: [],
  error: '',
  status: Status.LOADING,
};

export const ShopSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Shop[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = ShopSlice.actions;

export default ShopSlice.reducer;
