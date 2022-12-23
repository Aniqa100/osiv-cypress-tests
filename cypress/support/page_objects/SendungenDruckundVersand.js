export default {
  DruckVorschauMW() {
    return  cy.get( '[akid="SimpleSwatTabbar-Druck-Vorschau"]' );
  },

  DruckVersandMW() {
    return cy.get( '[akid="SimpleSwatTabbar-Druck/Versand"]' );
  },

  SelectDruckerAuswählen( value ) {
    cy.get( '[akid="DruckauftragDetailForm-drucker_benutzer"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  }
};
