import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

describe('Test Case 12: Add Products in Cart @smoke @cart', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  it('should add multiple products to cart', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click Products button');
    homePage.clickProducts();

    cy.step('4. Hover over first product and add to cart');
    productsPage.hoverAndAddToCart(0);

    cy.step('5. Click Continue Shopping');
    productsPage.clickContinueShopping();

    cy.step('6. Hover over second product and add to cart');
    productsPage.hoverAndAddToCart(1);

    cy.step('7. Click View Cart');
    productsPage.clickViewCart();

    cy.step('8. Verify both products are in cart');
    cartPage.verifyNumberOfProducts(2);

    cy.step('9. Verify prices, quantity and total are visible');
    cartPage.verifyCartDetails();
  });
});
