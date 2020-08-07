package stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import runnerTest.WebPages.LoginPage;
import utils.BasePage;

public class LoginSD {
    private LoginPage loginPage=new LoginPage();

    @Given("^I am on Homepage$")
    public void setLoginPage() throws InterruptedException {
        Thread.sleep(6000);
        Assert.assertEquals(BasePage.get().getTitle(),"HubSpot Login");
    }
    @When("^I enter (.+) into (username|password) text fields on home screen$")
    public void enterEmail(String value, String text){
        switch (text){
            case "username":
                loginPage.enterEmail(value);
                break;
            case  "password":
                loginPage.enterpassword(value);
                break;

        }
    }
    @And("^I click on login button on home screen$")
    public void clicklogin(){
        loginPage.clickLogin();
    }
    @Then("^I verify invalid login message on sign in page$")
    public void verifyerrorMessage(){
        Assert.assertEquals(loginPage.errormessage(),"That email address doesn't exist.");
    }
}
