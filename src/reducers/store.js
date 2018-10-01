import {
  STORES_SET,
  STORE_TOGGLE_FAV
} from '../actions/types';

const initialState = [];

const handler = (state = initialState, action) => {
  switch(action.type){
    case STORES_SET :
      return [...state, ...action.payload];
    case STORE_TOGGLE_FAV:
      return [ 
        ...state.slice(0, action.payload),
        { ...state[action.payload], favorite: !state[action.payload].favorite },
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
};

export default handler;