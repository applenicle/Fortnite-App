import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mapAPI } from './services/MapsService';
import { nameAPI } from './services/ShopService';
import ShopSlice from './slices/Shop';

const rootReducer = combineReducers({
  ShopSlice,
  [nameAPI.reducerPath]: nameAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nameAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
