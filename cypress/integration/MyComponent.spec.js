/// <reference types="Cypress" />

context('Actions', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5000');
	});

	it('Should render a greeting', () => {
		cy.findByText('Hello World!').should('exist');
	});
});
