
describe('navigation page', { defaultCommandTimeout: 70000, browser: 'chrome' }, () => {
  it('should navigate between pages', () => {
    cy.visit('/');
    cy.get('[data-cy="header-about-link"]').click();
    cy.location('pathname').should('eq', '/about')
    cy.go('back');
    cy.location('pathname').should('eq', '/')
  })
})