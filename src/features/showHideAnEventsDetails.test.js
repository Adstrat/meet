import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import Event from "../Event";


const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {

  test('When a user hasn\'t chosen an event yet, don\'t show any.', ({
    given, when, then }) => {
    let AppWrapper;
    given('the users hasn’t chosen an event yet', () => {
    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should only see event names, but not their details', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").find(".overview")).toHaveLength(mockData.length);
      expect(AppWrapper.find(".event").find(".event__Details")).toHaveLength(0);
    });
  });

  test('User should see details of events when they have selected one.', ({
    given, when, then }) => {
    let EventsWrapper;

    given('the user has chosen an event', () => {
      EventsWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user clicks on the show details button', () => {
      EventsWrapper.find(".show-details").simulate("click");
    });

    then('the user should see details about that event', () => {
      expect(EventsWrapper.find(".event__Details")).toHaveLength(1);
    });
  });

  test('User no longer wants to see details about an event.', ({
    given, when, then }) => {
    let EventsWrapper;

    given('the user has decided to finish reading an event', () => {
      EventsWrapper = mount(<Event event={mockData[0]} />);
      EventsWrapper.find(".show-details").simulate("click");
    });

    when('the user clicks on the hide details button', () => {
      EventsWrapper.find(".hide-details").simulate("click");
    });

    then('the event details should disappear and only the event names are displayed', () => {
      expect(EventsWrapper.find(".event__Details")).toHaveLength(0);
    });
  });

});