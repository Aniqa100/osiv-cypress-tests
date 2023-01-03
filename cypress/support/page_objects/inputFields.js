// @TODO check if deprecated
export class inputField {
  NameAndSurename( name, surename ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="sAdresseDetailOverviewForm-nachname"]' )
      .find( "input" ).type( name ).tab().type( surename );
  }

  City( city ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="sAdresseDetailOverviewForm-ort"]' )
      .click().type( city );
  }
  /* VersichertenName(name){
    cy.waitUntil(()=> cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]').should('be.visible'))
    cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]').type(name, {delay:20}).clear().type(name).type('{enter}')
   } */

  EntscheidDesktop( fieldName, fieldValue ) {
    switch( fieldName ) {
    case "entscheid_id":
      cy.waitUntil( () => cy.get( fieldMapping.EntscheidDesktopEntscheid_ID ) );
      cy.get( fieldMapping.EntscheidDesktopEntscheid_ID ).type( `${fieldValue  }{enter}` );
      cy.wait( 2000 );
      break;
    }
  }

  TextForm( text ) {
    cy.get( '[akid="BegruendungHTMLTextForm"]' ).find( ".cke_wysiwyg_div" ).type( text );
  }

  

  Betrifft( text ) {
    cy.waitUntil( () => cy.get( '[akid="FreidefvariableForm-Betrifft"]' ).should( "be.visible" ) );
    cy.get( '[akid="FreidefvariableForm-Betrifft"]' ).type( text );
  }

  EntscheidCreationNotes( text ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="CreateEntscheidForm-createentscheidfieldset"]' );
    cy.get( '[akid="CreateEntscheidForm-bem"]' ).find( "textarea" ).clear().type( text );
  }
}

export const inputTo = new inputField();
