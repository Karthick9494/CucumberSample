$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/LoginAdactin.feature");
formatter.feature({
  "name": "verifying Addactin hotel login details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying Addactin login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Addactin page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should login \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should search hotel by \"\u003clocation\u003e\",\"\u003chotels\u003e\"and\"\u003croomtype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click search button",
  "keyword": "And "
});
formatter.step({
  "name": "User should click radio button",
  "keyword": "And "
});
formatter.step({
  "name": "User should click continue button",
  "keyword": "And "
});
formatter.step({
  "name": "User should book hotel by \"\u003cfstname\u003e\",\"\u003clstname\u003e\",\"\u003cbilladd\u003e\",\"\u003cccno\u003e\",\"\u003ccctype\u003e\",\"\u003cexmon\u003e\",\"\u003cexyr\u003e\"and\"\u003ccvvno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click booknow button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print order no",
  "keyword": "And "
});
formatter.step({
  "name": "User should verify success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "fstname",
        "lstname",
        "billadd",
        "ccno",
        "cctype",
        "exmon",
        "exyr",
        "cvvno"
      ]
    },
    {
      "cells": [
        "Karthick9494",
        "G75P6Q",
        "London",
        "Hotel Creek",
        "Double",
        "karthi",
        "Madsamy",
        "Rameswaram",
        "7306194628017268",
        "VISA",
        "September",
        "2022",
        "374"
      ]
    },
    {
      "cells": [
        "Karthick9494",
        "G75P6Q",
        "London",
        "Hotel Creek",
        "Double",
        "karthi",
        "Madsamy",
        "Rameswaram",
        "7306194628017268",
        "VISA",
        "September",
        "2022",
        "374"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying Addactin login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Addactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_Addactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login \"Karthick9494\" and \"G75P6Q\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search hotel by \"London\",\"Hotel Creek\"and\"Double\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_search_hotel_by_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click radio button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel by \"karthi\",\"Madsamy\",\"Rameswaram\",\"7306194628017268\",\"VISA\",\"September\",\"2022\"and\"374\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_book_hotel_by_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print order no",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_print_order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying Addactin login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Addactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_Addactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login \"Karthick9494\" and \"G75P6Q\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search hotel by \"London\",\"Hotel Creek\"and\"Double\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_search_hotel_by_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click radio button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel by \"karthi\",\"Madsamy\",\"Rameswaram\",\"7306194628017268\",\"VISA\",\"September\",\"2022\"and\"374\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_book_hotel_by_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print order no",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_print_order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
});