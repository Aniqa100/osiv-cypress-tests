import * as commonButtons from "./CommonButtons.js";
export default {

  ...commonButtons,

  TextForm( text ) {
    cy.get( '[akid="BegruendungHTMLTextForm"]' ).find( ".cke_wysiwyg_div" ).type( text );
  },

  BegründungSpeichernBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBegruendungBlock"]' )
      .find( '[title="Begründung speichern"]' );
  },

  FreitextgenerierenBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]' )
      .find( '[title="Freitext generieren"]' );
  },

  FreitextSpeichernBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]' )
      .find( '[title="Freitext speichern"]' );
  },

  FreitextgenerierenGesetzlicheBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidGesetzlicheGrundlagenBlock"]' )
      .find( '[title="Freitext generieren"]' );
  },

  ValidateTextFormValue( value ) {
    cy.get( '[akid="BegruendungHTMLTextForm"]' ).find( ".cke_wysiwyg_div" ).find( "p" ).invoke( "text" ).then( text => {
      expect( text ).to.equal( value );
    } );
  },

  VerfügungBeiblattAK() {
    return cy.get( '[akid="EntscheidFreitextTabbar-Verfügung / Beiblatt AK"]' );
  },

  GesetzlicheGrundlagen() {
    return cy.get( '[akid="EntscheidFreitextTabbar-Gesetzliche Grundlagen"]' );
  },

  VerifyGeneratedSalutationText( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).find( '[class="OSIVDAbsatz"]' ).eq( 1 )
      .find( "span" ).should( "include.text", `Sehr geehrte Frau ${  value}` )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );
  },

  VerifyGeneratedAnspruchsbeginnabHeader( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", value )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );
  },

  VerifyGeneratedGradderHilflosigkeitValue( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", value )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );
  },

  VerifyGeneratedGradderHilflosigkeitHeader( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", value )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );
  },

  VerifyGeneratedAnspruchsbeginnabValue( date ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", date )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );
  },

  VerifyGeneratedSalutationTextWithoutColor( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).find( '[class="OSIVDAbsatz"]' ).eq( 1 )
      .should( "include.text", `Sehr geehrte Frau ${  value}` );
  },

  VerifyGeneratedAnspruchsbeginnabHeaderWithoutColor( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", value );
  },

  VerifyGeneratedGradderHilflosigkeitValueWithoutColor( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", value );
  },

  VerifyGeneratedGradderHilflosigkeitHeaderWithoutColor( value ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", value );
  },

  VerifyGeneratedAnspruchsbeginnabValueWithoutColor( date ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"] tbody' ).eq( 0 )
      .find( "span" ).should( "include.text", date );
  }

};
