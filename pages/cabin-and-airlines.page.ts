import { Locator, Page } from '@playwright/test';

export class CabinAndAirlinesPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Cabin And Airlines', exact: true, level: 1 });
  }
}