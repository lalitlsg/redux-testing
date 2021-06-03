import axios from "axios";

export const actionTypes = {
  SHOW_HEADING: "SHOW_HEADING",
  HIDE_HEADING: "HIDE_HEADING",
  FETCH_NAMES_SUCCESS: "FETCH_NAMES_SUCCESS",
  FETCH_NAMES_ERROR: "FETCH_NAMES_ERROR",
  FETCH_NAMES_LOADING: "FETCH_NAMES_LOADING",
  SET_RANK: "SET_RANK",
  FIRST_RANK: "FIRST_RANK",
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

export const setRank = (rank) => {
  return (dispacth) => {
    dispacth({ type: actionTypes.SET_RANK, payload: rank });
    if (rank === 1) {
      dispacth({ type: actionTypes.FIRST_RANK });
    }
  };
};
