import { test, expect } from '../fixtures/page-fixtures';

test.describe('Cabin and Airlines basket journey', () => {
  test('14 - adds the first Cabin and Airlines item and opens the basket', async ({
    homePage,
    morePage,
    yourBasketPage,
  }) => {
    await homePage.goto();
    await homePage.openMore();

    await expect(morePage.productsHeading).toBeVisible();
    await morePage.openCabinAndAirlinesProducts();

    await expect(morePage.firstProductLink).toBeVisible();
    await morePage.openFirstProduct();

    await expect(morePage.addToBasketButton).toBeVisible();
    await morePage.addFirstProductToBasket();

    await expect(morePage.firstProductToAdd).toBeVisible();

    await expect(morePage.checkoutNowButton).toBeVisible();
    await morePage.proceedToCheckout();

    await expect(yourBasketPage.heading).toBeVisible();
    await expect(yourBasketPage.quantityDownImage).toBeVisible();
    await yourBasketPage.decreaseQuantity();
  });
});