import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  constructor() {
    super('/products');
  }

  get allProductsTitle() {
    return cy.get('.title').contains('All Products');
  }

  get searchedProductsTitle() {
    return cy.get('.title').contains('Searched Products');
  }

  get productsList() {
    return cy.get('.features_items .col-sm-4');
  }

  get searchInput() {
    return cy.get('#search_product');
  }

  get searchButton() {
    return cy.get('#submit_search');
  }

  verifyAllProductsPageVisible() {
    this.allProductsTitle.should('be.visible');
  }

  verifyProductsListVisible() {
    this.productsList.should('have.length.greaterThan', 0);
  }

  clickViewProductFirst() {
    cy.get('.features_items .col-sm-4')
      .first()
      .find('a[href*="product_details"]')
      .click();
  }

  searchProduct(productName: string) {
    this.searchInput.type(productName);
    this.searchButton.click();
  }

  verifySearchedProductsVisible() {
    this.searchedProductsTitle.should('be.visible');
  }

  hoverAndAddToCart(productIndex: number) {
    cy.get('.features_items .col-sm-4')
      .eq(productIndex)
      .trigger('mouseover')
      .find('.add-to-cart')
      .first()
      .click({ force: true });
  }

  clickContinueShopping() {
    cy.get('.modal-footer button').contains('Continue Shopping').click();
  }

  clickViewCart() {
    cy.get('.modal-body a').contains('View Cart').click();
  }
}
