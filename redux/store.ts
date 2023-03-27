import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { fortniteApi } from './services/FortniteApi';
import ShopSlice from './slices/Shop';

const rootReducer = combineReducers({
  ShopSlice,
  [fortniteApi.reducerPath]: fortniteApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fortniteApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
