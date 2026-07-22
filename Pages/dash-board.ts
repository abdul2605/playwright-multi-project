import { Page, Locator } from '@playwright/test';

export class DashBoard{

    readonly Admin: Locator;
    readonly TimeAtWork: Locator;

    constructor(page: Page) {
        this.Admin = page.getByRole('link', { name: 'Admin' });
        this.TimeAtWork = page.getByText('Time at Work' );
    }

    async clickAdmin() {
        await this.Admin.click();
    }

    async clickTimeAtWork() {
        await this.TimeAtWork.click();
    }

}