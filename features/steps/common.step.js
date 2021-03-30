import { After, Given, Then, When } from 'cucumber';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import LoginPage from '../../pages/loginPage';

After(function () {
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
});

Given('I access the Home page', function () {
  LoginPage.open();
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
});

When('I submit the form with the following data:', function (data) {
  let account = {
    ...data.rowsHash(),
  };
  LoginPage.accessAccount(account.username, account.password);
});

Then('the page should display the message {string}', function (message) {
  let result = LoginPage.getMessage();
  expect(result).toContain(message);
});
