import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShopItem = createAsyncThunk<any, any>('items/fetchByCategory', async (params) => {
  // const { categories, search } = params;
  const { data } = await axios.get<any>(`https://fortniteapi.io/v2/shop?lang=en`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_FORTNITE_API_KEY,
    },
  });
  console.log({ data });
  return data.shop;
});
