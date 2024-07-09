Feature: Verify Login page

  Scenario Outline: Verify Login is Successful
    Given User navigates to the application
    Then Click on Signin button
    And User enters email as "<Email>" and password as "<Password>"
    Then Click on checkbox
    When User clicks Signin button
    Then Login should be Successful

    Examples:
      | Email                | Password     |
      | jedremefyo@gufum.com | Pathology123 |
      | baydilirzo@gufum.com | Pathology123 |
      | fudrujapse@gufum.com | Pathology123 |

  Scenario Outline: Login should not be succesful
    Given User navigates to the application
    Then Click on Signin button
    And User enters email as "<Email>" and password as "<Password>"
    Then Click on checkbox
    When User clicks Signin button
    When Login should fail

    Examples:
      | Email                | Password     |
      | jedremefyo           | Pathology123 |
      | baydilirzo@gufum.com | Pathology    |
      | nistizerki@gufum.com | Pathology123 |
