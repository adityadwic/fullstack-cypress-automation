import { BasePage } from './BasePage';

export class SignupPage extends BasePage {
  constructor() {
    super('/signup');
  }

  verifyEnterAccountInfoVisible() {
    cy.get('h2.title').should('contain', 'Enter Account Information');
  }

  get titleMr() {
    return cy.get('#id_gender1');
  }
  get titleMrs() {
    return cy.get('#id_gender2');
  }
  get nameInput() {
    return cy.get('[data-qa="name"]');
  }
  get emailInput() {
    return cy.get('[data-qa="email"]');
  }
  get passwordInput() {
    return cy.get('[data-qa="password"]');
  }

  get daySelect() {
    return cy.get('[data-qa="days"]');
  }
  get monthSelect() {
    return cy.get('[data-qa="months"]');
  }
  get yearSelect() {
    return cy.get('[data-qa="years"]');
  }

  get newsletterCheckbox() {
    return cy.get('#newsletter');
  }
  get specialOffersCheckbox() {
    return cy.get('#optin');
  }

  get firstNameInput() {
    return cy.get('[data-qa="first_name"]');
  }
  get lastNameInput() {
    return cy.get('[data-qa="last_name"]');
  }
  get companyInput() {
    return cy.get('[data-qa="company"]');
  }
  get address1Input() {
    return cy.get('[data-qa="address"]');
  }
  get address2Input() {
    return cy.get('[data-qa="address2"]');
  }
  get countrySelect() {
    return cy.get('[data-qa="country"]');
  }
  get stateInput() {
    return cy.get('[data-qa="state"]');
  }
  get cityInput() {
    return cy.get('[data-qa="city"]');
  }
  get zipcodeInput() {
    return cy.get('[data-qa="zipcode"]');
  }
  get mobileNumberInput() {
    return cy.get('[data-qa="mobile_number"]');
  }

  get createAccountButton() {
    return cy.get('[data-qa="create-account"]');
  }

  fillAccountDetails(details: any) {
    if (details.title === 'Mr') {
      this.titleMr.check();
    } else {
      this.titleMrs.check();
    }

    this.passwordInput.type(details.password);
    this.daySelect.select(details.dob.day);
    this.monthSelect.select(details.dob.month);
    this.yearSelect.select(details.dob.year);

    if (details.newsletter) this.newsletterCheckbox.check();
    if (details.specialOffers) this.specialOffersCheckbox.check();

    this.firstNameInput.type(details.firstName);
    this.lastNameInput.type(details.lastName);
    this.companyInput.type(details.company);
    this.address1Input.type(details.address1);
    this.address2Input.type(details.address2);
    this.countrySelect.select(details.country);
    this.stateInput.type(details.state);
    this.cityInput.type(details.city);
    this.zipcodeInput.type(details.zipcode);
    this.mobileNumberInput.type(details.mobile);
  }

  submit() {
    this.createAccountButton.click();
  }
}
