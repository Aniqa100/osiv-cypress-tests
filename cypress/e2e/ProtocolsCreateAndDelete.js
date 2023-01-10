//This test case doesn't have any testRail test
//FINISHED
import { getBaseUrl } from "../support/utility";
import loginPage      from "../support/page_objects/LoginPage";
import dashboard      from "../support/page_objects/Dashboard";
import vpGrid         from "../support/page_objects/VPGrid";
import desktop        from "../support/page_objects/Desktop";
import VPDetails      from "../support/page_objects/VPDetails";
import protocolDetails from "../support/page_objects/ProtocolDetails";

const url         = getBaseUrl();

describe( "Test to create protocol, softly remove it, undo it and again remove it", () => {

  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );

  it( "create protocol", () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "OConnor Gregory" ).type( "{enter}" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    cy.wait( 3000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    //cy.wait I used here cause the element Protocol tab exists on page but it is not clickable
    VPDetails.Protocol().click();
    protocolDetails.ProtokollNewBtn().click();
    protocolDetails.SelectNewProtocoltype( "BB" )
    protocolDetails.SelectNewProtocolFormtext( "test" )
    protocolDetails.ModalOkBtn().click()
    cy.wait( 4000 );
    protocolDetails.ProSelectedRow().dblclick()
    dashboard.HomeBtn().click();
    protocolDetails.VerifyProtocolFormtext( "test" )
  } );
  it( 'Soft removing of a protocol', () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "OConnor Gregory" ).type( "{enter}" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    cy.wait( 3000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    //cy.wait I used here cause the element Protocol tab exists on page but it is not clickable
    VPDetails.Protocol().click();
    protocolDetails.ProSelectedRow().dblclick();
    dashboard.HomeBtn().click();
    protocolDetails.InDenPapierkorbBtn().click();
    protocolDetails.SelectLöschGrund( "Falsche Information" )
    protocolDetails.ModalOkBtn().click()
    cy.wait( 1000 )
    protocolDetails.VerifyDisabledInDenPapierkorbBtn()
  } );
  it( 'Hard removing of a protocol', () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "OConnor Gregory" ).type( "{enter}" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    cy.wait( 3000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    //cy.wait I used here cause the element Protocol tab exists on page but it is not clickable
    VPDetails.Protocol().click();
    protocolDetails.ToggleGeloescht().click();
    protocolDetails.ProSelectedRow().dblclick();
    dashboard.HomeBtn().click();
    protocolDetails.WiederherstellenBtn().click()
    protocolDetails.ConfirmOKBtn().click()
    protocolDetails.InDenPapierkorbBtn().click();
    protocolDetails.SelectLöschGrund( "Falsche Information" )
    protocolDetails.ModalOkBtn().click()
    protocolDetails.ProtokollBearbLöschenBtn().click()
    protocolDetails.ConfirmBestätigenBtn().click()
    protocolDetails.VerifyProSelectedRow( "test" )
  } );
} );
