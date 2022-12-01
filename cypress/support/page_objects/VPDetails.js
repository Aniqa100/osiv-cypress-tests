export class VPDetails{
    Entscheide(){
        return cy.waitUntil(() => cy.get('[akid="SimpleSwatTabbar-Entscheide"]').should('be.visible'))

    }
}
export const vpDetails = new VPDetails()