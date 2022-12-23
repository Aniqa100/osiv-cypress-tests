export default {
  SendungenTab() {
    return cy.get( '[akid="EntscheidDetailWindowTabbar-Sendungen"]' );
  },

  findTableRowbyText( text ) {
    return cy.get( "#active-panel .objbox" ).find( "tbody" ).should( "contain.text", text ).find( '[class="akcelllink"]' );
  }
};
