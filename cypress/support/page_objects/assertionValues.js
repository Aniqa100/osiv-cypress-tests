export class AssertValues {
  EntscheidCreation( gesuch, ereignis, baraich, user, status, group, code, msg ) {

    cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="CreateEntscheidForm"]' )
      .then( basicdata => {
        // There was a problem, that assertion runs faster then the values show up on page that why I put cy.waitUntil here. Dunno if it's right, but works
        cy.waitUntil( () => cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-bearbeiter"]' )
          .find( '[value="5015"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( user );
          } ) );

        cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-gesuchtext"]' )
          .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( gesuch );
          } );
        cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-ereignistext"]' )
          .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( ereignis );
          } );
        cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-bereich"]' )
          .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( baraich );
          } );
        cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-arbeitslistevalue"]' )
          .find( "input" ).then( input => {
            cy.wrap( input ).invoke( "prop", "value" ).should( "contain", status );
          } );

        cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-leistungsgruppe"]' )
          .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( group );
          } );

        cy.wrap( basicdata ).get( '[akid="CreateEntscheidForm-leistungtext"]' )
          .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
            expect( text ).to.equal( code );
          } );
      } );
    cy.get( '[class="dhxwin_active"][modalwindow="true"]' )
      .find( '[akid="CreateEntscheidForm-createentscheidfieldset"]' )
      .then( data => {
        cy.wrap( data ).get( '[akid="CreateEntscheidForm-bem"]' ).find( "textarea" )
          .then( notes => {
            cy.wrap( notes ).invoke( "prop", "value" ).should( "contain", msg );
          } );
      } );
  }

  EntscheidEditor( status, gesuch, ereignis, baraich, user, group, code, msg ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-fieldsetbasisinformationen"]' ).then( basicdataeditor => {

      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]' )
        .find( "input" ).then( input => {
          cy.wrap( input ).invoke( "prop", "value" ).should( "contain", status );
        } );
      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-gesuchtext"]' )
        .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
          expect( text ).to.equal( gesuch );
        } );
      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-ereignistext"]' )
        .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
          expect( text ).to.equal( ereignis );
        } );
      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-bereich"]' )
        .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
          expect( text ).to.equal( baraich );
        } );
      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-bearbeiter"]' )
        .find( "input" ).then( input => {
          cy.wrap( input ).invoke( "prop", "value" ).should( "contain", user );

        } );
      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-leistungsgruppe"]' )
        .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
          expect( text ).to.equal( group );
        } );
      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-leistungtext"]' )
        .find( '[class="select2-selection__rendered"]' ).invoke( "text" ).then( text => {
          expect( text ).to.equal( code );
        } );
      cy.get( '[akid="EntscheidDetailBasisDatenForm-fieldsetnotizen"]' ).then( data => {
        cy.wrap( data ).get( '[akid="EntscheidDetailBasisDatenForm-bem"]' ).find( "textarea" )
          .then( notes => {
            cy.wrap( notes ).invoke( "prop", "value" ).should( "contain", msg );
          } );
      } );

    } );


  }

  DetailsTabColor() {
    cy.get( '[akid="EntscheidDetailWindowTabbar-Details"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  BasicDataColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  HilflosigkeitColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  HilflosigkeitNotColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]' )
      .should( "not.have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  BasicDataNotColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]' )
      .should( "not.have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  EntscheidStatus( status ) {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-fieldsetbasisinformationen"]' ).then( basicdataeditor => {

      cy.wrap( basicdataeditor ).get( '[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]' )
        .find( "input" ).then( input => {
          cy.wrap( input ).invoke( "prop", "value" ).should( "contain", status );
        } );

    } );
  }

  FreitexteColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  }


  AblaufWartefrist( date ) {

    cy.get( '[akid="EntscheidHilflosigkeitForm-re_ablauf_wf"]' ).find( "input" ).then( input => {
      cy.wrap( input ).invoke( "prop", "value" ).should( "contain", date );
    } );
  }

  Wartefrist( year ) {
    cy.get( '[akid="EntscheidWartefristForm"]' ).then( Wartefrist => {
      cy.wrap( Wartefrist ).get( '[akid="EntscheidWartefristForm-augradds"]' ).find( "input" ).then( input => {
        cy.wrap( input ).invoke( "prop", "value" ).should( "contain", "20 %" );
      } );

      cy.wrap( Wartefrist ).get( '[akid="EntscheidWartefristForm-re_au_grenzgrad"]' ).find( "input" ).then( input => {
        cy.wrap( input ).invoke( "prop", "value" ).should( "contain", "20 %" );
      } ) /

        cy.wrap( Wartefrist ).get( '[akid="EntscheidWartefristForm-audauer"]' ).find( "input" ).then( input => {
          cy.wrap( input ).invoke( "prop", "value" ).should( "contain", year );
        } );
    } );
  }

  WartefristVerlauf( Beginn, Ende, AnzahlTage, HEGradin ) {
    cy.get( '[akid="WartefristQueryGrid"]' ).find( '[class="objbox"]' ).find( "table" ).find( "tbody" ).contains( "tr", "20" )
      .then( row => {
        cy.wrap( row ).find( "td" ).eq( 0 ).should( "contain", Beginn );
        cy.wrap( row ).find( "td" ).eq( 1 ).should( "contain", Ende );
        cy.wrap( row ).find( "td" ).eq( 2 ).should( "contain", AnzahlTage );
        cy.wrap( row ).find( "td" ).eq( 3 ).should( "contain", HEGradin );
      } );
  }

  HEGrad( Ende ) {
    cy.get( '[akid="EntscheidHEGradBerechnungForm"]' ).then( form => {
      cy.wrap( form ).find( '[akid="EntscheidHEGradBerechnungForm-beginnhebez"]' ).should( "contain", "Leicht" );
      cy.wrap( form ).get( '[akid="EntscheidHEGradBerechnungForm-beginn_dat"]' ).find( "input" ).then( input => {
        cy.wrap( input ).invoke( "prop", "value" ).should( "contain", Ende );
      } );

    } );
  }

  HEGradVerlauf( Beginn, Ende, HEGrad ) {
    cy.get( '[akid="HeGradQueryGrid"]' ).find( '[class="objbox"]' ).find( "table" ).find( "tbody" ).contains( "tr", "Leicht" )
      .then( row => {
        cy.wrap( row ).find( "td" ).eq( 0 ).should( "contain", Beginn );
        cy.wrap( row ).find( "td" ).eq( 1 ).should( "contain", Ende );
        cy.wrap( row ).find( "td" ).eq( 2 ).should( "contain", HEGrad );
      } );
  }

  FreitexteNotColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]' )
      .should( "not.have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  EntscheidSendungenColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  EntscheidSendungenNotColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]' )
      .should( "not.have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  VisierenColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Visieren"]' )
      .should( "have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  VisierenNotColor() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Visieren"]' )
      .should( "not.have.css", "border-left-color", "rgb(255, 165, 0)" );
  }

  Durchführungsstellen() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Durchführungsstellen"]' )
      .should( "be.visible" );
  }

  ValidateBitteWarningMsg( msg ) {
    cy.contains( msg );
  }

  ValidateShouldbefilledMsg() {
    cy.contains( "Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)" );
  }

  ShouldbefilledNotExist() {
    cy.contains( "Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)" )
      .should( "not.exist" );
  }

  EntscheidSendungen() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]' )
      .should( "be.visible" );
  }

  Freitexte() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]' )
      .should( "be.visible" );
  }

  Diskutieren() {
    cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Diskutieren"]' )
      .should( "be.visible" );
  }

  TextFormfilling() {
    cy.get( '[akid="BegruendungHTMLTextForm"]' ).find( ".cke_wysiwyg_div" ).find( "p" ).invoke( "text" ).then( text => {
      expect( text ).to.equal( "test" );
    } );
  }

  GeneratedTextWithColore( date ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 1 ).find( '[class="OSIVDAbsatz"]' )
      .find( "span" ).should( "include.text", "Sehr geehrte Frau Wait" )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );

    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( "span" ).should( "include.text", "Grad der Hilflosigkeit" )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );

    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( "span" ).should( "include.text", "Anspruchsbeginn ab:" )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );

    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( "span" ).should( "include.text", "leichten Grades" )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );

    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( "span" ).should( "include.text", date )
      .and( "have.css", "background" ).should( "include", "rgb(255, 255, 0)" );
  }

  GeneratedTextWithoutColore( date ) {
    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 1 ).find( '[class="OSIVDAbsatz"]' )
      .should( "include.text", "Sehr geehrte Frau Eing" );


    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .should( "include.text", "Grad der Hilflosigkeit" );


    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( '[class="X-BausteinGliederung"]' ).should( "include.text", "Anspruchsbeginn ab:" );


    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( '[class="X-BausteinGliederung"]' ).should( "include.text", "leichten Grades" );


    cy.get( '[id="cke_3_contents"]' ).find( '[class="WordSection1"]' ).eq( 4 ).find( "tbody" )
      .find( '[class="X-BausteinGliederung"]' ).should( "include.text", date );
  }


  ExistRow() {
    cy.waitUntil( () => cy.get( '[class=" ev_material rowselected"]' ).should( "be.visible" ) );
    cy.get( '[akid="eSendungQueryVPContextB"]' ).find( '[class=" ev_material rowselected"]' ).contains( "td", "Neu" );
  }

  Finished( status ) {
    cy.waitUntil( () => cy.get( '[akid="SendungHauptdatenForm-arbeitsliste_bez"]' ).should( "be.visible" ) );
    cy.get( '[akid="SendungHauptdatenForm-arbeitsliste_bez"]' ).find( "input" ).then( input => {
      cy.wrap( input ).invoke( "prop", "value" ).should( "contain", status );
    } );
  }


  // Durchführungsstellen table rows
  DurchführungsstellenTableRows() {
    cy.get( "#active-panel .objbox" ).find( "tr" ).then( ( row ) => {
      cy.wrap( row ).eq( 1 ).invoke( "text" ).should( "contain", "Schaeppi Grundstücke per Adresse: Stamm Immobilien AG, Holbeinstrasse 75, 4002 Basel" );
      cy.wrap( row ).eq( 2 ).invoke( "text" ).should( "contain", "Basler Orthopädie René Ruepp AG, Austrasse 109, 4051 Basel" );
      cy.wrap( row ).eq( 3 ).invoke( "text" ).should( "contain", "Ergotherapie Rheinfelden, Petra Leisinger-Burns, Thermenstrasse 11, 4310 Rheinfelden" );
    } );
  }

  VersicherungenTableRows() {
    cy.contains( "MV" ).parents( '[class=" ev_material rowselected"]' ).find( '[class="akcelllink"]' ).invoke( "text" ).then( text => {
      expect( text ).to.equal( "Personalfürsorgestiftung Grosspeter AG, St. Jakob-Strasse 72, 4132 Muttenz" );
    } );
    cy.contains( "UVG" ).parents( '[class=" odd_material"]' ).find( '[class="akcelllink"]' ).invoke( "text" ).then( text => {
      expect( text ).to.equal( "Herr Dr. Peter Bont, Rechtsanwalt und Notar, Dornacherstrasse 26, Postfach, 4603 Olten" );
    } );
  }
}

export const compareValuesOf = new AssertValues();
