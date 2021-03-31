Feature: Show and hide an events details

  Scenario: When a user hasn't chosen an event yet, don't show any.
    Given the users hasn’t chosen an event yet
    When the user opens the app
    Then the user should only see event names, but not their details

  Scenario: User should see details of events when they have selected one.
    Given the user has chosen an event
    When the user clicks on the show details button
    Then the user should see details about that event

  Scenario: User no longer wants to see details about an event.
    Given the user has decided to finish reading an event
    When the user clicks on the hide details button
    Then the event details should disappear and only the event names are displayed

