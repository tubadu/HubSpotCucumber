@web
  Feature: Login Feature
    Background:
      Given I am on Homepage
      @login
      Scenario: Verify invalid login
        When I enter tuba@sample.com into username text fields on home screen
        And I enter test12345 into password text fields on home screen
        And I click on login button on home screen
        Then I verify invalid login message on sign in page

