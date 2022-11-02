import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility"
import 'cypress-wait-until';

require('cypress-wait-until');

beforeEach('Login', () => {
    const url = new Utility().getBaseUrl();
    cy.visit(url); //use url variable
    cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })
})

// Entscheid 23106 - Rente - EK    
describe('Test InvGrad EK fields',() => {
    it('InvGradEK_Test', () => {
        navigateTo.folderEntscheide();
        
        
    })
})
