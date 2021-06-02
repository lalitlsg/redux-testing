import { actionTypes, shwoHeading, hideHeading } from "./";

test("should return action of type `SHOW_HEADING`", () => {
  const expectedAction = { type: actionTypes.SHOW_HEADING };
  const result = shwoHeading();
  expect(result).toEqual(expectedAction);
});

test("should return action of type `HIDE_HEADING`", () => {
  const expectedAction = { type: actionTypes.HIDE_HEADING };
  const result = hideHeading();
  expect(result).toEqual(expectedAction);
});
