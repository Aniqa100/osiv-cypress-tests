export default {
  SendungenTab() {
    return cy.get( '[akid="EntscheidDetailWindowTabbar-Sendungen"]' );
  },

  findTableRowbyText( text ) {
    return cy.get( "#active-panel .objbox" ).find( "tbody" ).find( '[class="akcelllink"]' ).contains( text )
  },


  
  VerifyEntscheidSendungenGridHasFormular( value ) {
    cy.get( '[akid="eSendungQueryVPContextB"]' ).contains( value )
   }
  
};
