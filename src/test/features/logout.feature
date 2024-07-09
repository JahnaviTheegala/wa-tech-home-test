Feature: Verify Edit Account Functionality

  Scenario: Edit Account
    Given User navigates to the application
    Then Click on Signin button
    And Enter username as "baydilirzo@gufum.com" and password as "Pathology123"
    Then Click on checkbox
    When User clicks Signin button
    Then Click on Account
    Then Click on My Profile
    Then click on Logout
    
