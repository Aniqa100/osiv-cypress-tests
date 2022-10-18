describe('Test with Page Objects',() => {

    beforeEach('Login', () => {
        cy.visit('');
        cy.wait(30000);
        cy.get('[name="login_name"]').type('hulk1');
        cy.get('[name="login_password"]').type('hulk1{enter}');
        cy.wait(30000);
    })

} )