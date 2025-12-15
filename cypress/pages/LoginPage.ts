import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor() {
    super('/login');
  }

  get loginForm() {
    return cy.get('.login-form');
  }

  get signupForm() {
    return cy.get('.signup-form');
  }

  // Login Elements
  get emailInput() {
    return cy.get('[data-qa="login-email"]');
  }

  get passwordInput() {
    return cy.get('[data-qa="login-password"]');
  }

  get loginButton() {
    return cy.get('[data-qa="login-button"]');
  }

  // Signup Elements
  get signupNameInput() {
    return cy.get('[data-qa="signup-name"]');
  }

  get signupEmailInput() {
    return cy.get('[data-qa="signup-email"]');
  }

  get signupButton() {
    return cy.get('[data-qa="signup-button"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  signup(name, email) {
    this.signupNameInput.type(name);
    this.signupEmailInput.type(email);
    this.signupButton.click();
  }

  verifyLoginVisible() {
    cy.get('.login-form h2').should('contain', 'Login to your account');
  }

  verifySignupVisible() {
    cy.get('.signup-form h2').should('contain', 'New User Signup!');
  }

  verifyLoginError(error: string) {
    cy.get('.login-form form p').should('contain', error);
  }

  verifySignupError(error: string) {
    cy.get('.signup-form form p').should('contain', error);
  }
}
