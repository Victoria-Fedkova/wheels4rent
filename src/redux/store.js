import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { filterReducer } from './filter/filterSlice';
import { likesReducer } from './likes/likesSlice';
import { sideBarReducer } from './sidebar/sidebarSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const likesPersistConfig = {
  key: ['likes'],
  storage,
  whitelist: ['likes', 'recent'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    likes: persistReducer(likesPersistConfig, likesReducer),
    sideBar: sideBarReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
