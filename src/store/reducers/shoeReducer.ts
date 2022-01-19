import { SHOE_CHANGE_COLOR } from '../actions/shoeActions';

const initialState = {
  color: 'blue'
};

const reducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case SHOE_CHANGE_COLOR:
      return {
        ...initialState,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
