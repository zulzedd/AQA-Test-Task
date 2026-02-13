import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ERROR_MESSAGES } from '../test-data/text-data';
import { USERNAMES } from '../test-data/users';



test.describe('Login negative scenarios', () => {
    test('Negative test: Empty fields at login form', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.clickLogin();
        await loginPage.isLoginErrorDisplayed(ERROR_MESSAGES.LOGIN_ERROR_TEXT)
    })

    test('Negative test: Wrong username at login form', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.fillLoginForm(USERNAMES.NONEXISTANT_USER, process.env.USER_PASSWORD)
        await loginPage.clickLogin();
        await loginPage.isLoginErrorDisplayed(ERROR_MESSAGES.LOGIN_WRONG_USERNAME_TEXT)
    })


})