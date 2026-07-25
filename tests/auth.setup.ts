import {test as setup, expect} from '@playwright/test';
// Why not call fixture
import { HomePage } from '../Pages/home-page';
import { admin } from "../test-data/LoginTestData";
import { console } from 'inspector/promises';


setup("Auth user", async ({page}) => {

    await page.goto('/web/index.php/auth/login');

    const homePage = new HomePage(page);
    console.log('Navigated to login page'+await homePage.getCurrentUrl());
   // await homePage.login('Admin', 'admin123');
    await homePage.login(admin.username, admin.password);

    await page.context().storageState({ path: 'playwright/.auth/auth.json' });


}); 