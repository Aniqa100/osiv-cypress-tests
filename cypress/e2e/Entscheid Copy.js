import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility"
import 'cypress-wait-until';
import { inputTo } from "../support/page_objects/inputFields";
import { fieldMapping } from "../support/fieldMapping";
import { rowselected } from "../support/page_objects/Tables";
import { pressButton } from "../support/page_objects/Buttons";
import { tabTo } from "../support/page_objects/Tabs";
import { dropdownValue } from "../support/page_objects/dropdownSelection";
import { compareValuesOf } from "../support/page_objects/assertionValues";

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
        rowselected.rowWithCertainText('Test notes on copy')
        pressButton.Homebtn()
        pressButton.EntscheidBearbKopieren()
        compareValuesOf.EntscheidCreation('Gesuch vom 01.02.2022', 'Ereignis Basis vom 22.11.2022', 'IV', 'Hulk1 - Hulk Eins', 'Neu', 'ABM', '281 - (N) Gutachten SAHB Prothetik/Orthetik', 'Test notes on copy')
        inputTo.EntscheidCreationNotes('Copied')
        pressButton.modalOk()
        pressButton.confirm()
        pressButton.Homebtn()
        //compareValuesOf.EntscheidEditor()
        
        
        
        



        cy.request('https://osiv-frtest.ivnet.ch/web/Resource/Osiv.Entscheid.Entscheid.EntscheidBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22entscheid_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A23185%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&clientRequestId=935&filter=%7B%22orderBy%22%3A%22Entscheid_ID%20descending%22%7D&_ts=166929624-4241561549-74')
        .its('body').then((body) => {
        console.log(body)
        })
    
        
        
       

    })
  })
