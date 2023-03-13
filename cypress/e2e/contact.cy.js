const WEBSITE_LINK_ABOUT = 'http://localhost:5173/about';

describe('contact page', () => {
  it('should submit the form', () => {
    const BUTTON_LOADING_TEXT = 'Sending...';

    cy.visit(WEBSITE_LINK_ABOUT);
    cy.get('[data-cy="contact-input-message"]').type('Hello everybody');
    cy.get('[data-cy="contact-input-name"]').type('Dzmitry');
    cy.get('[data-cy="contact-input-email"]').type('test@gmail.com');
    cy.get('[data-cy="contact-btn-submit"]').click();

    cy.get('[data-cy="contact-btn-submit"]').contains(BUTTON_LOADING_TEXT);
  })
})