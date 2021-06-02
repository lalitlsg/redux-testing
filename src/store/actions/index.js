export const actionTypes = {
  SHOW_HEADING: "SHOW_HEADING",
  HIDE_HEADING: "HIDE_HEADING",
};

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
