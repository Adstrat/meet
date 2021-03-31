import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  })

  test("renders text input", () => {
    expect(NumberOfEventsWrapper.find(".input-number")).toHaveLength(1);
  });

  test("renders input label", () => {
    expect(NumberOfEventsWrapper.find(".input-message")).toHaveLength(1);
  });

  test("default number of events is 32", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.input-number').prop('value')).toBe(numberOfEvents);
  });

  test("changes state when text input changes", () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".input-number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(10);
  });

})