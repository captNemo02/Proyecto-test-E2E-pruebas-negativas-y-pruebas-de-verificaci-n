import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    //desde el contrusctor inyectamos la dependencia de page:Page
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('h3[data-test="error"]');
    }
    //metodo para cuando se necesite abrir una url
    async goto(url: string): Promise<void> {
        await this.page.goto(url); //url = https://www.saucedemo.com/
    }

    async iniciarSesion(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async alertaErrorVisible() {
        await expect(this.errorMessage).toBeVisible();
    }
}