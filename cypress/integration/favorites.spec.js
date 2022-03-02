/// <reference types="cypress" />

describe('Favorites page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites');
  });

  it('should render no data found when dont heve characters in favorites list', () => {
    cy.get('[aria-label="No data found"]');
    cy.contains('Add characters to your favorites list');
  });

  it('should list the charactes in favorites list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[aria-label="3-D Man"]').within(() => {
      cy.get('[data-cy="favorite-icon"]').click();
    });
    cy.visit('http://localhost:3000/favorites');
    cy.get('[aria-label="3-D Man"]');
  });
});
