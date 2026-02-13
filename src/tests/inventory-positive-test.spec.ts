import { test } from '@playwright/test';
import { InventoryPage } from '../pages/inventory.home.page';
import { SITE_URLS } from '../test-data/url-data';
import { login } from '../utils/auth.helper';



test.describe('Cart interactions positive scenarios', () => {
    test('Positive test: Add first item to the cart and verify that badge is visible', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await login(page);
        await inventoryPage.waitForPageLoad(SITE_URLS.INVENTORY_HOME);
        await inventoryPage.addFirstItemToTheCart();
        await inventoryPage.isShoppingCartBadgeVisible()
    })

    test('Positive test: Verify that navigation is displayed in viewport upon click on the hamburger button', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        await login(page);
        await inventoryPage.clickOnTheNavButton();
        await inventoryPage.isSideNavigationVisible();
    })

})