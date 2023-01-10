// https://osiv.testrail.net/index.php?/cases/view/44194
//NOT FINISHED
import { getBaseUrl }   from "../support/utility";
import loginPage        from "../support/page_objects/LoginPage";
import desktop          from "../support/page_objects/Desktop";
// import vpGrid from "../support/page_objects/VPGrid";
import dashboard        from "../support/page_objects/Dashboard";
// import vpDetails from "../support/page_objects/VPDetails";
// import vpEntscheidGrid from "../support/page_objects/VPEntscheidGrid";
import entscheidDetails from "../support/page_objects/EntscheidDetails";
import entGrid from "../support/page_objects/ENTGrid";

const url = getBaseUrl();

describe( `Test that it should be possible to edit "Supertext" and "Entscheidtyp" with the function "Supertext, Entscheidtyp ändern"${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );

  it( 'Test that "Supertext, Entscheidtyp ändern" option  is not available in dynselect and Supertext, Entscheidtyp ändern button is enabled', () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22738" ).click();
    entGrid.entSelectedRow( "22738" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.VerifySupertextfieldisReadOnly();
    entscheidDetails.VerifyEntscheidTypfieldisReadOnly();
    entscheidDetails.KorrekturfunktionenBtn().click();
    entscheidDetails.SupertextEntscheidtypändernBtn().click();
    entscheidDetails.ConfirmOKBtn().click();
    entscheidDetails.InfoModalOkBtn().click();
  } );

  it( 'Test that fields "Supertext" and "Entscheidtyp" are enabled, Supertext, Entscheidtyp ändern button is disabled', () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22738" ).click();
    entGrid.entSelectedRow( "22738" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.VerifySupertextfieldisNOTReadOnly();
    entscheidDetails.VerifyEntscheidTypfieldisNOTReadOnly();
    entscheidDetails.KorrekturfunktionenBtn().click();
    entscheidDetails.VerifyDisabledSupertextEntscheidtypändernBtn();
  } );

  it( "Test that Sendungs (VM, VB or MB) in status Neu are deleted", () => {
    desktop.Entscheid().click();
  } );

  it( "Test that Sendung MK (For ENT1 ) has status Korrigiren and not deleted", () => {
    desktop.Entscheid().click();
  } );

  it( "Test that Other sendungs are not deleted (for ENT2)", () => {
    desktop.Entscheid().click();
  } );
} );
