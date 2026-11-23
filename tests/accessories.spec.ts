import { test, expect } from '../fixtures/page-fixtures';

test.describe('Accessories navigation', () => {
  test('09 - displays the Accessories link on the homepage', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.accessoriesLink).toBeVisible();
  });

  test('10 - opens the Travel Accessories category', async ({
    homePage,
    accessoriesPage,
  }) => {
    await homePage.goto();
    await homePage.openAccessories();
    await expect(accessoriesPage.heading).toBeVisible();
  });
});