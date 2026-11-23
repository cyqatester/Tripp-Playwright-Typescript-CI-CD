import { Locator, Page } from '@playwright/test';

export class MorePage {
  readonly page: Page;
  readonly productsHeading: Locator;
  readonly cabinAndAirlinesProductLink: Locator;
  readonly firstProductLink: Locator;
  readonly firstProductToAdd: Locator;
  readonly addToBasketButton: Locator;
  readonly checkoutNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsHeading = page.getByRole('heading', { name: 'Products', exact: true, level: 1 });
    this.cabinAndAirlinesProductLink = page.getByRole('link', {
      name: 'Cabin And Airlines',
      exact: true,
    });
    this.firstProductLink = page.locator('a.thumbimagewrap img').first();
    this.firstProductToAdd = page.locator('#mainImageHolder');
    this.addToBasketButton = page.locator('input[type="submit"][value="Add To Basket"]');
    this.checkoutNowButton = page.getByRole('button', {  name: 'checkout now',  exact: true });
  }

  async openCabinAndAirlinesProducts(): Promise<void> {
    await this.cabinAndAirlinesProductLink.click();
  }

  async openFirstProduct(): Promise<void> {
    await this.firstProductLink.click();
    await this.page.waitForTimeout(2000);
  }

  async addFirstProductToBasket(): Promise<void> {
    await this.addToBasketButton.click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutNowButton.click();
  }
}