Feature: verifying Addactin hotel login details

  Scenario Outline: verifying Addactin login
    Given User is on the Addactin page
    When User should login "<username>" and "<password>"
    And User should click login button
    When User should search hotel by "<location>","<hotels>"and"<roomtype>"
    And User should click search button
    And User should click radio button
    And User should click continue button
    When User should book hotel by "<fstname>","<lstname>","<billadd>","<ccno>","<cctype>","<exmon>","<exyr>"and"<cvvno>"
    And User should click booknow button
    And User should print order no
    Then User should verify success message

    Examples:
      | username    | password | location | hotels      | roomtype | fstname | lstname | billadd    | ccno             | cctype | exmon     | exyr | cvvno |
      | Karthick9494| G75P6Q | London   | Hotel Creek | Double   | karthi | Madsamy    | Rameswaram | 7306194628017268 | VISA   | September | 2022 |  374 |
      | Karthick9494| G75P6Q | London   | Hotel Creek | Double   | karthi | Madsamy    | Rameswaram | 7306194628017268 | VISA   | September | 2022 |  374 |
      