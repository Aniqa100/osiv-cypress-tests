export default {
  ConfirmBtn() {
    return cy.get( '[class="swal-modal warningModal"]' )
      .find( '[class="swal-button swal-button--replyok"]' )
      .contains( "Ok" );

  },

  ConfirmOKBtn() {
    return cy.get( '[class="swal-modal warningModal"]' )
       .find( '[class="swal-button swal-button--okreply default"]' )
       .contains( "Ok" );

  },

  ModalOkBtn() {
    return cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]' );

  },

  InfoModalOkBtn() {
    return cy.get( '[class="swal-modal informationModal"]' )
        .find( '[class="swal-button swal-button--okreply default"]' )
        .contains( "Ok" );
  } 

};
