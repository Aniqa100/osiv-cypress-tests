import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility"
import 'cypress-wait-until';
import { inputTo } from "../support/page_objects/inputFields";
import { fieldMapping } from "../support/fieldMapping";
import { rowselected } from "../support/page_objects/Tables";
import { pressButton } from "../support/page_objects/Buttons";
import { tabTo } from "../support/page_objects/Tabs";

const url = new Utility().getBaseUrl();

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
        //cy.wait I used here cause the element Entscheide tab exists on page but it is not clickable
        cy.wait(2000)
        tabTo.Entscheide()
    })
  })
