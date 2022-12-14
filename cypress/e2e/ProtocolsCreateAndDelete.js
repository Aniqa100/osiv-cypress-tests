import { tabTo } from "../support/page_objects/Tabs";
import { Utility } from "../support/Utility"
import { pressButton } from "../support/page_objects/Buttons";
import { dropdownValue } from "../support/page_objects/dropdownSelection";
const {inputTo} = require("../support/page_objects/inputFields");
import { loginPage } from "../support/page_objects/LoginPage";
import { dashboard } from "../support/page_objects/Dashboard";
import { vpGrid } from "../support/page_objects/VPGrid";
import { desktop } from "../support/page_objects/Desktop";
const url = new Utility().getBaseUrl();
describe('Test to create protocol, softly remove it, undo it and again remove it', () => {
  beforeEach('Login', () => {
    cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
    loginPage.open(url)
})

    it('create protocol and remove it', () => {
      desktop.Versicherte().click()
      vpGrid.vpName().type('OConnor Gregory').type('{enter}')
      vpGrid.vpSelectedRow().trigger('dblclick')
      cy.wait(3000)
      dashboard.HomeBtn().click()
      cy.wait(4000)
      //cy.wait I used here cause the element Protocol tab exists on page but it is not clickable
      tabTo.Protocol();
       //Creating a new protocol 
      pressButton.ProtokollNew()
      dropdownValue.NewProtocoltype('BB')
      inputTo.NewProtocolFormtext('test')
      pressButton.modalOk()
      cy.wait(4000)
      // Test if the protocoll created
      cy.get('[akid="ProtokollQueryGrid"]').find('[class=" ev_material rowselected"]').should('contain.text', 'test').dblclick()
      pressButton.Homebtn()
      // Soft removing of a protocol
      pressButton.InDenPapierkorb()
      dropdownValue.InPapierkorbForm('Falsche Information')
      pressButton.modalOk()
      pressButton.Wiederherstellen() 
      pressButton.Warningconfirm()
      pressButton.InDenPapierkorb()
      dropdownValue.InPapierkorbForm('Falsche Information')
      pressButton.modalOk()
      pressButton.ProtokollBearbLöschen()
      cy.get('[class="swal-modal confirmModal"]').find('[class="swal-button swal-button--confirm"]').contains('Bestätigen').click()
      pressButton.Homebtn()
  
   
       
  })
   
  
  })