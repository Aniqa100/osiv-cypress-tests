//This test case doesn't have any testRail test
//FINISHED
import utility    from "../support/utility";
import loginPage  from "../support/page_objects/LoginPage";
import desktop    from "../support/page_objects/Desktop";
import adressGrid from "../support/page_objects/AdressGrid";
import adressNew  from "../support/page_objects/AdressNew";

const url = utility.getBaseUrl();

describe( `Test to add a new adress with Frau solutation ${ url }`, () => {

  it( "Creating adress", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
    desktop.Adressen().click();
    adressGrid.AddAdressBtn().click();
    adressNew.SelectAdressTypeValue( "024" );
    adressNew.SelectLanguageTypeValue( "Deutsch" );
    adressNew.SelectSalutationValue( "Frau" );
    adressNew.SelectTitleValue( "Dr" );
    adressNew.Name().type( "Anna" );
    adressNew.Surename().type( "Striha" );
    adressNew.SelectPostalcodeValue( "1000" );
    adressNew.GenerateBtn().click();
    cy.wait( 1000 );
    adressNew.ModalOkBtn().click();
    adressNew.ConfirmBtn().click();
  } );
} );
