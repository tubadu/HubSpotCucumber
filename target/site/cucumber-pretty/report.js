$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 2932745044,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.setLoginPage()"
});
formatter.result({
  "duration": 6200636800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify invalid login",
  "description": "",
  "id": "login-feature;verify-invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I enter tuba@sample.com into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter test12345 into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tuba@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginSD.enterEmail(String,String)"
});
formatter.result({
  "duration": 153848340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12345",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "LoginSD.enterEmail(String,String)"
});
formatter.result({
  "duration": 83053203,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clicklogin()"
});
formatter.result({
  "duration": 94926072,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyerrorMessage()"
});
formatter.result({
  "duration": 39028529,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h5[@xpath\u003d\u00271\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027tubas-MBP.lan\u0027, ip: \u00272605:6000:1516:4081:0:0:0:8edc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/yb/krnghls1475...}, goog:chromeOptions: {debuggerAddress: localhost:52248}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ea2f87a8ad8fefd26283c9e890e87f2d\n*** Element info: {Using\u003dxpath, value\u003d//h5[@xpath\u003d\u00271\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat runnerTest.WebPages.ElementUtil$1.apply(ElementUtil.java:41)\n\tat runnerTest.WebPages.ElementUtil$1.apply(ElementUtil.java:39)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat runnerTest.WebPages.ElementUtil.webAction(ElementUtil.java:39)\n\tat runnerTest.WebPages.ElementUtil.getTextFromElement(ElementUtil.java:72)\n\tat runnerTest.WebPages.LoginPage.errormessage(LoginPage.java:23)\n\tat stepDefinition.LoginSD.verifyerrorMessage(LoginSD.java:37)\n\tat ✽.Then I verify invalid login message on sign in page(Login.feature:10)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1041359625,
  "status": "passed"
});
});