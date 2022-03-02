/// <reference types="cypress" />

describe('Detail page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/detail/1016181');
  });

  it('should render detail page correctly', () => {
    cy.contains('Spider-Man');
    cy.contains('Favorite');
    cy.contains('Teenager Miles Morales grew up in Brooklyn');

    cy.get('[data-cy=comic-card]').should('have.length', 20);
  });
});
