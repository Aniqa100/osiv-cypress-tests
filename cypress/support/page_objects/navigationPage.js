export default {
  folderVersicherte() {
    cy.waitUntil( () => cy.get( '[akid="itFolder-Versicherte"]' ) );
    cy.get( '[akid="itFolder-Versicherte"]' ).should( "be.visible" ).click();
  },

  folderAdressen() {
    cy.waitUntil( () => cy.get( '[akid="itFolder-Versicherte"]' ) );
    cy.get( '[akid="itFolder-Adressen"]' ).should( "be.visible" ).click();
  },

  folderEntscheide() {
    cy.waitUntil( () => cy.get( '[akid="itFolder-Entscheid"]' ) );
    cy.get( '[akid="itFolder-Entscheid"]' ).should( "be.visible" ).click();
  }
};
