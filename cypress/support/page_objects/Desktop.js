export class Desktop{
    Versicherte() {
        return cy.get('[akid="itFolder-Versicherte"]')
    }


}
export const desktop = new Desktop()