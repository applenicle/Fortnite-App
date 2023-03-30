import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { fortniteApi } from './services/FortniteApi';
import ShopSlice from './slices/Shop';
import themeSlice from './slices/Themes';
import LanguagesSlice from './slices/Languages';

const rootReducer = combineReducers({
  ShopSlice,
  themeSlice,
  LanguagesSlice,
  [fortniteApi.reducerPath]: fortniteApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fortniteApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;