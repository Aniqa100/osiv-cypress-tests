// https://osiv.testrail.net/index.php?/cases/view/50397
// NOT FINISHED
import { getBaseUrl }                from "../support/utility";
import loginPage                     from "../support/page_objects/LoginPage";
import desktop                       from "../support/page_objects/Desktop";
import vpGrid                        from "../support/page_objects/VPGrid";
import dashboard                     from "../support/page_objects/Dashboard";
import vpDetails                     from "../support/page_objects/VPDetails";
import vpEntscheidGrid               from "../support/page_objects/VPEntscheidGrid";
import entscheidDetails              from "../support/page_objects/EntscheidDetails";
import entscheidFreitexteTab         from "../support/page_objects/EntscheidFreitexteTab";
const url = getBaseUrl();

describe( ` Verify that the generation of freetext based on Bausteine takes into account the following validation: ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );
  it( "a. SYSTEM MUST NOT add any travel cost texts into CKEditor if the linked DFStelle has NO travel costs assigned", () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "Käppeli-Erbeia Tom" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    cy.wait( 2000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    vpDetails.Entscheide().click();
    vpEntscheidGrid.findTableRowbyText( "23'137" ).dblclick();
    dashboard.HomeBtn().click();
    entscheidDetails.BearbeitungEinleitenBtn().click();
    //entscheidDetails.modalOkBtn( 'User2 - User2 Zwei' );
    entscheidDetails.FreitexteTab().click()
    entscheidFreitexteTab.FreitextgenerierenBtn().click();
    entscheidFreitexteTab.ConfirmOKBtn().click();
    entscheidFreitexteTab.ConfirmOKBtn().click();
    //entscheidDetails.ValidateBausteinListHasValue('Reisekosten Auflistung')

  } );
} );
