import { chromium, type FullConfig } from '@playwright/test';
import { usuarios } from './data/usuarios';

async function globalSetup(config: FullConfig) {
    const { baseURL } = config.projects[0].use;

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(baseURL as string);

    await page.locator('#user-name').fill(usuarios.valido.username);
    await page.locator('#password').fill(usuarios.valido.password);
    await page.locator('#login-button').click();

    await page.waitForURL(/inventory\.html/);

    await page.context().storageState({ path: '.auth/storageState.json' });

    await browser.close();
}

export default globalSetup;