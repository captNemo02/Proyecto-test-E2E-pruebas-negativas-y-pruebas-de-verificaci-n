import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventarioPage } from '../../pages/inventario.page';
import { usuarios } from '../../data/usuarios';

test.describe('login', () => {
    test('login valido y redirige al inventario de productos', async ({ page }) => {
        const login = new LoginPage(page);
        const inventario = new InventarioPage(page);

        await login.goto('https://www.saucedemo.com/');
        await login.iniciarSesion(usuarios.valido.username, usuarios.valido.password)

        await expect(page).toHaveURL(/inventory.html/);
        await inventario.expectInventarioVisible;
    });

    test('login invalido y muestra alerta de error', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto('https://www.saucedemo.com/');
        await login.iniciarSesion(usuarios.invalido.username, usuarios.invalido.password)
        await login.alertaErrorVisible;
    });
});