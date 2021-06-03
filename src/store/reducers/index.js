import { combineReducers } from "redux";
import headingReducer from "./headingReducer";
import fetchNamesReducer from "./fetchNamesReducer";
import setRankReducer from "./setRankReducer";

export default combineReducers({
  heading: headingReducer,
  names: fetchNamesReducer,
  rank: setRankReducer,
});
