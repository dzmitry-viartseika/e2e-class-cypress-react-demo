const WEBSITE_LINK = 'http://localhost:5173/';

describe('navigation page', () => {
  it('should navigate between pages', () => {
    cy.visit(WEBSITE_LINK);
    cy.get('[data-cy="header-about-link"]').click();
    cy.location('pathname').should('eq', '/about')
    cy.go('back');
    cy.location('pathname').should('eq', '/')
  })
})