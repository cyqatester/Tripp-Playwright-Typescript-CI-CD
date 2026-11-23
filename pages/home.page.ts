import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly cabinAndAirlinesLink: Locator;
  readonly suitcasesLink: Locator;
  readonly travelBagsLink: Locator;
  readonly accessoriesLink: Locator;
  readonly moreLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('img[src$="/images/logo.png"]');
    this.cabinAndAirlinesLink = page.locator('a.toplevelcat.offcanvassubitems').filter({ hasText: 'Cabin And Airlines' });
    this.suitcasesLink = page.getByRole('link', { name: 'Suitcases', exact: true });
    this.travelBagsLink = page.getByRole('link', { name: 'Travel Bags', exact: true });
    this.accessoriesLink = page.getByRole('link', { name: 'Accessories', exact: true });
    this.moreLink = page.getByRole('link', { name: 'MORE...', exact: true });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async openCabinAndAirlines(): Promise<void> {
    await this.cabinAndAirlinesLink.click();
  }

  async openSuitcases(): Promise<void> {
    await this.suitcasesLink.click();
  }

  async openTravelBags(): Promise<void> {
    await this.travelBagsLink.click();
  }

  async openAccessories(): Promise<void> {
    await this.accessoriesLink.click();
  }

  async openMore(): Promise<void> {
    await this.moreLink.click();
  }
}