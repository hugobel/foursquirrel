import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index'; 

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['stores']
};

const store = createStore(persistReducer(persistConfig, rootReducer));
export const persistor = persistStore(store);

export default store;