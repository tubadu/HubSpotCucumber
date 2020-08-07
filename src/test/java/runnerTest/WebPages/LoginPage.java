package runnerTest.WebPages;

import org.openqa.selenium.By;

public class LoginPage extends  ElementUtil{
    private By email=By.id("username");
   private By password=By.id("password");
  private   By loginBtn=By.id("loginBtn");
   private By signUp=By.linkText("Sign up");
 private  By  loginErrorText=By.xpath("//h5[@xpath='1']");

 public void enterEmail(String email2){
     sendValue(email,email2);

 }
 public void enterpassword(String pass){
     sendValue(password,pass);
 }
 public void clickLogin(){
     clickOn(loginBtn);
 }
 public String errormessage(){
     return getTextFromElement(loginErrorText);
 }
 public boolean signupdisplay(){
     return isElementDisplayed(signUp);
 }


}
