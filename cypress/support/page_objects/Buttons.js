export default {

  Generate() {
    cy.waitUntil( () => cy.get( '[akid="sAdresseDetailOverviewForm-anschrift"]' ).should( "be.visible" ) );
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="sAdresseDetailOverviewForm-but_kurzadresse_anpassen"]' ).click();
  },



  modalOkWithWait( user ) {
    //the value for

    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="EntscheidBearbeitungEinleitenForm"]' )
      .then( basicdata => {
        // There was a problem, that assertion runs faster then the values show up on page that why I put cy.waitUntil here. Dunno if it's right, but works
        cy.waitUntil( () => cy.wrap( basicdata ).get( '[akid="EntscheidBearbeitungEinleitenForm-bearbeiter"]' )
          .find( '[value="bearbeiter"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( user );
          } ) );
      } );
    cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]', {delay: 1000} ).click();
  },

  newAdress() {
    cy.get( '[akid="AdresseQueryGrid-AdresseNew"]' ).click();
  },

  confirm() {
    cy.waitUntil( () => cy.get( '[class="swal-modal warningModal"]' ).should( "be.visible" ) );
    cy.get( '[class="swal-modal warningModal"]' ).find( '[class="swal-button swal-button--replyok"]' )
      .contains( "Ok" ).click();
  },

  Warningconfirm() {
    cy.waitUntil( () => cy.get( '[class="swal-modal warningModal"]' ).should( "be.visible" ) );
    cy.get( '[class="swal-modal warningModal"]' ).find( '[class="swal-button swal-button--okreply default"]' )
      .contains( "Ok" ).click();
  },

  //working for FR after ribbon Block class was renamed
  EntscheideNew() {
    cy.waitUntil( () => cy.contains( "Versicherter - Entscheide" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]' )
      .find( '[title="Neu"]' ).click();
  },

  BearbeitungEinleiten() {
    cy.waitUntil( () => cy.contains( "Entscheid spezifische Funktionen" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidSpezifischeBlock"]' )
      .find( '[title="Bearbeitung einleiten"]' ).click();
  },

  SpeichernHilf() {
    cy.waitUntil( () => cy.contains( "Entscheid - Hilflosigkeit" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidHilflosigkeitBlock"]' )
      .find( '[title="Speichern"]' ).click();
  },

  SpeichernBearb() {
    cy.waitUntil( () => cy.contains( "Entscheid bearbeiten" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBearbeitenBlock"]' )
      .find( '[title="Speichern"]' ).click();
  },

  Begründungspeichern() {
    cy.waitUntil( () => cy.contains( "Entscheid - Begründung" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBegruendungBlock"]' )
      .find( '[title="Begründung speichern"]' ).click();
  },

  Freitextgenerieren() {
    cy.waitUntil( () => cy.contains( "Entscheid - Verfügung / Beiblatt AK" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]' )
      .find( '[title="Freitext generieren"]' ).click();
  },

  Freitextspeichern() {
    cy.waitUntil( () => cy.contains( "Entscheid - Verfügung / Beiblatt AK" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]' )
      .find( '[title="Freitext speichern"]' ).click();
  },

  FreitextgenerierenGesetzliche() {
    cy.waitUntil( () => cy.contains( "Entscheid - Gesetzliche Grundlagen" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidGesetzlicheGrundlagenBlock"]' )
      .find( '[title="Freitext generieren"]' ).click();
  },

  EntscheidSendungVerschicken() {
    cy.waitUntil( () => cy.contains( "Entscheid - Entscheid-Sendungen" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidEntscheidSendungenBlock"]' )
      .find( '[title="Entscheid-Sendungen generieren"]' ).click();
  },

  FrageJa() {
    cy.waitUntil( () => cy.get( '[class="swal-modal confirmModal"]' ).should( "be.visible" ) );
    cy.get( '[class="swal-modal confirmModal"]' ).find( '[class="swal-footer"]' ).find( '[class="swal-button swal-button--yesreply default"]' ).click();
  },

  Homebtn() {
    cy.wait( 3000 );
    cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_pres"]' ).click();
    cy.wait( 3000 );
  },

  VisumSpeichern() {
    cy.waitUntil( () => cy.get( '[class="dhxrb_3rows_button"][title="Visum speichern"]' ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_3rows_button"][title="Visum speichern"]' ).click();
  },

  VariablenSpeichern() {
    cy.get( '[class="dhxrb_3rows_button"][title="Variablen speichern"]' ).click();
  },

  DruckVersand() {
    cy.get( '[class="dhxrb_3rows_button"][title="Druck/Versand"]' ).click();
  },

  DruckVorschauMW() {
    cy.waitUntil( () => cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).should( "be.visible" ) );
    cy.get( '[akid="SimpleSwatTabbar-Druck-Vorschau"]' ).click();
  },

  DruckVersandMW() {
    cy.waitUntil( () => cy.get( '[akid="SimpleSwatTabbar-Druck/Versand"]' ).should( "be.visible" ) );
    cy.get( '[akid="SimpleSwatTabbar-Druck/Versand"]' ).click();
  },

  //Protocol buttons

  ProtokollBearbLöschen() {
    cy.waitUntil( () => cy.contains( "Protokolleintrag bearbeiten" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_ProtokollBearbeitenBlock"]' )
      .find( '[class="dhxrb_3rows_button"][title="Löschen"]' ).click();
  },

  ProtokollNew() {
    cy.waitUntil( () => cy.contains( "Versicherter - Protokolleintrag" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_Protokoll Ribbon Block"]' )
      .find( '[title="Neu"]' ).click();
  },

  InDenPapierkorb() {
    cy.get( '[class="dhxrb_3rows_button"][title="In den Papierkorb"]' ).click();
  },

  Wiederherstellen() {
    cy.get( '[class="dhxrb_3rows_button"][title="Wiederherstellen"]' ).click();
  },

  //Refresh grid button
  RefreshGrid() {
    cy.get( "#active-panel" ).find( '[title="Refresh"]' ).click();
  },

  EntscheidBearbKopieren() {
    cy.waitUntil( () => cy.contains( "Entscheid bearbeiten" ).should( "be.visible" ) );
    cy.contains( "Entscheid bearbeiten" ).parents( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBearbeitenBlock"]' )
      .find( '[title="Kopieren"]' ).click();
  },

  EntscheideKopieren() {
    cy.waitUntil( () => cy.contains( "Versicherter - Entscheide" ).should( "be.visible" ) );
    cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]' )
      .find( '[title="Kopieren"]' ).click();
  }
};
