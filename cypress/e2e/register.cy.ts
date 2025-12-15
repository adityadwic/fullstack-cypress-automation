import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { AccountPage } from '../pages/AccountPage';
import { generateRandomEmail } from '../support/utils';

describe('Test Case 1: Register User @smoke @register', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();
  const accountPage = new AccountPage();
  let userData: any;

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data.user;
      userData.email = generateRandomEmail();
    });
  });

  it('should register a new user successfully', () => {
    cy.step('1. Launch browser and navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Signup/Login button');
    homePage.clickSignupLogin();

    cy.step('4. Verify New User Signup is visible');
    loginPage.verifySignupVisible();

    cy.step('5. Enter name and email, click Signup');
    loginPage.signup(userData.name, userData.email);

    cy.step('6. Verify ENTER ACCOUNT INFORMATION is visible');
    signupPage.verifyEnterAccountInfoVisible();

    cy.step('7. Fill account details (Title, Password, DOB, Address)');
    signupPage.fillAccountDetails(userData);

    cy.step('8. Click Create Account button');
    signupPage.submit();

    cy.step('9. Verify ACCOUNT CREATED is visible');
    accountPage.verifyAccountCreated();

    cy.step('10. Click Continue button');
    accountPage.clickContinue();

    cy.step('11. Verify Logged in as username is visible');
    homePage.loggedInAs.should('contain', userData.name);

    cy.step('12. Click Delete Account button');
    homePage.deleteAccountButton.click();

    cy.step('13. Verify ACCOUNT DELETED is visible');
    accountPage.verifyAccountDeleted();
    accountPage.clickContinue();
  });
});
