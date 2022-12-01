export class Desktop{
    Versicherte() {
        return cy.get('[akid="itFolder-Versicherte"]')
    }
    Adressen(){
        return cy.get('[akid="itFolder-Adressen"]')
    }

}
export const desktop = new Desktop()