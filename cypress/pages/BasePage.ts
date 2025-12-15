export class BasePage {
  url: string;

  constructor(url: string = '/') {
    this.url = url;
  }

  visit() {
    cy.visit(this.url);
  }

  verifyTitle(title: string) {
    cy.title().should('include', title);
  }
}
