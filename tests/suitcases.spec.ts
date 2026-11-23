import { test, expect } from '../fixtures/page-fixtures';

test.describe('Suitcases navigation', () => {
  test('05 - displays the Suitcases link on the homepage', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.suitcasesLink).toBeVisible();
  });

  test('06 - opens the Suitcases category', async ({ homePage, suitcasesPage }) => {
    await homePage.goto();
    await homePage.openSuitcases();
    await expect(suitcasesPage.heading).toBeVisible();
  });
});