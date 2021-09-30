const initialState = {
  data: undefined,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default reducer;

