import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.home.page';
import { USERNAMES } from '../test-data/users';
import { SITE_URLS } from '../test-data/url-data';


test('Positive test: User Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
    await loginPage.open();
    await loginPage.waitForPageLoad(SITE_URLS.BASE_URL_DEV);
    await loginPage.fillLoginForm(USERNAMES.STANDART_USER, process.env.USER_PASSWORD)
    await loginPage.clickLogin();
    await inventoryPage.waitForPageLoad(SITE_URLS.INVENTORY_HOME);
    await inventoryPage.isHeaderLogoDisplayed()
})