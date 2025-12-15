import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
  constructor() {
    super('/product_details');
  }

  get productName() {
    return cy.get('.product-information h2');
  }

  get productCategory() {
    return cy.get('.product-information p').contains('Category');
  }

  get productPrice() {
    return cy.get('.product-information span span');
  }

  get productAvailability() {
    return cy.get('.product-information p').contains('Availability');
  }

  get productCondition() {
    return cy.get('.product-information p').contains('Condition');
  }

  get productBrand() {
    return cy.get('.product-information p').contains('Brand');
  }

  verifyProductDetailsVisible() {
    this.productName.should('be.visible');
    this.productCategory.should('be.visible');
    this.productPrice.should('be.visible');
    this.productAvailability.should('be.visible');
    this.productCondition.should('be.visible');
    this.productBrand.should('be.visible');
  }
}
