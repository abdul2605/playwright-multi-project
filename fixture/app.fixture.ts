import { test as base } from '@playwright/test';
import { HomePage } from '../Pages/home-page';
import { DashBoard } from '../Pages/dash-board';

type AppFixture = {
    homePage: HomePage;
    dashBoard: DashBoard;
};

export const test = base.extend<AppFixture>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    dashBoard: async ({ page }, use) => {
        const dashBoard = new DashBoard(page);
        await use(dashBoard);
    },
});

