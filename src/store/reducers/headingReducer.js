import { actionTypes } from "../actions";

/**
 * reducer function for handling heading
 * @param {boolean} state - state of store.
 * @param {object} action - action to be done.
 * @returns {boolean}
 */
const headingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SHOW_HEADING:
      return true;
    case actionTypes.HIDE_HEADING:
      return false;
    default:
      return state;
  }
};

export default headingReducer;
