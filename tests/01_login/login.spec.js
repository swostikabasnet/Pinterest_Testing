const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
const { LoginPage } = require("../../pageObjects/login.po");

test.describe("Invalid Login Tests", () => {
  test.describe.configure({ mode: "serial" });
  test.setTimeout(120000);
  test("Both Invalid Credientials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.email,
      testData.invalidUser.password
    );

    await login.verifyInvalidEmailOrPassword();
    await page.waitForTimeout(1000);
  });

  test("Empty username and valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.emptyEmail,
      testData.validUser.password
    );
    await login.verifyEmptyEmail();
    await page.waitForTimeout(1000);
  });

  test("Valid username and empty password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.validUser.email,
      testData.invalidUser.emptyPassword
    );
    await login.verifyEmptyPassword();
    await page.waitForTimeout(1000);
  });
});

test.describe("Valid Login tests", () => {
  test("valid login", async ({ page }) => {
    const login = new LoginPage(page);
    await page.waitForTimeout(2000);
    await login.login(testData.validUser.email, testData.validUser.password);
    await login.verifyValidLogin();
  });
});