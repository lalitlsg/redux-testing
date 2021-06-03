import axios from "axios";
import { actionTypes, shwoHeading, hideHeading, fetchNames, URL } from "./";
import configureStore from "../index";

const fetchNamesMockResp = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

const errorMessage = "Something went wrong.";

jest.mock("axios");

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

describe("`fetchNames` action creators", () => {
  test("should set the correct state for `FETCH_NAMES_SUCCESS` action ", async () => {
    const expectedState = {
      loading: false,
      data: fetchNamesMockResp,
      error: "",
    };
    axios.get.mockResolvedValue({ data: fetchNamesMockResp });
    const store = configureStore();
    await store.dispatch(fetchNames(URL));
    const result = store.getState().names;
    expect(result).toEqual(expectedState);
  });

  test("should set the correct state for `FETCH_NAMES_ERROR` action", async () => {
    const expectedState = {
      loading: false,
      data: [],
      error: errorMessage,
    };
    axios.get.mockRejectedValue(new Error(errorMessage));
    const store = configureStore();
    await store.dispatch(fetchNames(URL + "l"));
    const result = store.getState().names;
    expect(result).toEqual(expectedState);
  });
});
