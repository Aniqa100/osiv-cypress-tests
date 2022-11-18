import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility"
import 'cypress-wait-until';
import { inputTo } from "../support/page_objects/inputFields";
import { fieldMapping } from "../support/fieldMapping";

require('cypress-wait-until');

beforeEach('Login', () => {
    const url = new Utility().getBaseUrl();
    cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
    cy.visit(url)
})

// Entscheid 23106 - Rente - EK    
describe('Test InvGrad EK fields',() => {
    it('InvGradEK_Test', () => {
        navigateTo.folderEntscheide();
        inputTo.EntscheidDesktop("entscheid_id","23106");
        //open Entscheid record on Desktop
        let sGridRowName = ""; 
        sGridRowName = fieldMapping.EntscheidGridRow;
        sGridRowName = sGridRowName.replace("SELFHDL","A33-aac2ec2f360651ba9b14bf7bec472d2d");
        
        //cy.waitUntil(() => cy.get(sGridRowName).should('be.visible')).focus();
        cy.waitUntil(() => cy.get('[class=" ev_material rowselected"]').should('be.visible')).focus();
        cy.get('[class=" ev_material rowselected"]').dblclick();
        cy.wait(2000);
        //go to Rente side bar tab
        //open EK record in browse
        //dynselect Lohnart - input Jahreslohn
        //field amount - input 52'000
        //
    })
})
