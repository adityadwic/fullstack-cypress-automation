import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

describe('Test Case 8: Verify All Products and product detail page @smoke @products', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const productDetailPage = new ProductDetailPage();

  it('should display all products and product detail page', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Products button');
    homePage.clickProducts();

    cy.step('4. Verify ALL PRODUCTS page is visible');
    productsPage.verifyAllProductsPageVisible();

    cy.step('5. Verify products list is visible');
    productsPage.verifyProductsListVisible();

    cy.step('6. Click View Product of first product');
    productsPage.clickViewProductFirst();

    cy.step('7. Verify product detail page is visible');
    productDetailPage.verifyProductDetailsVisible();
  });
});
