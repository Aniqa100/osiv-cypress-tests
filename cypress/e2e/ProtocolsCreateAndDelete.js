import { navigateTo } from "../support/page_objects/navigationPage";
import { tabTo } from "../support/page_objects/Tabs";
import { Utility } from "../support/Utility"
import { pressButton } from "../support/page_objects/Buttons";
import { rowselected } from "../support/page_objects/Tables";
import { dropdownValue } from "../support/page_objects/dropdownSelection";
const {choosenElem} = require("../support/page_objects/elements")
const {inputTo} = require("../support/page_objects/inputFields");
const url = new Utility().getBaseUrl();
describe('First test', () => {


    it('create protocol and remove it', () => {
      cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
      cy.visit(url)
      choosenElem.UserName()
      navigateTo.folderVersicherte();
      inputTo.VersichertenName('OConnor Gregory');
      rowselected.firstSelectedRow()
      pressButton.Homebtn()
      cy.wait(2000)
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
      // pressButton.Homebtn()
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