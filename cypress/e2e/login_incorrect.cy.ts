import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

describe('Test Case 3: Login User with incorrect email and password @negative @login', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  it('should show error with incorrect credentials', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Signup/Login button');
    homePage.clickSignupLogin();

    cy.step('4. Verify Login to your account is visible');
    loginPage.verifyLoginVisible();

    cy.step('5. Enter incorrect email and password');
    loginPage.login('wrong_email@example.com', 'wrong_password');

    cy.step('6. Verify error message is displayed');
    loginPage.verifyLoginError('Your email or password is incorrect!');
  });
});
