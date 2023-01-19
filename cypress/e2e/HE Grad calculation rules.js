//https://osiv.testrail.net/index.php?/cases/view/44746
//NOT FINISHED
import { getBaseUrl }   from "../support/utility";
import loginPage        from "../support/page_objects/LoginPage";
import dateHelper          from "../support/DateHelper";
import desktop          from "../support/page_objects/Desktop";
import vpGrid           from "../support/page_objects/VPGrid";
import entGrid          from "../support/page_objects/ENTGrid";
import dashboard        from "../support/page_objects/Dashboard";
import vpDetails        from "../support/page_objects/VPDetails";
import vpEntscheidGrid  from "../support/page_objects/VPEntscheidGrid";
import entscheidDetails from "../support/page_objects/EntscheidDetails";
import entHilflosigkeitTab from "../support/page_objects/EntscheidHilflosigkeitTab";

const url               = getBaseUrl();
const today             = dateHelper.getCurrentDate();

describe( `Verify HE-Grad is calculated correctly ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );
  it( "HE-Grad shows Leicht when assistance is needed in 2 or 3 of the 6 daily living activities", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22690" ).click();
    entGrid.entSelectedRow( "22690" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 5000 );
    entHilflosigkeitTab.SelectAnAuskleidenDate( today );
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    cy.wait( 1000 );
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    cy.wait( 1000 );
    entHilflosigkeitTab.SelectEssenDate( today );
    dashboard.HomeBtn().click();
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.ClearAnAuskleidenDate();
    dashboard.HomeBtn().click();
    entHilflosigkeitTab.ClearAufstehenAbsitzenDate();
    entHilflosigkeitTab.ClreatSelectEssenDate();
    entHilflosigkeitTab.SpeichernBtn().click();
    cy.wait( 1000 );
    
  } );
  it( "HE-Grad shows Leicht when personal supervision is needed", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22690" ).click();
    entGrid.entSelectedRow( "22690" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 5000 );
    entHilflosigkeitTab.SelectPersÜberwachung( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    cy.wait( 2000 );
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.ClearPersÜberwachung();
    dashboard.HomeBtn().click();
    entHilflosigkeitTab.SpeichernBtn().click();
    cy.wait( 1000 );
    
  } );
  it( "HE-Grad shows Leicht when at least one of the 3 areas of practical life assistance is fulfilled", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22690" ).click();
    entGrid.entSelectedRow( "22690" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 5000 );
    entHilflosigkeitTab.SelectWohnenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    cy.wait( 1000 );
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.SelectBegleitungDate( today );
    dashboard.HomeBtn().click();
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    cy.wait( 1000 );
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.SelectIsolationDate( today );
    dashboard.HomeBtn().click();
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    cy.wait( 1000 );
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.ClearWohnenDate();
    dashboard.HomeBtn().click();
    entHilflosigkeitTab.ClearBegleitungDate();
    entHilflosigkeitTab.ClearIsolationDate();
    entHilflosigkeitTab.SpeichernBtn().click();
    cy.wait( 1000 );
} );
} );
