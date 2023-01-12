export default {
  SendungenTab() {
    return cy.get( '[akid="EntscheidDetailWindowTabbar-Sendungen"]' );
  },

  findTableRowbyText( text ) {
    return cy.get( "#active-panel .objbox" ).find( "tbody" ).find( '[class="akcelllink"]' ).contains( text )
  },

  VerifyEntscheidSendungenGridHasFormular( value ) {
    cy.get( '[akid="eSendungQueryVPContextB"]' ).contains( value )
   },

  VerifyEntscheidSendungenGridNotHasFormular( value ) {
    cy.get( '[akid="eSendungQueryVPContextB"]' )
      .find( '[class="objbox"] tbody td' ).each( ( $td ) =>  {
        cy.wrap( $td ).invoke( "text" ).then( text => {
           expect( text ).not.contain( value );
        } );
      } );
   },
  
};
