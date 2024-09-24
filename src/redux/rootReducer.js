import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { camperReducer } from './campers/slice';
import { favoriteReducer } from './favorite/slice';
import { filterReducer } from './filter/slice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

const persistedfavoriteReducer = persistReducer(persistConfig, favoriteReducer);

const rootReducer = combineReducers({
  campers: camperReducer,
  filter: filterReducer,
  favorite: persistedfavoriteReducer,
});

export default rootReducer;
