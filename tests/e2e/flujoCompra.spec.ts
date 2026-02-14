import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { usuarios } from '../../data/usuarios';
import { InventarioPage } from '../../pages/inventario.page';
import { CarritoPage } from '../../pages/carrito.page';
import { ValidarCompraPage } from '../../pages/validarCompra.page';
import { ResumenCompraPage } from '../../pages/resumenCompra.page';

test.describe('flujo completo de una compra', () => {
    test('flujo', async ({ page }) => {
        //intancias
        const login = new LoginPage(page);
        const inventario = new InventarioPage(page);
        const carrito = new CarritoPage(page);
        const validarCompra = new ValidarCompraPage(page);
        const resumenCompra = new ResumenCompraPage(page);

        await login.goto('https://www.saucedemo.com/');//abre la pagina
        await login.iniciarSesion(usuarios.valido.username, usuarios.valido.password);//ingresa las credenciales validas e ingresa 
        await expect(page).toHaveURL(/inventory\.html/);//verifica si redirige al invetario desde la url
        await inventario.expectInventarioVisible();//valida si carga los valores de inventario
        await inventario.agregarDosProductos();//ya adentro se agrega dos productos y se da al carrito
        await expect(page).toHaveURL(/cart\.html/);//verifica si redirige al carrito desde la url
        await carrito.verificarContenido();//valida si carga los valores de carrito
        await carrito.clickBtnCheckout();//damos click al boton checkout
        await validarCompra.validarCampos('leonardo', 'salazar', '12');//agregamos los campos y damos a continuar
        await expect(page).toHaveURL(/checkout-step-two\.html/);//verifica si redirige al carrito desde la url
        await resumenCompra.btnFinishClick();//damos al boton finish
        //finaliza todo el flujo desde el inicio de sesion hasta la compra de por lo menos un producto
    })
});