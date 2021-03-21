import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
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

  test("click on show details button to expand event details", () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

}) 