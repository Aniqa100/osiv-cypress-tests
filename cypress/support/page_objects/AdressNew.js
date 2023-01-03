import * as commonButtons from "./CommonButtons.js";

export default {

  ...commonButtons,

  AdressType() {
    return cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-adresstyp"]' );
  },

  Name() {
    return cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-nachname"] input' );
  },

  Surename() {
    return cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-vorname"] input' );
  },

  GenerateBtn() {
    return cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-but_kurzadresse_anpassen"]' );
  },

  /*
  ModalOkBtn() {
    return cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]' );
  },

  ConfirmBtn() {
    return cy.get( '[class="swal-modal warningModal"]' ).find( '[class="swal-button swal-button--replyok"]' )
      .contains( "Ok" );
  },
  */

  SelectAdressTypeValue( value ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-adresstyp"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectLanguageTypeValue( value ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-sprache_bez"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectSalutationValue( value ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-anredeartbez"]' ).click( "top" );
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectTitleValue( value ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="sAdresseDetailOverviewForm-titel_adresstitel"]' ).click( "top" );
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectPostalcodeValue( value ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="sAdresseDetailOverviewForm-postleitzahl"]' ).click()
      .get( '[class="select2-search select2-search--dropdown"]' ).type( value )
      .get( '[class="select2-results__options"]' ).find( '[akid="postleitzahl-A52:ce043a166bb566939c1497ce242b3e34"]' ).click();
  }
};
