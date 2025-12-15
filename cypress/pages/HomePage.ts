import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor() {
    super('/');
  }

  get signupLoginButton() {
    return cy.get('a[href="/login"]');
  }

  get loggedInAs() {
    return cy.contains('Logged in as');
  }

  get deleteAccountButton() {
    return cy.get('a[href="/delete_account"]');
  }

  get logoutButton() {
    return cy.get('a[href="/logout"]');
  }

  get contactUsButton() {
    return cy.get('a[href="/contact_us"]');
  }

  clickLogout() {
    this.logoutButton.click();
  }

  clickContactUs() {
    this.contactUsButton.click();
  }

  get productsButton() {
    return cy.get('a[href="/products"]');
  }

  clickProducts() {
    this.productsButton.click();
  }

  clickSignupLogin() {
    this.signupLoginButton.click();
  }

  verifyHomePageVisible() {
    cy.get('div.features_items').should('be.visible');
    cy.title().should('eq', 'Automation Exercise');
  }
}
