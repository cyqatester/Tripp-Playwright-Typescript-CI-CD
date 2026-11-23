import { Locator, Page } from '@playwright/test';

export class YourBasketPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly quantityDownImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Your basket', exact: true });
    this.quantityDownImage = page.locator('img[src$="/images/qtydown.png"]');
  }

  async decreaseQuantity(): Promise<void> {
    await this.quantityDownImage.click();
  }
}