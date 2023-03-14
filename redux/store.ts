import { configureStore } from '@reduxjs/toolkit';
import ShopSlice from './slices/Shop';

export const store = configureStore({
  reducer: {
    ShopSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
