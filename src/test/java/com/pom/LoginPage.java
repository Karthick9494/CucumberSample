package com.pom;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends LibGlobal {
	
	@FindBy(id="username")
	private WebElement txtuser;
	
	@FindBy(id="password")
	private WebElement txtpass;
	
	@FindBy(id="login")
	private WebElement btnlogin;

	public WebElement getTxtuser() {
		return txtuser;
	}

	public WebElement getTxtpass() {
		return txtpass;
	}

	public WebElement getBtnlogin() {
		return btnlogin;
	}
	
	public void entry(String username, String password) {
		
		alertSendKeys(username);
		alertSendKeys(password);
		click(btnlogin);
		
	}
	}
	
	


