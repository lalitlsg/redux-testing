import { actionTypes } from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NAMES_LOADING:
      return { loading: true, data: [], error: "" };
    case actionTypes.FETCH_NAMES_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case actionTypes.FETCH_NAMES_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default fetchNamesReducer;
