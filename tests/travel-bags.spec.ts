import { test, expect } from '../fixtures/page-fixtures';

test.describe('Travel Bags navigation', () => {
  test('07 - displays the Travel Bags link on the homepage', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.travelBagsLink).toBeVisible();
  });

  test('08 - opens the Travel Bags category', async ({ homePage, travelBagsPage }) => {
    await homePage.goto();
    await homePage.openTravelBags();
    await expect(travelBagsPage.heading).toBeVisible();
  });
});