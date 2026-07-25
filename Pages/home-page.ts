import { Page, Locator } from '@playwright/test';


export class HomePage{
    readonly userNameText: Locator;
    readonly passwordText: Locator;
    readonly loginButton: Locator ;
    readonly page: Page;

    

    constructor(page: Page) {
        this.page = page;
        // this.userNameText = page.locator('#username');
        // this.passwordText = page.locator('#password');
        // this.loginButton = page.locator('#loginButton');

        this.userNameText = page.getByRole('textbox', { name: 'Username' });
        this.passwordText = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.userNameText.fill(username);
        await this.passwordText.fill(password);
        await this.loginButton.click();
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }



}

