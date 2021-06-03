import { actionTypes } from "../actions";

const initialState = {
  rank: 0,
  isFirst: false,
};

const setRankReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RANK:
      return { ...state, rank: action.payload };
    case actionTypes.FIRST_RANK:
      return { ...state, isFirst: true };
    default:
      return state;
  }
};

export default setRankReducer;
