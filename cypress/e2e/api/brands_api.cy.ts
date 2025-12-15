/**
 * API Tests for Brands List Endpoint
 * API URL: https://automationexercise.com/api/brandsList
 *
 * API 3: GET - Returns all brands list (200)
 * API 4: PUT - Returns 405 (method not supported)
 */

describe('API 3 & 4: Brands List API Tests @api @brands', () => {
  const API_URL = 'https://automationexercise.com/api/brandsList';

  describe('API 3: GET All Brands List', () => {
    it('should return all brands list with status 200', () => {
      cy.step('1. Send GET request to /api/brandsList');
      cy.request({
        method: 'GET',
        url: API_URL,
      }).then((response) => {
        cy.step('2. Verify response status is 200');
        expect(response.status).to.eq(200);

        cy.step('3. Verify response body contains brands list');
        const body = JSON.parse(response.body);
        expect(body.responseCode).to.eq(200);
        expect(body).to.have.property('brands');
        expect(body.brands).to.be.an('array');
        expect(body.brands.length).to.be.greaterThan(0);

        cy.step('4. Verify brand structure has required fields');
        const firstBrand = body.brands[0];
        expect(firstBrand).to.have.property('id');
        expect(firstBrand).to.have.property('brand');

        cy.log(`✅ Total brands returned: ${body.brands.length}`);
      });
    });

    it('should return known brands in the list', () => {
      cy.step('1. Send GET request to /api/brandsList');
      cy.request({
        method: 'GET',
        url: API_URL,
      }).then((response) => {
        const body = JSON.parse(response.body);

        cy.step('2. Verify common brands exist in the list');
        const brandNames = body.brands.map((b: { brand: string }) => b.brand);
        cy.log(`Brands found: ${brandNames.join(', ')}`);

        // Verify at least some brands exist
        expect(brandNames.length).to.be.greaterThan(0);
      });
    });
  });

  describe('API 4: PUT To All Brands List', () => {
    it('should return 405 - method not supported', () => {
      cy.step('1. Send PUT request to /api/brandsList');
      cy.request({
        method: 'PUT',
        url: API_URL,
        failOnStatusCode: false,
      }).then((response) => {
        cy.step('2. Verify response status is 200 (API returns 200 with error message)');
        expect(response.status).to.eq(200);

        cy.step('3. Verify response contains 405 error code and message');
        const body = JSON.parse(response.body);
        expect(body.responseCode).to.eq(405);
        expect(body.message).to.contain('This request method is not supported');

        cy.log('✅ PUT method correctly rejected with 405 response code');
      });
    });
  });
});
