//Test can be run only one time a day
//https://osiv.testrail.net/index.php?/cases/view/47702
//FINISHED
import { getBaseUrl }                from "../support/utility";
import dateHelper                    from "../support/DateHelper";
import loginPage                     from "../support/page_objects/LoginPage";
import desktop                       from "../support/page_objects/Desktop";
import entGrid                       from "../support/page_objects/ENTGrid";
import dashboard                     from "../support/page_objects/Dashboard";
import entscheidDetails              from "../support/page_objects/EntscheidDetails";
import entscheidSendungenTab         from "../support/page_objects/EntscheidSendungenTab";
import sendungenAbschliessen         from "../support/page_objects/SendungenAbschliessen";
const url = getBaseUrl();
const today  = dateHelper.getCurrentDate();

describe( ` Closing ENT after Verfugung sendung is closed: ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );
  it( ` Test if revision date is set, ENT moved to revision state after all ENT sendungs are closed (with revision date set)`, () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23033" ).click();
    entGrid.entSelectedRow( "23033" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.EntscheidSendungenTab().click();
    entscheidSendungenTab.findTableRowbyText( "VIG" ).click();
    dashboard.HomeBtn().click();
    entscheidDetails.AbschliessenBtn().click();
    sendungenAbschliessen.Verfugungsdatum( today )
    sendungenAbschliessen.ModalOkBtn().click();
    sendungenAbschliessen.ConfirmOKBtn().click();
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23033" ).click();
    entGrid.entSelectedRow( "23033" ).dblclick();
    cy.wait( 2000 );
    dashboard.HomeBtndef().click();
    cy.wait( 1000 );
    entscheidDetails.ValidateArbeitslisteValue( 'Revision' );
    cy.wait( 1000 );

    
  } );
  it( ` Test that ENT is closed after all ENT sendungs are closed (just start date is set)`, () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23034" ).click();
    entGrid.entSelectedRow( "23034" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.EntscheidSendungenTab().click();
    entscheidSendungenTab.findTableRowbyText( "VIG" ).click();
    dashboard.HomeBtn().click();
    entscheidDetails.AbschliessenBtn().click();
    sendungenAbschliessen.Verfugungsdatum( today )
    sendungenAbschliessen.ModalOkBtn().click();
    sendungenAbschliessen.ConfirmOKBtn().click();
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23034" ).click();
    entGrid.entSelectedRow( "23034" ).dblclick();
    cy.wait( 2000 );
    dashboard.HomeBtndef().click();
    cy.wait( 1000 );
    entscheidDetails.ValidateArbeitslisteValue( 'Abgeschlossen' );
    cy.wait( 1000 );
    
  } );

} );