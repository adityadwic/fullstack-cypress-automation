import { HomePage } from '../pages/HomePage';
import { ContactUsPage } from '../pages/ContactUsPage';

describe('Test Case 6: Contact Us Form @smoke @contact', () => {
  const homePage = new HomePage();
  const contactUsPage = new ContactUsPage();

  it('should submit contact us form successfully', () => {
    cy.step('1. Navigate to home page');
    homePage.visit();

    cy.step('2. Verify home page is visible');
    homePage.verifyHomePageVisible();

    cy.step('3. Click on Contact Us button');
    homePage.clickContactUs();

    cy.step('4. Verify GET IN TOUCH is visible');
    contactUsPage.verifyContactPageVisible();

    cy.step('5. Enter name, email, subject and message');
    contactUsPage.fillContactForm(
      'Test User',
      'test@example.com',
      'Test Subject',
      'Test Message'
    );

    cy.step('6. Upload file');
    const fileName = 'test-file.txt';
    cy.writeFile(`cypress/fixtures/${fileName}`, 'Hello World');
    contactUsPage.uploadFile(`cypress/fixtures/${fileName}`);

    cy.step('7. Click Submit button');
    // Handle confirmation dialog before clicking
    cy.on('window:confirm', () => true);
    contactUsPage.submitForm();

    cy.step('8. Verify success message is visible');
    cy.get('.status.alert-success').should('be.visible');

    cy.step('9. Click Home button and verify landing');
    contactUsPage.clickHome();
    homePage.verifyHomePageVisible();
  });
});
