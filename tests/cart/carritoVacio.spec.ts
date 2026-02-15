import { test, expect } from '@playwright/test';
import { CarritoPage } from '../../pages/carrito.page';

test.use({ storageState: '.auth/storageState.json' });

//PRUEBA DE ERROR: permite continuar la compra aun cuando en el carrito no se tiene ninguna producto agregado permitiendo realizar una venta de monto 0.
test('carrito vacio(usuario autenticado)', async ({ page }) => {
    const carrito = new CarritoPage(page);
    await page.goto('/cart.html');
    await expect(page).toHaveURL(/cart\.html/);
    await carrito.clickBtnCheckout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
});