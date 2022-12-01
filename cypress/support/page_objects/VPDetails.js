export class VPDetails{
    Entscheide(){
        return cy.get('[akid="SimpleSwatTabbar-Entscheide"]')

    }
}
export const vpDetails = new VPDetails()