import { Page, Locator, expect } from '@playwright/test';

export class ValidarCompraPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly zipInput: Locator;
    readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.zipInput = page.locator('#postal-code');
        this.btnContinue = page.locator('#continue');
    }

    async validarCampos(nombre: string, apellido: string, zip: string) {
        await this.firstNameInput.fill(nombre);
        await this.lastNameInput.fill(apellido);
        await this.zipInput.fill(zip);
        await this.btnContinue.click();
    }

}