import {
  STORES_FETCH,
  STORES_SET,
  STORE_TOGGLE_FAV,
} from './types';

export const fetchStores = payload => ({type: STORES_FETCH, payload});
export const setStores = payload => ({ type: STORES_SET, payload });
export const toggleStoreFav = payload => ({type: STORE_TOGGLE_FAV, payload});