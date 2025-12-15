import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  constructor() {
    super();
  }

  verifyAccountCreated() {
    cy.get('h2[data-qa="account-created"]').should(
      'contain',
      'Account Created!'
    );
  }

  verifyAccountDeleted() {
    cy.get('h2[data-qa="account-deleted"]').should(
      'contain',
      'Account Deleted!'
    );
  }

  clickContinue() {
    cy.get('[data-qa="continue-button"]').click();
  }
}
