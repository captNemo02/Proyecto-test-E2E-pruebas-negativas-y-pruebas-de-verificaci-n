import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventarioPage } from '../../pages/inventario.page';
import { usuarios } from '../../data/usuarios';

test.describe('login', () => {
    test('cierre de sesion exitosa', async ({ page }) => {
        const login = new LoginPage(page);
        const inventario = new InventarioPage(page);

        await login.goto('https://www.saucedemo.com/');
        await login.iniciarSesion(usuarios.valido.username, usuarios.valido.password);

        await expect(page).toHaveURL(/inventory.html/);
        await inventario.expectInventarioVisible;

        await login.cerrarSesion();

        await login.goto('https://www.saucedemo.com/cart.html');

        await login.alertaErrorVisible();
    });
});