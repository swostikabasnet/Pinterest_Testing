const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginMainButton = '//div[@data-test-id="simple-login-button"]';
    this.email = '//input[@data-test-id="emailInputField"]';
    this.password = '//input[@data-test-id="passwordInputField"]';
    this.loginButton = '//div[@data-test-id="registerFormSubmitButton"]//button[@type="submit"]';

    this.error = '//h3[@data-test="error"]';
    this.emailError = '//div[@id="email-error"]';
    this.passwordError = '//div[@id="password-error"]';

    this.emptyEmailError = 'You missed a spot! Don\'t forget to add your email.';
    this.invalidEmailError = 'The email you entered does not belong to any account.';
    this.invalidPasswordError = 'The password you entered is incorrect. Try again or Reset your password';

    this.logo = '//div[@data-test-id="pinterest-logo-home-button"]';
  }

  async login(email, password) {
    await this.page.goto("/");
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.loginMainButton).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.email).fill(email);
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.password).fill(password);
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.loginButton).click();
    await this.page.waitForTimeout(2000);
  }

  async verifyValidLogin() {
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator(this.logo)).toBeVisible();
    await this.page.waitForTimeout(1000);
  }

  async verifyInvalidEmailOrPassword() {
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator(this.emailError)).toContainText(this.invalidEmailError);

}

  async verifyEmptyEmail() {
    await expect(this.page.locator(this.emailError)).toContainText(this.emptyEmailError);
  }

  async verifyEmptyPassword() {
    await expect(this.page.locator(this.passwordError)).toContainText(this.invalidPasswordError);
  }

};