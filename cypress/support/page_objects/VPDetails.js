export class VPDetails{
    Entscheide(){
        return cy.get('[akid="SimpleSwatTabbar-Entscheide"]')
        /* cy.waitUntil(() => cy.get('[akid="SimpleSwatTabbar-Entscheide"]').should('be.visible'))
        cy.get('[akid="SimpleSwatTabbar-Entscheide"]').click(); */
    }
}
export const vpDetails = new VPDetails()