export class Desktop{
    /* Versicherte() {
        return cy.get('[akid="itFolder-Versicherte"]')
    } */
   /*  Adressen(){
        return cy.get('[akid="itFolder-Adressen"]')
    } */
    Versicherte(){
        cy.contains('Versicherte').click()
        cy.get('[id="vsm-link-a317347e-400a-33b3-a214-102b5ae23ac1"]').click()
        
    }
    Adressen(){
        cy.contains('Adressen').click()
        cy.get('[id="vsm-link-a715bf8f-d13e-f8b8-3f14-f962a8e505bd"]').click()
    }
    Entscheid(){
        return cy.contains('Entscheid')
        
    }

}   
export const desktop = new Desktop()