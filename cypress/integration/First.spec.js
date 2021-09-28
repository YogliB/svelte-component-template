/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('First Component', () => {
	it('should respond to click on text by resetting', () => {
		cy.visit('http://localhost:6006/iframe.html?id=components-first--jane');
		cy.findByText('Hello Jane!').should('be.visible').dblclick();
		cy.findByText('Hello World!').should('be.visible');
	});
});
