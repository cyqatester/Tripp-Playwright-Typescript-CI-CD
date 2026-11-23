import { Locator, Page } from '@playwright/test';

export class AccessoriesPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Travel Accessories', exact: true });
  }
}