import * as commonButtons from "./CommonButtons.js";
export default {

  ...commonButtons,

  Leistungsgruppe() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-leistungsgruppe"]' );
  },

  Leistungscode() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-leistungtext"]' );
  },

  Gesuch() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-gesuchtext"]' );
  },

  Ereignis() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-ereignistext"]' );
  },

  Bereich() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-bereich"]' );
  },

  Bearbeiter() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-bearbeiter"] input' );
  },

  Arbeitsliste() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"] input' );
  },

  Notizen() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-bem"]' ).find( "textarea" );
  },

  Entscheid() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-entscheidvalue"]' );
  },

  Supertext() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-supertextbez"]' );
  },

  Entscheidtyp() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-entscheidtypbez"]' );
  },

  Gebrechen() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-gebrechen"]' );
  },

  Funktausfall() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-funktausfall"]' );
  },

  Beginn() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-beginn_dat"]' );
  },

  HEGrad() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-hegrad"]' );
  },

  HeGradab() {
    return cy.get( "[]" );
  },

  SpeicherBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBearbeitenBlock"]' )
      .find( '[title="Speichern"]' );
  },

  BearbeitungEinleitenBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidSpezifischeBlock"]' )
      .find( '[title="Bearbeitung einleiten"]' );
  },


  KorrekturfunktionenBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"]' ).find( '[class="dhxrb_3rows_button"]' ).contains( 'Korrekturfunktionen' )
  },

  AbschliessenBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"]' ).find( '[title="Abschliessen"]' )
  },

  SupertextEntscheidtypändernBtn() {
    return cy.get('[class="dhtmlxMebu_SubLevelArea_Tbl"]').find('tr').eq(6).find('td').eq(1).find('div').should('have.text','Supertext, Entscheidtyp ändern')
  },

  modalOkBtn( user ) {
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' ).find( '[akid="EntscheidBearbeitungEinleitenForm"]' )
      .then( basicdata => {
        // There was a problem, that assertion runs faster then the values show up on page that why I put cy.waitUntil here. Dunno if it's right, but works
        cy.waitUntil( () => cy.wrap( basicdata ).get( '[akid="EntscheidBearbeitungEinleitenForm-bearbeiter"]' )
          .find( '[value="bearbeiter"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( user );
          } ) );
      } );
    cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]' ).click();
  },

  DurchführungsstellenTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Durchführungsstellen"]' );
  },

  VersicherungenTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Versicherungen"]' );
  },

  EntscheidSendungenTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]' );
  },

  HilflosigkeitTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]' );
  },

  DiskutierenTab() {
    return cy.get( 'akid="EntscheidDetailBasisFrameTabbar-Diskutieren"' );
  },
  
  SelectEntscheidValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-entscheidvalue"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectSupertextValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-supertextbez"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectEntscheidtypValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-entscheidtypbez"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectGebrechenValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-gebrechen"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectFunktausfallValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-funktausfall"]' ).click();
    cy.get( '[class="select2-results__options"]' ).contains( value ).click();
  },

  SelectBeginnValue( today ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-beginn_dat"] input' ).type( today ).click();
  },

  ValidateArbeitslisteValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"] input' )
      .invoke( "prop", "value" ).should( "contain", value );
  },

  ValidateBearbeiterValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-bearbeiter"] input' )
      .invoke( "prop", "value" ).should( "contain", value );
  },

  ValidateLeistungsgruppeValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-leistungsgruppe"]' )
      .contains( value );
  },

  ValidateLeistungscodeValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-leistungtext"]' )
      .contains( value );
  },

  ValidateGesuchValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-gesuchtext"]' )
      .contains( value );
  },

  ValidateEreignisValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-ereignistext"]' )
      .contains( value );
  },

  ValidateBereichValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-bereich"]' )
      .contains( value );
  },

  ValidateNotizenValue( value ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-bem"]' ).find( "textarea" )
      .invoke( "prop", "value" ).should( "contain", value );
  },

  DurchführungsstellenList() {
    return cy.get( "#active-panel .objbox" ).find( "tr" );
  },

  FreitexteTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]' );
  },

  VisierenTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Visieren"]' );
  },

  DiskutierenTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Diskutieren"]' );
  },

  VersicherungenList( text ) {
    cy.contains( text ).parents();
    return cy.get( "#active-panel .objbox" ).find( "tr" );
  },

  ValidateBausteinListHasValue( text ) {
    cy.get( '[akid="BausteinlisteIndiVerfuegungBeiblattGrid"]' ).contains( text );
  },

  ValidateBausteinListHasNotValue( value ) {
    cy.get( '[akid="BausteinlisteIndiVerfuegungBeiblattGrid"]' )
      .find( '[class="objbox"] tbody td' ).each( ( $td ) =>  {
        cy.wrap( $td ).invoke( "text" ).then( text => {
          expect( text ).not.contain( value );
        } );
      } );
  },

  ValidateNotOrangeFreitexteColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]' )
      .should( "not.have.css", "border-left-color", color );
  },

  ValidateOrangeFreitextColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]' )
      .should( "have.css", "border-left-color", color );
  },

  ValidateOrangeBasicDataColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]' )
      .should( "have.css", "border-left-color", color );
  },

  ValidateNotOrangeBasicDataColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]' )
      .should( "not.have.css", "border-left-color", color );
  },

  ValidateOrangeDetailsTabColor( color ) {
    cy.get( '[akid="EntscheidDetailWindowTabbar-Details"]' )
      .should( "have.css", "border-left-color", color );
  },

  ValidateNotOrangeDurchführungsstellenTabColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Durchführungsstellen"]' )
      .should( "not.have.css", "border-left-color", color );
  },

  ValidateOrangeHilflosigkeitTabColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]' )
      .should( "have.css", "border-left-color", color );
  },

  ValidateNotOrangeHilflosigkeitTabColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]' )
      .should( "not.have.css", "border-left-color", color );
  },

  ValidateOrangeEntscheidSendungenColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]' )
      .should( "have.css", "border-left-color", color );
  },

  ValidateNotOrangeEntscheidSendungenColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]' )
      .should( "not.have.css", "border-left-color", color );
  },

  ValidateNotOrangeDiskutierenColor( color ) {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Diskutieren"]' )
      .should( "not.have.css", "border-left-color", color );
  },

  VerifyOrangeVisierenColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Visieren"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  },

  VerifyNotOrangeVisierenColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Visieren"]' )
      .should( "not.have.css", "border-left-color", "rgb(255, 165, 0)" );
  },

  ValidateBitteWarningMsg( msg ) {
    return cy.contains( msg );
  },

  ValidateShouldbefilledMsg( msg ) {
    return cy.contains( msg );
  },

  ValidateNotShouldbefilledMsg( msg ) {
    return cy.contains( msg ).should( "not.exist" );
  },

  VerifySupertextfieldisReadOnly() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-supertextbez"]' ).parent().should( "have.class", "akReadOnlyDynselect" );

  },

  VerifySupertextfieldisNOTReadOnly() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-supertextbez"]' ).parent().should( "not.have.class", "akReadOnlyDynselect" );
    
  },

  VerifyEntscheidTypfieldisReadOnly() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-entscheidtypbez"]' ).parent().should( "have.class", "akReadOnlyDynselect" );
  },

  VerifyEntscheidTypfieldisNOTReadOnly() {
     return cy.get( '[akid="EntscheidDetailBasisDatenForm-entscheidtypbez"]' ).parent().should( "not.have.class", "akReadOnlyDynselect" );
  },

  VerifyDisabledSupertextEntscheidtypändernBtn() {
     return cy.get('[class="dhtmlxMebu_SubLevelArea_Tbl"]').find('tr').eq(6).should('have.class', 'sub_item_dis');
  }

};
