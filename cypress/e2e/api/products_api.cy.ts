/**
 * API Tests for Products List Endpoint
 * API URL: https://automationexercise.com/api/productsList
 *
 * API 1: GET - Returns all products list (200)
 * API 2: POST - Returns 405 (method not supported)
 */

describe('API 1 & 2: Products List API Tests @api @products', () => {
  const API_URL = 'https://automationexercise.com/api/productsList';

  describe('API 1: GET All Products List', () => {
    it('should return all products list with status 200', () => {
      cy.step('1. Send GET request to /api/productsList');
      cy.request({
        method: 'GET',
        url: API_URL,
      }).then((response) => {
        cy.step('2. Verify response status is 200');
        expect(response.status).to.eq(200);

        cy.step('3. Verify response body contains products list');
        const body = JSON.parse(response.body);
        expect(body.responseCode).to.eq(200);
        expect(body).to.have.property('products');
        expect(body.products).to.be.an('array');
        expect(body.products.length).to.be.greaterThan(0);

        cy.step('4. Verify product structure has required fields');
        const firstProduct = body.products[0];
        expect(firstProduct).to.have.property('id');
        expect(firstProduct).to.have.property('name');
        expect(firstProduct).to.have.property('price');
        expect(firstProduct).to.have.property('brand');
        expect(firstProduct).to.have.property('category');

        cy.log(`✅ Total products returned: ${body.products.length}`);
      });
    });

    it('should return products with valid category structure', () => {
      cy.step('1. Send GET request to /api/productsList');
      cy.request({
        method: 'GET',
        url: API_URL,
      }).then((response) => {
        const body = JSON.parse(response.body);

        cy.step('2. Verify category structure in products');
        const productWithCategory = body.products.find(
          (p: { category: object }) => p.category
        );
        if (productWithCategory) {
          expect(productWithCategory.category).to.have.property('category');
          expect(productWithCategory.category).to.have.property('usertype');
        }
      });
    });
  });

  describe('API 2: POST To All Products List', () => {
    it('should return 405 - method not supported', () => {
      cy.step('1. Send POST request to /api/productsList');
      cy.request({
        method: 'POST',
        url: API_URL,
        failOnStatusCode: false,
      }).then((response) => {
        cy.step('2. Verify response status is 200 (API returns 200 with error message)');
        expect(response.status).to.eq(200);

        cy.step('3. Verify response contains 405 error code and message');
        const body = JSON.parse(response.body);
        expect(body.responseCode).to.eq(405);
        expect(body.message).to.contain('This request method is not supported');

        cy.log('✅ POST method correctly rejected with 405 response code');
      });
    });
  });
});
