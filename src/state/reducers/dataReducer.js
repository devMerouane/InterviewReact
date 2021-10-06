import { DATA_FETCHED } from '../action-creator';
import { getLocalStorage } from '../../utils/localstorage';

const initialState = getLocalStorage('data') || {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default reducer;

