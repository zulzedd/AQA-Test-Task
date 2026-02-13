import { Page, Locator, expect } from '@playwright/test';


export abstract class commonPage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = '/') {
    await this.page.goto(path);
  }

  async waitForPageLoad(page_url:string) {
    await this.page.waitForURL(page_url)
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async expectInViewport(locator: Locator) {
    await expect(locator).toBeInViewport()
  }

  async expectText(locator: Locator, text: string) {
    await expect(locator).toHaveText(text);
  }
}