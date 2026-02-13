import { Page } from '@playwright/test';
import { commonPage } from './common/common';
import { SITE_URLS } from '../test-data/url-data';

export class LoginPage extends commonPage {
  constructor(page: Page) {
    super(page);
  }

  //Login page locators
  usernameInput = this.page.locator('input#user-name')
  passwordInput = this.page.locator('input#password')
  loginButton = this.page.locator('#login-button')
  errorMessageBlock = this.page.locator('h3[data-test="error"]')
  
  //Login page methods and assertions
  async open() {
    await this.navigate(SITE_URLS.BASE_URL_DEV);
  }

  async fillLoginForm(username:string, password:string) {
    await this.waitForVisible(this.usernameInput);
    await this.fill(this.usernameInput, username)
    await this.waitForVisible(this.passwordInput);
    await this.fill(this.passwordInput, password)
  }

  async clickLogin() {
    await this.waitForVisible(this.loginButton);
    await this.click(this.loginButton)      
  }

  async isLoginErrorDisplayed(expectedText: string) {
    await this.expectVisible(this.errorMessageBlock);
    await this.expectText(this.errorMessageBlock, expectedText);
  }

}