export class elements {
  UserName() {
    cy.waitUntil( () => cy.get( '[class="akUserInfo"]' ).should( "be.visible" ) );
    cy.get( '[class="akUserInfo"]' ).invoke( "text" ).then( text => {
      expect( text ).to.equal( "Hulk1" );
    } );
  }
}
export const choosenElem = new elements();
