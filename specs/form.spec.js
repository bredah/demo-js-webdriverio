import LoginPage from '../pages/loginPage';

const accounts = require('../data/accounts');

describe('Login Form', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  afterEach(() => {
    // browser.deleteSession();
  });

  it('Successfully accessed', () => {
    let account = { ...accounts.admin };
    LoginPage.accessAccount(account.username, account.password);
    let result = LoginPage.getMessage();
    expect(result).toContain('You logged into a secure area!');
  });

  it('Access denied: Username is blank', () => {
    let account = { ...accounts.admin };
    account.username = '';
    LoginPage.accessAccount(account.username, account.password);
    let result = LoginPage.getMessage();
    expect(result).toContain('Your username is invalid!');
  });

  it('Access denied: Username is invalid', () => {
    let account = { ...accounts.admin };
    account.username = 'abc';
    LoginPage.accessAccount(account.username, account.password);
    let result = LoginPage.getMessage();
    expect(result).toContain('Your username is invalid!');
  });

  it('Access denied: Password is blank', () => {
    let account = { ...accounts.admin };
    account.password = '';
    LoginPage.accessAccount(account.username, account.password);
    let result = LoginPage.getMessage();
    expect(result).toContain('Your password is invalid!');
  });

  it('Access denied: Password is invalid', () => {
    let account = { ...accounts.admin };
    account.password = 'abc';
    LoginPage.accessAccount(account.username, account.password);
    let result = LoginPage.getMessage();
    expect(result).toContain('Your password is invalid!');
  });
});
