import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility"
import 'cypress-wait-until';
import { inputTo } from "../support/page_objects/inputFields";
import { fieldMapping } from "../support/fieldMapping";
import { rowselected } from "../support/page_objects/Tables";
import { pressButton } from "../support/page_objects/Buttons";
import { tabTo } from "../support/page_objects/Tabs";
import { dropdownValue } from "../support/page_objects/dropdownSelection";

const url = new Utility().getBaseUrl();
const EntscheidNr = new Utility().EntscheidNr();

describe('Test to copy Entscheid with all data ' + url,() => {

    beforeEach('Login', () => {
        const url = new Utility().getBaseUrl();
        cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
        cy.visit(url)
    })
    it('Open Entscheid and copy', () => {
        navigateTo.folderVersicherte()
        inputTo.VersichertenName('Wait Will')
        rowselected.firstSelectedRow()
        pressButton.Homebtn()
        //cy.wait I used here cause the element Entscheide tab exists on page but it is not clickable for a while
        tabTo.Entscheide()
        cy.waitUntil(() => cy.get('[akid="EntscheidDetailOverviewForm-fieldsetgrunddaten"]').should('be.visible')) 
        cy.wait(3000)
        cy.get('#active-panel .objbox').find('tbody').then(body =>{
            cy.wrap(body).contains('td', 'ABM').trigger('dblclick')
        })
        pressButton.Homebtn()
    })
  })
