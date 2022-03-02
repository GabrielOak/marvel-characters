/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should contain 15 characters card as default', () => {
    cy.get('[data-cy=character-card]').should('have.length', 15);
  });

  it('should filter characters by name', () => {
    cy.get('[data-testid=search-input')
      .type('hulk')
      .should('have.value', 'hulk');
    cy.get('[data-testid="icon"]').click();
    cy.contains('Hulk');
  });

  it('should order the charactes', () => {
    cy.get('[data-testid="select-input"]').select('Z-A');
    cy.contains(/zzzax/i);
  });

  it('should go to detail page when clicking on a card', () => {
    cy.get('[aria-label="3-D Man"]').click();
    cy.contains('3-D Man');
    cy.contains('Comics');
    cy.get('[data-cy="button"]').contains('Favorite');
  });

  it('should go to the next page and back', () => {
    cy.get('[aria-label="Previous button"]').should('be.disabled');
    cy.get('[aria-label="Next button"]').click();
    cy.contains('2');
    cy.get('[aria-label="Previous button"]').click();
    cy.contains('1');
  });
});
