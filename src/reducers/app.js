import {
  STORES_FETCH,
  STORES_SET
} from '../actions/types';

const initialState = {
  isLoading: false
};

const handler = (state = initialState, action) => {
  switch(action.type){
    case STORES_FETCH:
      return { ...state, isLoading: true };
    case STORES_SET:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default handler;