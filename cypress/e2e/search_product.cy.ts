import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

describe('Test Case 9: Search Product @smoke @products', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  it('should search for a product successfully', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Products button');
    cy.get('a[href="/products"]').click();

    cy.step('4. Verify ALL PRODUCTS page is visible');
    cy.get('.title').contains('All Products').should('be.visible');

    cy.step('5. Enter product name and click search');
    cy.get('#search_product').type('Top');
    cy.get('#submit_search').click();

    cy.step('6. Verify SEARCHED PRODUCTS is visible');
    cy.get('.title').contains('Searched Products').should('be.visible');

    cy.step('7. Verify search results are visible');
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
  });
});
