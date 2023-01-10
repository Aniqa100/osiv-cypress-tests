//https://osiv.testrail.net/index.php?/cases/view/47707
//FINISHED
import { getBaseUrl }   from "../support/utility";
import loginPage        from "../support/page_objects/LoginPage";
import desktop          from "../support/page_objects/Desktop";
import vpGrid           from "../support/page_objects/VPGrid";
import dashboard        from "../support/page_objects/Dashboard";
import vpDetails        from "../support/page_objects/VPDetails";
import vpEntscheidGrid  from "../support/page_objects/VPEntscheidGrid";
import entscheidDetails from "../support/page_objects/EntscheidDetails";

const url = getBaseUrl();

describe( `Test to verify if Freetext tab shows or not Baustein 1013+ (Reisekosten Auflistung) ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );
  it( "Test verifies that Freetext tab shows Baustein 1013+", () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "Dynamic-Baustein Emilia" ).type( "{enter}" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    cy.wait( 3000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    vpDetails.Entscheide().click();
    vpEntscheidGrid.findTableRowbyText( "23'039" ).dblclick();
    dashboard.HomeBtn().click();
    entscheidDetails.FreitexteTab().click();
    entscheidDetails.ValidateBausteinListHasValue( "Reisekosten Auflistung" );

  } );
  it( "Test verifies that Freetext tab does NOT show Baustein 1013+ (Reisekosten Auflistung)", () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "Dynamic-Baustein Emilia" );
    vpGrid.vpSelectedRow().trigger( "dblclick" );
    cy.wait( 2000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    vpDetails.Entscheide().click();
    vpEntscheidGrid.findTableRowbyText( "23'040" ).dblclick();
    dashboard.HomeBtn().click();
    entscheidDetails.FreitexteTab().click();
    entscheidDetails.ValidateBausteinListHasNotValue( "Reisekosten Auflistung" );
  } );
} );
