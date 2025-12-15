import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor() {
    super('/view_cart');
  }

  get cartItems() {
    return cy.get('#cart_info_table tbody tr');
  }

  verifyProductInCart(productName: string) {
    cy.get('#cart_info_table tbody').should('contain', productName);
  }

  verifyNumberOfProducts(count: number) {
    this.cartItems.should('have.length', count);
  }

  getProductPrice(rowIndex: number) {
    return cy.get('#cart_info_table tbody tr').eq(rowIndex).find('.cart_price');
  }

  getProductQuantity(rowIndex: number) {
    return cy
      .get('#cart_info_table tbody tr')
      .eq(rowIndex)
      .find('.cart_quantity');
  }

  getProductTotal(rowIndex: number) {
    return cy.get('#cart_info_table tbody tr').eq(rowIndex).find('.cart_total');
  }

  verifyCartDetails() {
    this.cartItems.each(($row) => {
      cy.wrap($row).find('.cart_price').should('be.visible');
      cy.wrap($row).find('.cart_quantity').should('be.visible');
      cy.wrap($row).find('.cart_total').should('be.visible');
    });
  }
}
