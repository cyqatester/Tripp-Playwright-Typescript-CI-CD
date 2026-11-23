import { test, expect } from '../fixtures/page-fixtures';

test.describe('More and Products navigation', () => {
  test('11 - displays the More... link on the homepage', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.moreLink).toBeVisible();
  });

  test('12 - opens More and displays the Products heading', async ({ homePage, morePage }) => {
    await homePage.goto();
    await homePage.openMore();
    await expect(morePage.productsHeading).toBeVisible();
  });

  test('13 - displays Cabin And Airlines under Products', async ({ homePage, morePage }) => {
    await homePage.goto();
    await homePage.openMore();
    await expect(morePage.productsHeading).toBeVisible();
    await expect(morePage.cabinAndAirlinesProductLink).toBeVisible();
  });
});