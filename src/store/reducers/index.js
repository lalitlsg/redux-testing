import { combineReducers } from "redux";
import headingReducer from "./headingReducer";

export default combineReducers({
  heading: headingReducer,
});
