import { Page, Locator } from '@playwright/test';


export class HomePage{
    readonly userNameText: Locator;
    readonly passwordText: Locator;
    readonly loginButton: Locator ;

    

    constructor(page: Page) {
        // this.userNameText = page.locator('#username');
        // this.passwordText = page.locator('#password');
        // this.loginButton = page.locator('#loginButton');

        this.userNameText = page.getByRole('textbox', { name: 'Username' });
        this.passwordText = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.userNameText.fill("Admin");
        await this.passwordText.fill("admin123");
        await this.loginButton.click();
    }



}

