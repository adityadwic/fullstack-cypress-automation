import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { generateRandomEmail } from '../support/utils';

describe('Test Case 5: Register User with existing email @negative @register', () => {
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

  it('should show error when registering with existing email', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Signup/Login button');
    homePage.clickSignupLogin();

    cy.step('4. Verify New User Signup is visible');
    loginPage.verifySignupVisible();

    cy.step('5. Enter name and already registered email');
    loginPage.signup(userData.name, userData.email);

    cy.step('6. Verify error Email Address already exist is visible');
    loginPage.verifySignupError('Email Address already exist!');
  });
});
