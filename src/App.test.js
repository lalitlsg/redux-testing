import { shallow } from "enzyme";
import App from "./App";
import Heading from "./components/heading/Heading";
import configureStore from "./store";

test("should show `<HEADING /> component if heading is `true`", () => {
  const store = configureStore({ heading: true });
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  const expectedResult = 1;
  const result = wrapper.find(Heading).length;
  expect(result).toBe(expectedResult);
});

test("should hide `<HEADING /> component if heading is `false`", () => {
  const store = configureStore({ heading: false });
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  const expectedResult = 0;
  const result = wrapper.find(Heading).length;
  expect(result).toBe(expectedResult);
});
