const WEBSITE_LINK_ABOUT = 'http://localhost:5173/about';

describe('contact page', () => {
  it('should submit the form', () => {
    const BUTTON_LOADING_TEXT = 'Sending...';
    const BUTTON_DEFAULT_TEXT = 'Send Message';

    cy.visit(WEBSITE_LINK_ABOUT);
    cy.get('[data-cy="contact-input-message"]').type('Hello everybody');
    cy.get('[data-cy="contact-input-name"]').type('Dzmitry');
    cy.get('[data-cy="contact-input-email"]').type('test@gmail.com');
    cy.get('[data-cy="contact-btn-submit"]').contains(BUTTON_DEFAULT_TEXT).as('submitButton');
    cy.get('@submitButton').should('not.have.attr', 'disabled')
    cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
    cy.get('@submitButton').click();
    cy.get('@submitButton').contains(BUTTON_LOADING_TEXT);
    cy.get('@submitButton').should('have.attr', 'disabled')
  })
})