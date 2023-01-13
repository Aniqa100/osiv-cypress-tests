// https://osiv.testrail.net/index.php?/cases/view/44194
// FINISHED
import { getBaseUrl }   from "../support/utility";
import loginPage        from "../support/page_objects/LoginPage";
import desktop          from "../support/page_objects/Desktop";
import dashboard        from "../support/page_objects/Dashboard";
import entscheidDetails from "../support/page_objects/EntscheidDetails";
import entGrid          from "../support/page_objects/ENTGrid";
import entscheidSendungenTab from "../support/page_objects/EntscheidSendungenTab";
const url = getBaseUrl();

describe( `Test that it should be possible to edit "Supertext" and "Entscheidtyp" with the function "Supertext, Entscheidtyp ändern"${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );

  it( 'Test (ENT1: 22738) that "Supertext, Entscheidtyp ändern" option  is not available in dynselect and Supertext, Entscheidtyp ändern button is enabled', () => {
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

  it( 'Test (ENT1: 22738) that fields "Supertext" and "Entscheidtyp" are enabled, Supertext, Entscheidtyp ändern button is disabled', () => {
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

  it( "Test (ENT1: 22738) that Sendungs (VM, VB or MB) in status Neu are deleted and Sendung (MIB) in status Korrigiert is not deleted", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22738" ).click();
    entGrid.entSelectedRow( "22738" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.EntscheidSendungenTab().click();
    entscheidSendungenTab.VerifyEntscheidSendungenGridNotHasFormular( 'VM' )
    entscheidSendungenTab.VerifyEntscheidSendungenGridNotHasFormular( 'VB' )
    entscheidSendungenTab.VerifyEntscheidSendungenGridNotHasFormular( 'MB' )
    entscheidSendungenTab.VerifyEntscheidSendungenGridHasFormular( 'MIB' )
    entscheidSendungenTab.VerifyEntscheidSendungenGridHasFormular( 'Korrigiert' )
  } );

  it( 'Test (ENT1: 22739) that "Supertext, Entscheidtyp ändern" option  is not available in dynselect and Supertext, Entscheidtyp ändern button is enabled', () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22739" ).click();
    entGrid.entSelectedRow( "22739" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.KorrekturfunktionenBtn().click();
    entscheidDetails.SupertextEntscheidtypändernBtn().click();
    entscheidDetails.ConfirmOKBtn().click();
    entscheidDetails.InfoModalOkBtn().click();
  } );

  it( 'Test (ENT1: 22739) that fields "Supertext" and "Entscheidtyp" are enabled, Supertext, Entscheidtyp ändern button is disabled', () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22739" ).click();
    entGrid.entSelectedRow( "22739" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.VerifySupertextfieldisNOTReadOnly();
    entscheidDetails.VerifyEntscheidTypfieldisNOTReadOnly();
    entscheidDetails.KorrekturfunktionenBtn().click();
    entscheidDetails.VerifyDisabledSupertextEntscheidtypändernBtn();
  } );

  it( 'Test (ENT1: 22739) that fields "Supertext" and "Entscheidtyp" are enabled, Supertext, Entscheidtyp ändern button is disabled', () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22739" ).click();
    entGrid.entSelectedRow( "22739" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidSendungenTab.SendungenTab().click();
    entscheidSendungenTab.VerifyEntscheidSendungenGridHasFormular( '100a' )
    entscheidSendungenTab.VerifyEntscheidSendungenGridHasFormular( '101V' )
  } );
} );
