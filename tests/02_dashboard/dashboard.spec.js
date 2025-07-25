const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
const { LoginPage } = require("../../pageObjects/login.po");
const { DashboardPage } = require("../../pageObjects/dashboard.po");

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await page.waitForTimeout(2000);
  await login.login(testData.validUser.email, testData.validUser.password);
  await login.verifyValidLogin();
});

test.afterEach(async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.logout();
});

test.describe("Dashboard Tests", () => {
  test.describe.configure({ mode: "serial" });
  test.setTimeout(120000);
  test.only("Save pin, Edit Profile, Logout", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.savePin();
    await dashboard.viewProfile();
    await dashboard.editProfile();
  });
});
