import { createSlice, createAsyncThunk, isFulfilled, PayloadAction } from '@reduxjs/toolkit';
import { fetchShopItem } from './fetch';

export const initialState = {
  shopItems: [],
};

export const ShopSlice = createSlice({
  name: 'ShopItem',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.shopItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopItem.pending, (state) => {
      state.shopItems = [];
    });
    builder.addCase(fetchShopItem.fulfilled, (state, action) => {
      state.shopItems = action.payload;
    });
    builder.addCase(fetchShopItem.rejected, (state) => {
      state.shopItems = [];
    });
  },
});

export const { setItems } = ShopSlice.actions;

export default ShopSlice.reducer;
