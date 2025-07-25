const { expect } = require("@playwright/test");
const testData = require("../fixtures/dashboardFixture.json");

exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    
    
    this.productList = '//div[@data-test-id="max-width-container"]//div[@data-test-id="pin"]';
    this.likeButton = '//div[@data-test-id="react-button"]';
    this.saveButton = '//div[@data-test-id="PinBetterSaveButton"]';
    
    this.viewProfileButton = '//button[@data-test-id="selfProfileHeader-view-profile-button"]';
    this.editProfileButton = '//div[@data-test-id="edit-button"]';
    
    this.firstName = '//input[@id="first_name"]';
    this.lastName = '//input[@id="last_name"]';
    this.profileSaveButton = '//div[@data-test-id="done-button"]';
    
    
    this.profileDropdown = '//button[@data-test-id="header-accounts-options-button"]';
    this.profileButton = '//div[@data-test-id="HeaderAccountsOptionsMenuAccountRep"]';
    this.logoutBtn = '//div[@data-test-id="header-menu-options-logout"]';




    // this.inventoryList = '//div[@data-test="inventory-list"]';
    // // this.productList = '//div[@data-test="inventory-list"]//div[@data-test="inventory-item"]';
    // this.addtoCartButton = '//div[@data-test="inventory-list"]//div[@data-test="inventory-item"]//button';
    // this.cartButton = '//a[@data-test="shopping-cart-link"]';
    
    // this.removeButton = '//div[@data-test="cart-list"]//div[@data-test="inventory-item"]//button';
    // this.checkoutButton = '//button[@data-test="checkout"]';

    // this.firstName = '//input[@data-test="firstName"]';
    // this.lastName = '//input[@data-test="lastName"]';
    // this.postalCode = '//input[@data-test="postalCode"]';
    // this.continueButton = '//input[@data-test="continue"]';
    // this.finishButton = '//button[@data-test="finish"]';

    // this.sidebarMenu = '//button[@id="react-burger-menu-btn"]';
    // this.logoutBtn = '//a[@data-test="logout-sidebar-link"]';
  }

  async savePin() {
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.productList).nth(0).click();
    await this.page.waitForTimeout(4000);
    await this.page.locator(this.likeButton).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.saveButton).click();
    await this.page.waitForTimeout(1000);
  }
  
  async viewProfile() {
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.profileDropdown).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.profileButton).click();
    await this.page.waitForTimeout(2000);
    // await page.evaluate(() => {
    //   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    // });
    await this.page.waitForTimeout(1000); // wait for scroll animation    
  }

  async editProfile() {
    // await this.page.goto("/");
    // await this.page.waitForTimeout(2000);
    // await this.page.locator(this.profileDropdown).click();
    // await this.page.waitForTimeout(2000);
    // await this.page.locator(this.profileButton).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.profileDropdown).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.viewProfileButton).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.editProfileButton).click();
    await this.page.waitForTimeout(2000);


    await this.page.locator(this.firstName).fill(testData.firstName);
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.lastName).fill(testData.lastName);
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.profileSaveButton).click();
    await this.page.waitForTimeout(2000);
  }

  // async removeFromCart() {
  //   await this.page.locator(this.cartButton).click();
  //   await this.page.waitForTimeout(2000);
  //   await this.page.locator(this.removeButton).nth(0).click();
  //   await this.page.waitForTimeout(3000);
  // }

  // async checkout() {
  //   await this.page.waitForTimeout(1000);
  //   await this.page.locator(this.checkoutButton).click();
  //   await this.page.waitForTimeout(1000);
  //   await this.page.locator(this.firstName).fill(testData.firstName);
  //   await this.page.waitForTimeout(1000);
  //   await this.page.locator(this.lastName).fill(testData.lastName);
  //   await this.page.waitForTimeout(1000);
  //   await this.page.locator(this.postalCode).fill(testData.postalCode);
  //   await this.page.waitForTimeout(1000);
  //   await this.page.locator(this.continueButton).click();
  //   await this.page.waitForTimeout(4000);
  //   await this.page.locator(this.finishButton).click();
  //   await this.page.waitForTimeout(2000);
  // }

  async logout() {
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.profileDropdown).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.logoutBtn).click();
    await this.page.waitForTimeout(2000);
  }
};
