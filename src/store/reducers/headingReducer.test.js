import headingReducer from "./headingReducer";
import { actionTypes } from "../actions";

test("should return `false` when no action is passed", () => {
  const expectedResult = false;
  const result = headingReducer(undefined, {});
  expect(result).toBe(expectedResult);
});

test("should return `true` is SHOW_HEADING action is passed", () => {
  const expectedResult = true;
  const result = headingReducer(undefined, { type: actionTypes.SHOW_HEADING });
  expect(result).toBe(expectedResult);
});

test("should return `false` is HIDE_HEADING action is passed", () => {
  const expectedResult = false;
  const result = headingReducer(undefined, { type: actionTypes.HIDE_HEADING });
  expect(result).toBe(expectedResult);
});
