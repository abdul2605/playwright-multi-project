import { expect } from '@playwright/test';
import { test } from '../fixture/app.fixture';

import { admin } from "../test-data/LoginTestData";

test.describe('OrangeHRM Tests', () => {
    test('Login and navigate to Admin', async ({ page, homePage, dashBoard }) => {
        // await page.goto('/');

        // await homePage.navigateTo('/web/index.php/auth/login');
        // console.log('Navigated to login page'+await homePage.getCurrentUrl());
        // await homePage.login(admin.username, admin.password);
        await homePage.navigateTo('web/index.php/dashboard/index');
        await dashBoard.clickAdmin();

        await expect(page).toHaveURL(/.*admin/);
        await expect(dashBoard.Admin).toBeVisible();
    });
});

