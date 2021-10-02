import { CHARMANDER_FETCHED, DITTO_FETCHED, PIKACHU_FETCHED } from '../action-creator';

const initialState = {
  ditto: {},
  pikachu: {},
  charmander: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DITTO_FETCHED:
      return {
        ...state,
        ditto: action.payload
      }
    case PIKACHU_FETCHED:
      return {
        ...state,
        pikachu: action.payload
      }
    case CHARMANDER_FETCHED:
      return {
        ...state,
        charmander: action.payload,
      }
    default:
      return state
  }
}

export default reducer;

