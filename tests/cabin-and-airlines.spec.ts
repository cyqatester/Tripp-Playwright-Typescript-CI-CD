import { test, expect } from '../fixtures/page-fixtures';

test.describe('Cabin and Airlines navigation', () => {
  test('03 - displays the Cabin and Airlines link on the homepage', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.cabinAndAirlinesLink).toBeVisible();
  });

  test('04 - opens Cabin And Airlines from the homepage', async ({
    homePage,
    cabinAndAirlinesPage,
  }) => {
    await homePage.goto();
    await homePage.openCabinAndAirlines();
    await expect(cabinAndAirlinesPage.heading).toBeVisible();
  });
});