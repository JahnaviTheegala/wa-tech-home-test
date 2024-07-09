Feature: Verify Spin Game

  Scenario: Verify Spin game
    Given User navigates to the application
    Then Click on Signin button
    And Enter username as "baydilirzo@gufum.com" and password as "Pathology123"
    Then Click on checkbox
    When User clicks Signin button
    Then click on Wonder Wheel game
    # When User should land in wonderwheel game
    Then Click on All button
