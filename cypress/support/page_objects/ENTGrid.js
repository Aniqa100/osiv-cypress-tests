export default {
  EntscheidID( value ) {
    return cy.get( '[akid="EntscheidQueryGrid-Entscheid_ID"] input' ).type( value, {delay: 20} ).clear().type( `${value }{enter}` );
  },

  entSelectedRow( value ) {
    return cy.contains( value );
  },

  typevpName( value ) {
    cy.get( '[akid="sStammQueryB-BRS_Versicherten_Name"]' ).type( value, {delay: 20} ).clear().type( `${value }{enter}` );
  }
};
