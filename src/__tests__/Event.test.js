import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {

  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("renders event element", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("renders events information", () => {
    expect(EventWrapper.find(".overview")).toHaveLength(1);
  });

  test("renders events summary, location, date and button", () => {
    expect(EventWrapper.find(".overview").children()).toHaveLength(4);
  });

  test("renders show details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("doesn't render details when first loaded", () => {
    expect(EventWrapper.state("showDetails")).toBe(false);
  })

  test("click on show details button to expand event details", () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("click on hide details button to collapse event details", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });

}) 