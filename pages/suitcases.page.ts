import { Locator, Page } from '@playwright/test';

export class SuitcasesPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Suitcases', exact: true }).first();
  }
}