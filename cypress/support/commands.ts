/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login
     * @example cy.login('email@example.com', 'password')
     */
    login(email: string, password: string): Chainable<void>;

    /**
     * Custom command to create user via API
     * @example cy.createAccountAPI(userData)
     */
    createAccountAPI(user: any): Chainable<void>;

    /**
     * Custom command for step-by-step reporting
     * @example cy.step('Navigate to home page')
     */
    step(description: string): Chainable<void>;
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('createAccountAPI', (user) => {
    // API Documentation: https://automationexercise.com/api_list
    // Endpoint: POST to /api/createAccount
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true, // Content-Type: application/x-www-form-urlencoded
        body: {
            name: user.name,
            email: user.email,
            password: user.password,
            title: user.title,
            birth_date: user.dob.day,
            birth_month: user.dob.month,
            birth_year: user.dob.year,
            firstname: user.firstName,
            lastname: user.lastName,
            company: user.company,
            address1: user.address1,
            address2: user.address2,
            country: user.country,
            zipcode: user.zipcode,
            state: user.state,
            city: user.city,
            mobile_number: user.mobile
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        const body = JSON.parse(response.body); // API returns stringified JSON sometimes
        expect(body.responseCode).to.eq(201);
        cy.log('User created via API: ' + user.email);
    });
});

// Step command for detailed reporting
Cypress.Commands.add('step', (description: string) => {
    Cypress.log({
        name: '📌 STEP',
        displayName: 'STEP',
        message: description,
        consoleProps: () => {
            return {
                Step: description,
                Timestamp: new Date().toISOString()
            };
        }
    });
});
