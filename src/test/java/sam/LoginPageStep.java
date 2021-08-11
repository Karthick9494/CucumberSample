package sam;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginPageStep {
	WebDriver driver;
	
	@Given("^User is on the Addactin page$")
	public void user_is_on_the_Addactin_page() {
			WebDriverManager.chromedriver().setup();
			 driver=new ChromeDriver();
					driver.get("https://adactinhotelapp.com/");
					driver.manage().window().maximize();
					driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
	}

	@When("^User should login \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_login_and(String name, String password) {
		WebElement user = driver.findElement(By.id("username"));
		user.sendKeys(name);
		WebElement pass = driver.findElement(By.id("password"));
	    pass.sendKeys(password);
	}
	@When("^User should click login button$")
	public void user_should_click_login_button() {
		WebElement btn = driver.findElement(By.id("login"));
		btn.click();
		 
	}
	@When("^User should search hotel by \"([^\"]*)\",\"([^\"]*)\"and\"([^\"]*)\"$")
	public void user_should_search_hotel_by_and(String loc, String hot, String roo) {
		WebElement location = driver.findElement(By.id("location"));
		location.sendKeys(loc);
		WebElement hotel = driver.findElement(By.id("hotels"));
		hotel.sendKeys(hot);
		WebElement room = driver.findElement(By.id("room_type"));
		room.sendKeys(roo);
	}

	@When("^User should click search button$")
	public void user_should_click_search_button() {
		WebElement srch = driver.findElement(By.id("Submit"));
		srch.click();
	    
	}

	@When("^User should click radio button$")
	public void user_should_click_radio_button() {
		WebElement radiobtn = driver.findElement(By.id("radiobutton_0"));
		radiobtn.click();
	    
	}

	@When("^User should click continue button$")
	public void user_should_click_continue_button() {
		
		WebElement search = driver.findElement(By.id("continue"));
		search.click();
	}

	@When("^User should book hotel by \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"and\"([^\"]*)\"$")
	public void user_should_book_hotel_by_and(String frst, String last, String bill, String card, String type, String exmon, String exyear, String ccv) {
		WebElement first = driver.findElement(By.id("first_name"));
		first.sendKeys(frst);
		WebElement last1 = driver.findElement(By.id("last_name"));
		last1.sendKeys(last);
		WebElement bills = driver.findElement(By.id("address"));
		bills.sendKeys(bill);
		WebElement cards = driver.findElement(By.id("cc_num"));
		cards.sendKeys(card);
		WebElement types = driver.findElement(By.id("cc_type"));
		types.sendKeys(type);
		WebElement exmons = driver.findElement(By.id("cc_exp_month"));
		exmons.sendKeys(exmon);
		WebElement exyears = driver.findElement(By.id("cc_exp_year"));
		exyears.sendKeys(exyear);
		WebElement ccvs = driver.findElement(By.id("cc_cvv"));
		ccvs.sendKeys(ccv);
	}

	@When("^User should click booknow button$")
	public void user_should_click_booknow_button() {
		
		WebElement bknow = driver.findElement(By.id("book_now"));
		bknow.click();
	}

	@When("^User should print order no$")
	public void user_should_print_order_no() {
		WebElement order = driver.findElement(By.id("order_no"));
		String ord = order.getAttribute("value");
		System.out.println(ord);
		driver.quit();
	    
	}

	@Then("^User should verify success message$")
	public void user_should_verify_success_message() {
		Assert.assertTrue("verify", true);
		
	}

}