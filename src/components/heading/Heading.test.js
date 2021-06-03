import { shallow } from "enzyme";
import Heading from "./Heading";

test("should render name `lalit`", () => {
  const expectedResult = "Lalit";
  const wrapper = shallow(<Heading />);
  const showNameBtn = wrapper.find('[data-test="show-name-btn"]');
  showNameBtn.simulate("click");
  const result = wrapper.find('[data-test="name"]');
  expect(result.text()).toBe(expectedResult);
});
