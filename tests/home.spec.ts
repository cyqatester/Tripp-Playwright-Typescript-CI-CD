import { test, expect } from '../fixtures/page-fixtures';

test.describe('Home page', () => {
  test('01 - loads the Tripp homepage', async ({ homePage, page }) => {
    await homePage.goto();
    await expect(page).toHaveURL(/tripp\.co\.uk/);
    await expect(page).toHaveTitle(/Tripp/i);
  });

  test('02 - displays the requested logo image', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.logo).toBeVisible();
  });
});