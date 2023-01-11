import * as commonButtons from "./CommonButtons.js";
export default {

  ...commonButtons,

  Verfugungsdatum( date ) {
     cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
    .find( '[akid="FinalizeTypAbklaerungUrsprungEntscheidTypVMForm-entscheid_vmdatum"] input' )
    .type ( date ).click();
  },

  
};

