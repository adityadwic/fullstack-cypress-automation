import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { generateRandomEmail } from '../support/utils';

describe('Test Case 4: Logout User @smoke @login', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  let userData: any;

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data.user;
      userData.email = generateRandomEmail();
      cy.createAccountAPI(userData);
    });
  });

  it('should logout successfully', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Signup/Login button');
    homePage.clickSignupLogin();

    cy.step('4. Verify Login to your account is visible');
    loginPage.verifyLoginVisible();

    cy.step('5. Enter correct email and password');
    cy.get('[data-qa="login-email"]').type(userData.email);
    cy.get('[data-qa="login-password"]').type(userData.password);
    cy.get('[data-qa="login-button"]').click();

    cy.step('6. Verify Logged in as username is visible');
    cy.contains('Logged in as').should('be.visible');

    cy.step('7. Click Logout button');
    cy.get('a[href="/logout"]').click();

    cy.step('8. Verify user is navigated to login page');
    cy.get('.login-form h2').should('contain', 'Login to your account');
  });
});
