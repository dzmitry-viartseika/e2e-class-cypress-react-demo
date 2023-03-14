const WEBSITE_LINK_ABOUT = 'http://localhost:5173/about';

describe('contact page', () => {

  beforeEach(() => {
    cy.visit(WEBSITE_LINK_ABOUT);
  })

  it('should submit the form', () => {
    const BUTTON_LOADING_TEXT = 'Sending...';
    const BUTTON_DEFAULT_TEXT = 'Send Message';

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

  it('should submit the form when the User clicked enter keyboard', () => {
    const BUTTON_LOADING_TEXT = 'Sending...';
    const BUTTON_DEFAULT_TEXT = 'Send Message';

    cy.get('[data-cy="contact-input-message"]').type('Hello everybody');
    cy.get('[data-cy="contact-input-name"]').type('Dzmitry');
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr('disabled')).to.be.undefined;
      expect(el.text()).to.eq(BUTTON_DEFAULT_TEXT);
    })
    cy.get('[data-cy="contact-input-email"]').type('test@gmail.com{enter}');
    cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
    cy.get('@submitButton').click();
    cy.get('@submitButton').contains(BUTTON_LOADING_TEXT);
    cy.get('@submitButton').should('have.attr', 'disabled')
  })

  it('should validate the form input', () => {
    const BUTTON_LOADING_TEXT = 'Sending...';
    const INVALID_CLASS = 'invalid';

    cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
    cy.get('[data-cy="contact-input-message"]').as('inputMessage');
    cy.get('[data-cy="contact-input-name"]').as('inputName');
    cy.get('[data-cy="contact-input-email"]').as('inputEmail');

    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled');
      expect(el.text()).to.not.eq(BUTTON_LOADING_TEXT)
    })

    cy.get('@inputMessage').focus().blur();
    cy.get('@inputMessage')
        .parent()
        .should('have.attr', 'class').and('match', /invalid/)

    cy.get('@inputName').focus().blur();
    cy.get('@inputName')
        .parent()
        .should('have.attr', 'class').and('match', /invalid/)

    cy.get('@inputEmail').focus().blur();
    cy.get('@inputEmail')
        .parent()
        .should((el) => {
          expect(el.attr('class')).contains(INVALID_CLASS)
        })

    cy.get('@submitButton').click();
  })
})