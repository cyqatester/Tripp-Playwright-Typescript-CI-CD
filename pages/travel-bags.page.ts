import { Locator, Page } from '@playwright/test';

export class TravelBagsPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Travel Bags', exact: true, level: 1 });
  }
}