import { combineReducers } from "redux";
import headingReducer from "./headingReducer";
import fetchNamesReducer from "./fetchNamesReducer";

export default combineReducers({
  heading: headingReducer,
  names: fetchNamesReducer,
});
