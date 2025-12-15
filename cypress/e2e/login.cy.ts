import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';
import { generateRandomEmail } from '../support/utils';

describe('Test Case 2: Login User with correct email and password @smoke @login', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();
  let userData: any;

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data.user;
      const email = generateRandomEmail();
      userData.email = email;
      cy.createAccountAPI(userData);
    });
  });

  it('should login with correct email and password', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Signup/Login button');
    homePage.clickSignupLogin();

    cy.step('4. Verify Login to your account is visible');
    loginPage.verifyLoginVisible();

    cy.step('5. Enter correct email and password');
    loginPage.login(userData.email, userData.password);

    cy.step('6. Verify Logged in as username is visible');
    homePage.loggedInAs.should('contain', userData.name);

    cy.step('7. Click Delete Account button');
    homePage.deleteAccountButton.click();

    cy.step('8. Verify ACCOUNT DELETED is visible');
    accountPage.verifyAccountDeleted();
  });
});
