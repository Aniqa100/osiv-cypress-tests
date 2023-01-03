import * as commonButtons from "./CommonButtons.js";
export default {

    ...commonButtons,

    ProtokollNewBtn() {
        return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_Protokoll Ribbon Block"]' )
          .find( '[title="Neu"]' );
      },

    ProSelectedRow() {
        return cy.get( '[akid="ProtokollQueryGrid"]' ).find( '[class=" ev_material rowselected"]' ).should( "contain.text", "test" );
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

    ToggleGeloescht(){
        return cy.get('[title="Toggle Geloescht"] > .fa-stack > .far')
    },

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

    
}