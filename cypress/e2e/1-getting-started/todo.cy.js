describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays two todo items by default', () => {
    cy.get('.app-link').should('have.length', 1);
  });
});
