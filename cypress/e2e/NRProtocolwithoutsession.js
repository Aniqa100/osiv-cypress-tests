import { navigateTo } from "../support/page_objects/navigationPage";
import { tabTo } from "../support/page_objects/Tabs";
import { Utility } from "../support/Utility"
import { pressButton } from "../support/page_objects/Buttons";
const {choosenElem} = require("../support/page_objects/elements")
const {inputTo} = require("../support/page_objects/inputFields");
const url = new Utility().getBaseUrl();
describe('First test', () => {


    it('create protocol and remove it', () => {
      cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
      cy.visit(url)
      choosenElem.UserName()
      cy.wait(4000);
      navigateTo.folderVersicherte();
      cy.wait(5000);
      inputTo.VersichertenName('oco');
      cy.wait(2000);
      cy.get('[akid="sStammQueryB-A60-ca8f6374a0d24fb9931417f238627d0a"]').dblclick();
      cy.wait(5000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(5000);
      tabTo.Protocol();
      cy.wait(4000);
       //Creating a new protocol
      cy.contains('[class="dhxrb_block_label"]', 'Versicherter - Protokolleintrag')
      .parents('[class="dhxrb_block_base ribbonBlock_Protokoll Ribbon Block"]')
      .find('[class="dhxrb_3rows_button"][title="Neu"]')
      .click();
      cy.wait(4000);
      
      cy.get('[akid="sProtokollDetailOverviewForm-protokolltypbez"]').click();
      cy.get('[akid="protokolltypbez-A54:111:000004491457"]').click();
      cy.wait(4000);
      cy.get('[class="dhxwin_active"][modalwindow="true"]').find('.cke_wysiwyg_div > p').type('test');
      cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();
      cy.wait(4000);
      // Test if the protocoll created
      cy.get('[class=" ev_material rowselected"]').should('contain.text', 'test');
      cy.get('[class=" ev_material rowselected"]').dblclick();
      cy.wait(4000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      
      cy.wait(1000);
      // Soft removing of a protocol
      cy.get('[class="dhxrb_3rows_button"][title="In den Papierkorb"]').click();
      cy.get('[akid="sProtokollInPapierkorbForm-geloeschtgrund"]').click();
      cy.get('[class="select2-results"]').contains('Falsche Information').click();
      cy.wait(1000);
      cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click(); 
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(2000);
      cy.get('[class="dhx_cell_toolbar_def"]').click();
      cy.wait(2000);
      cy.get('[class="dhxrb_3rows_button"][title="Wiederherstellen"]').click()
      cy.wait(2000);
      cy.get('[class="swal-button-container"]').contains('[class="swal-button swal-button--okreply default"]', 'Ok').click()
      cy.get('[class="dhxrb_3rows_button"][title="In den Papierkorb"]').click();
      cy.get('[akid="sProtokollInPapierkorbForm-geloeschtgrund"]').click();
      //cy.get('[class="select2-results"]').contains('Falsche Information').click();
      //cy.get('[akid="sProtokollInPapierkorbForm"]').click('center');
      cy.get('[class="select2-results"]').type('Falsche Information{enter}');
      cy.wait(1000);
      cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click(); 
      cy.wait(4000);
      pressButton.ProtokollBearbLöschen()
      //cy.get('.ribbonBlock_ProtokollBearbeitenBlock > .dhxrb_block_items > :nth-child(3) > .dhxrb_3rows_button > .dhxrb_label_button').click()
      cy.get('[class="swal-modal confirmModal"]').find('[class="swal-button swal-button--confirm"]').contains('Bestätigen').click()
      cy.wait(1000)
  
      cy.get('[class="dhx_cell_toolbar_def"]').click();
  
   
       
  })
   
  
  })