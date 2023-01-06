import * as commonButtons from "./CommonButtons.js";
export default {

    ...commonButtons,
  // --------------------------------
  // Buttons
  // --------------------------------
    ProtokollNewBtn() {
        return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_Protokoll Ribbon Block"]' )
          .find( '[title="Neu"]' );
      },
    
    InDenPapierkorbBtn() {
        return cy.get( '[class="dhxrb_3rows_button"][title="In den Papierkorb"]' );
      },

    WiederherstellenBtn() {
        return cy.get( '[class="dhxrb_3rows_button"][title="Wiederherstellen"]' );
      },

    ProtokollBearbLöschenBtn() {
        return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_ProtokollBearbeitenBlock"]' )
          .find( '[class="dhxrb_3rows_button"][title="Löschen"]' );
      },

    ConfirmBestätigenBtn(){
        return cy.get( '[class="swal-modal confirmModal"]' )
        .find( '[class="swal-button swal-button--confirm"]' )
        .contains( "Bestätigen" );
      },

  // --------------------------------
  // Elements
  // --------------------------------

    ToggleGeloescht(){
        return cy.get('[title="Toggle Geloescht"] > .fa-stack > .far')
      },

    ProSelectedRow() {
        return cy.get( '[akid="ProtokollQueryGrid"]' ).find( '[class=" ev_material rowselected"]' ).should( "contain.text", "test" );
      },

  // --------------------------------
  // Selection the value of fields
  // --------------------------------

    SelectLöschGrund( value ) {
        cy.get( '[akid="sProtokollInPapierkorbForm-geloeschtgrund"]' ).click();
        cy.get( '[class="select2-results__options"]' ).contains( value ).click();
      },

    SelectNewProtocoltype( type ) {
        cy.get( '[akid="sProtokollDetailOverviewForm-protokolltypbez"]' ).click();
        cy.get( '[class="select2-results__options"]' ).contains( type ).click();
      },

    SelectNewProtocolFormtext( text ) {
        return cy.get( '[akid="sProtokollDetailOverviewForm"]' ).find( ".cke_wysiwyg_div" ).type( text );
      },

  // --------------------------------
  // Verification of fields values
  // --------------------------------
    VerifyProtocolFormtext( value ) {
          cy.get( '[class="dhxwin_active"]' ).find( '[akid="ProtokollForm"] .cke_wysiwyg_div' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( value );
          })  
      },
    
    VerifyDisabledInDenPapierkorbBtn(){
          cy.get( '[class="dhxrb_3rows_button dhxrb_item_disable"][title="In den Papierkorb"]' )
    },

    VerifyProSelectedRow() {
          cy.get( '[akid="ProtokollQueryGrid"]' ).find( '[class=" ev_material rowselected"]' ).should( "not.contain.text", "test" );
    },

}