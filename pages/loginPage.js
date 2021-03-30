import Page from './page';

class LoginPage extends Page {
  constructor() {
    super();
  }

  get inputUsername() {
    return $('#username');
  }

  get inputPassword() {
    return $('#password');
  }

  get buttonLogin() {
    return $('.radius');
  }

  get labelMessage() {
    return $('.flash');
  }

  open() {
    super.open('/login');
  }

  accessAccount(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.buttonLogin.click();
  }

  getMessage() {
    this.labelMessage.waitForDisplayed();
    return this.labelMessage.getText();
  }
}

export default new LoginPage();
