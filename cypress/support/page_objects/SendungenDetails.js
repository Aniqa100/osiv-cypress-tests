import * as commonButtons from "./CommonButtons.js";
export default {

  ...commonButtons,

  FormularVariablen() {
    return cy.get( '[akid="SendungDetailsTabTabbar-Formular Variablen"]' );
  },

  Betrifft() {
    return cy.get( '[akid="FreidefvariableForm-Betrifft"]' );
  },

  VariablenSpeichernBtn() {
    return cy.get( '[class="dhxrb_3rows_button"][title="Variablen speichern"]' );
  },

  DruckVersandBtn() {
    return cy.get( '[class="dhxrb_3rows_button"][title="Druck/Versand"]' );
  },

  /* ModalOkBtn() {
    return cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]' );
  }, */

  FrageJaBtn() {
    return cy.get( '[class="swal-modal confirmModal"]' ).find( '[class="swal-footer"]' )
      .find( '[class="swal-button swal-button--yesreply default"]' );
  },

  VerifyArbeitslists( status ) {
    cy.waitUntil( () => cy.get( '[akid="SendungHauptdatenForm-arbeitsliste_bez"]' ).should( "be.visible" ) );
    cy.get( '[akid="SendungHauptdatenForm-arbeitsliste_bez"]' ).find( "input" ).then( input => {
      cy.wrap( input ).invoke( "prop", "value" ).should( "contain", status );
    } );
  }
};
