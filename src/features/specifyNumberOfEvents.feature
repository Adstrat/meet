Feature: Specify number of events

  Scenario: When a user hasn't chosen how many events, 32 is the default number.
    Given the user hasn't specified the number of events yet
    When the user opens the app
    Then the user will see 32 possible events

  Scenario: User can change the number of events they want to see
    Given the user would like to see more/less events
    When the user types a new number
    Then the user should see the same number of events

