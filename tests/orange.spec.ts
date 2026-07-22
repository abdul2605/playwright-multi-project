import { expect } from '@playwright/test';
import { DashBoard } from '../Pages/dash-board';
import { test } from '../fixture/app.fixture';

test.describe('OrangeHRM Tests', () => {
    test('Login and navigate to Admin', async ({ page, homePage, dashBoard }) => {
        await page.goto('/');
        console.log(page.url());

        await homePage.login('Admin', 'admin123');

        await dashBoard.clickAdmin();

        await expect(page).toHaveURL(/.*admin/);
        await expect(dashBoard.Admin).toBeVisible();
    });
});

