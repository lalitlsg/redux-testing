import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

const configureStore = (initialState = {}) =>
  createStore(reducer, initialState, composeWithDevTools());

export default configureStore;
