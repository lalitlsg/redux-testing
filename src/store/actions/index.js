import axios from "axios";

export const actionTypes = {
  SHOW_HEADING: "SHOW_HEADING",
  HIDE_HEADING: "HIDE_HEADING",
  FETCH_NAMES_SUCCESS: "FETCH_NAMES_SUCCESS",
  FETCH_NAMES_ERROR: "FETCH_NAMES_ERROR",
  FETCH_NAMES_LOADING: "FETCH_NAMES_LOADING",
};

export const URL = "https://jsonplaceholder.typicode.com/users";

export const shwoHeading = () => {
  return {
    type: actionTypes.SHOW_HEADING,
  };
};

export const hideHeading = () => {
  return {
    type: actionTypes.HIDE_HEADING,
  };
};

export const fetchNames = (url) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_NAMES_LOADING });
    try {
      const response = await axios.get(url);
      dispatch({
        type: actionTypes.FETCH_NAMES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_NAMES_ERROR, payload: error.message });
    }
  };
};
