import { test as base } from '@playwright/test';
import { AccessoriesPage } from '../pages/accessories.page';
import { CabinAndAirlinesPage } from '../pages/cabin-and-airlines.page';
import { HomePage } from '../pages/home.page';
import { MorePage } from '../pages/more.page';
import { SuitcasesPage } from '../pages/suitcases.page';
import { TravelBagsPage } from '../pages/travel-bags.page';
import { YourBasketPage } from '../pages/your-basket.page';

type PageFixtures = {
  homePage: HomePage;
  cabinAndAirlinesPage: CabinAndAirlinesPage;
  suitcasesPage: SuitcasesPage;
  travelBagsPage: TravelBagsPage;
  accessoriesPage: AccessoriesPage;
  morePage: MorePage;
  yourBasketPage: YourBasketPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cabinAndAirlinesPage: async ({ page }, use) => {
    await use(new CabinAndAirlinesPage(page));
  },
  suitcasesPage: async ({ page }, use) => {
    await use(new SuitcasesPage(page));
  },
  travelBagsPage: async ({ page }, use) => {
    await use(new TravelBagsPage(page));
  },
  accessoriesPage: async ({ page }, use) => {
    await use(new AccessoriesPage(page));
  },
  morePage: async ({ page }, use) => {
    await use(new MorePage(page));
  },
  yourBasketPage: async ({ page }, use) => {
    await use(new YourBasketPage(page));
  },
});

export { expect } from '@playwright/test';