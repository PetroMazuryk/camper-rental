import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { camperReducer } from './campers/slice';
import { favoriteReducer } from './favorite/slice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

const persistedfavoriteReducer = persistReducer(persistConfig, favoriteReducer);

const rootReducer = combineReducers({
  campers: camperReducer,
  favorite: persistedfavoriteReducer,
});

export default rootReducer;
