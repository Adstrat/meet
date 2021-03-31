import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import NumberOfEvents from "../numberOfEvents.js";
import { extractLocations } from "../api.js"

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {

  test('When a user hasn\'t chosen how many events, 32 is the default number.', ({
    given, when, then }) => {
    let Appwrapper;

    given('the user hasn\'t specified the number of events yet', () => {
    });

    when('the user opens the app', () => {
      Appwrapper = mount(<App />);
    });

    then('the user will see 32 possible events', () => {
      Appwrapper.update();
      expect(Appwrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({
    given, when, then }) => {
    let NumberOfEventsWrapper;

    given('the user would like to see more/less events', () => {
      NumberOfEventsWrapper = shallow(
        <NumberOfEvents updateEvents={() => { }} />
      );
    });

    when('the user types a new number', () => {
      NumberOfEventsWrapper.find(".input-number").simulate("change", { target: { value: 1 } });
    });

    then('the user should see the same number of events', () => {
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(1);
    });
  });

});