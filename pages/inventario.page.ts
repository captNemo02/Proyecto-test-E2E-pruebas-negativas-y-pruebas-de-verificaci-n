import { Page, Locator, expect } from '@playwright/test';

export class InventarioPage {
    readonly page: Page;
    readonly inventarioContenido: Locator;
    readonly primerProducto: Locator;
    readonly segundoProducto: Locator;
    readonly carrito: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventarioContenido = page.locator('[data-test="inventory-container"]');
        this.primerProducto = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.segundoProducto = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.carrito = page.locator('[data-test="shopping-cart-link"]');
    }

    //press() => simula la interaccion con el teclado
    //click() => simula la interaccion con el mouse
    async agregarDosProductos() {
        await this.primerProducto.click();
        await this.segundoProducto.click();
        await this.carrito.click();
    }

    async expectInventarioVisible() {
        await expect(this.inventarioContenido).toBeVisible();
    }
}