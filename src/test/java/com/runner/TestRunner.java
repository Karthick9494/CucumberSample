package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",glue= {"sam"}, monochrome = true, plugin = {"pretty","html:src\\test\\resources\\Report"})

public class TestRunner {

}
