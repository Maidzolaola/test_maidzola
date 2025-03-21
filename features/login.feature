@login
Feature: Good Doctor - Portal
  Background: User on the Login page
  Given I am on the login page

  @negative_login_1
  Scenario Outline: As a user, I can not log into the good doctor portal
    When I login with incorrect <username> and <password>
    Then I should see error message
    Examples:
      | username           | password             |
      | tomsmith@gmail.com | SuperSecretPassword! |

  @negative_login_2
  Scenario Outline: As a user, I can not doing forgot password
    When I click forgot password, and input incorrect email <username>
    Then I should see error when input incorrect email
    Examples:
      | username           |
      | tomsmith@gmail.com |


