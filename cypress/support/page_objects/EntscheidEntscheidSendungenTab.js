import * as commonButtons from "./CommonButtons.js";
export default {

  ...commonButtons,

  EntscheidSendungGenerierenBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidEntscheidSendungenBlock"]' )
      .find( '[title="Entscheid-Sendungen generieren"]' );
  },

  VerifyExistedRow( status ) {
    return cy.get( '[akid="eSendungQueryVPContextB"]' ).find( '[class=" ev_material rowselected"]' ).contains( "td", status );
  },

  VisumSpeichernBtn() {
    cy.get( '[akid="EntscheidVisierenForm-visumtypebez"]' ).find( '[title="Visieren (Einzelvisum)"]' )
    cy.get( '[class="dhxrb_3rows_button"][title="Visum speichern"]' ).click()
  },  

};
