import { Page, Locator, expect } from '@playwright/test';

export class ResumenCompraPage {
    readonly page: Page;
    readonly finishInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishInput = page.locator('#finish');
    }

    async btnFinishClick() {
        await this.finishInput.click();
    }
}