import { BasePage } from './BasePage';

export class ContactUsPage extends BasePage {
    constructor() {
        super('/contact_us');
    }

    get getInTouchHeader() { return cy.get('h2.title').contains('Get In Touch'); }
    get nameInput() { return cy.get('[data-qa="name"]'); }
    get emailInput() { return cy.get('[data-qa="email"]'); }
    get subjectInput() { return cy.get('[data-qa="subject"]'); }
    get messageInput() { return cy.get('[data-qa="message"]'); }
    get uploadFileInput() { return cy.get('input[name="upload_file"]'); }
    get submitButton() { return cy.get('[data-qa="submit-button"]'); }
    get successMessage() { return cy.get('.status.alert-success'); }
    get homeButton() { return cy.get('.btn-success'); }

    verifyContactPageVisible() {
        this.getInTouchHeader.should('be.visible');
    }

    fillContactForm(name: string, email: string, subject: string, message: string) {
        this.nameInput.type(name);
        this.emailInput.type(email);
        this.subjectInput.type(subject);
        this.messageInput.type(message);
    }

    uploadFile(filePath: string) {
        this.uploadFileInput.selectFile(filePath);
    }

    submitForm() {
        this.submitButton.click();
    }

    verifySuccessMessage(msg: string) {
        this.successMessage.should('have.text', msg);
    }

    clickHome() {
        this.homeButton.click();
    }
}
