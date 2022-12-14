import { Utility } from "../support/Utility"
import { loginPage } from "../support/page_objects/LoginPage";
import { desktop } from "../support/page_objects/Desktop";
import { vpGrid } from "../support/page_objects/VPGrid";
import { dashboard } from "../support/page_objects/Dashboard";
import { vpDetails } from "../support/page_objects/VPDetails";
import { vpEntscheidGrid } from "../support/page_objects/VPEntscheidGrid";
import { entscheidDetails } from "../support/page_objects/EntscheidDetails";
import { entGrid } from "../support/page_objects/ENTGrid";
const url = new Utility().getBaseUrl();

describe('Test that it should be possible to edit "Supertext" and "Entscheidtyp" with the function "Supertext, Entscheidtyp ändern"' + url,() => {
    beforeEach('Login', () => {
        cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
        loginPage.open(url)
    })
    it.only('Test that "Supertext, Entscheidtyp ändern" option  is not available in dynselect', () => {
        desktop.Entscheid().click()
        entGrid.EntscheidID('22738').click()
        entGrid.entSelectedRow('22738').dblclick()
        cy.wait(4000)
        dashboard.HomeBtn().click()
        cy.wait(3000)
        entscheidDetails.VerifySupertextfieldisReadOnly()
        //entscheidDetails.VerifySupertextfieldisNOTReadOnly()
        
    
})
    it('Test that fields "Supertext" and "Entscheidtyp" are enabled', () => {
        desktop.Versicherte().click()
    

})  
    it('Test that Sendungs (VM, VB or MB) in status Neu are deleted', () => {
        desktop.Versicherte().click()


})
    it('Test that Sendung MK (For ENT1 ) has status Korrigiren and not deleted', () => {
        desktop.Versicherte().click()


})  
    it('Test that Other sendungs are not deleted (for ENT2)', () => {
        desktop.Versicherte().click()

})
})