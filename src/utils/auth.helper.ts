import { LoginPage } from '../pages/login.page';
import { USERNAMES } from '../test-data/users';
import { Page } from '@playwright/test';

export async function login(page: Page) {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.fillLoginForm(USERNAMES.STANDART_USER, process.env.USER_PASSWORD)
    await loginPage.clickLogin();
}