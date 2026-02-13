import { Page, Locator, expect } from '@playwright/test';

export class CarritoPage {
    readonly page: Page;
    readonly carritoContenido: Locator;
    readonly checkout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.carritoContenido = page.locator('#cart_contents_container');
        this.checkout = page.locator('#checkout');
    }

    async clickBtnCheckout() {
        await this.checkout.click();
    }

    async verificarContenido() {
        await expect(this.carritoContenido).toBeVisible();
    }
}