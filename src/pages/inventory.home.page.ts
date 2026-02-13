import { Page } from '@playwright/test';
import { commonPage } from './common/common';
import { SITE_URLS } from '../test-data/url-data';

export class InventoryPage extends commonPage {
  constructor(page: Page) {
    super(page);
  }

  //Inventory Home page locators
  headerLogo = this.page.locator('div.app_logo')
  navMenuButton = this.page.locator('button#react-burger-menu-btn')
  navigationSideMenu = this.page.locator('nav[class="bm-item-list"]')
  addToCartButton = this.page.locator('button[class="btn btn_primary btn_small btn_inventory "]')
  shoppingCartBadge = this.page.locator('span[data-test="shopping-cart-badge"]')

  //Inventory Home page methods and assertions
  async open() {
    await this.navigate(SITE_URLS.INVENTORY_HOME);
  }

  async clickOnTheNavButton () {
    await this.click(this.navMenuButton)
  }

  async isSideNavigationVisible() {
    await this.expectInViewport(this.navigationSideMenu)
  }
  
  async addFirstItemToTheCart(){
    await this.expectVisible(this.addToCartButton.first())
    await this.click(this.addToCartButton.first())
  }

  async isShoppingCartBadgeVisible() {
    await this.expectVisible(this.shoppingCartBadge)
  }

  async isHeaderLogoDisplayed() {
    await this.expectVisible(this.headerLogo);
  }
}