

context('Signup', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('succes login', () => {
    cy.get("#app-username").type("admin");
    cy.get("#app-password").type("admin123");
    cy.get("#app-login-button").click();

    cy.get("#app-header-text").should('have.text', 'Nord Software')
  });

  it('failure login', () => {
    cy.get("#app-username").type("admin");
    cy.get("#app-password").type("admin");
    cy.get("#app-login-button").click();

    cy.get("#app-login-error").should('have.text', 'Invalid Login Credentials')
  });
});