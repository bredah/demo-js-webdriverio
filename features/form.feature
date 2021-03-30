Feature: Example: Form 

    Background:
        Given I access the Home page

    Scenario: Access the security area
        When I submit the form with the following data:
            | username | tomsmith             |
            | password | SuperSecretPassword! |
        Then the page should display the message "You logged into a secure area!"

    Scenario Outline: Validate invalide user access
        When I submit the form with the following data:
            | username | <username> |
            | password | <password> |
        Then the page should display the message "<message>"

        Examples:
            | username | password             | message                   |
            |          | SuperSecretPassword! | Your username is invalid! |
            | smith    | SuperSecretPassword! | Your username is invalid! |
            | tomsmith |                      | Your password is invalid! |
            | tomsmith | abc                  | Your password is invalid! |

