//https://osiv.testrail.net/index.php?/cases/view/44746
//FINISHED
import { getBaseUrl }   from "../support/utility";
import loginPage        from "../support/page_objects/LoginPage";
import dateHelper          from "../support/DateHelper";
import desktop          from "../support/page_objects/Desktop";
import entGrid          from "../support/page_objects/ENTGrid";
import dashboard        from "../support/page_objects/Dashboard";
import entscheidDetails from "../support/page_objects/EntscheidDetails";
import entHilflosigkeitTab from "../support/page_objects/EntscheidHilflosigkeitTab";

const url               = getBaseUrl();
const today             = dateHelper.getCurrentDate();

describe( `Verify HE-Grad is calculated correctly ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username1" ), Cypress.env( "password1" ) );
    loginPage.open( url );
  } );

  it( "HE-Grad shows Leicht when assistance is needed in 2 of the 6 daily living activities", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23210" ).click();
    entGrid.entSelectedRow( "23210" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 7000 );
    entHilflosigkeitTab.SelectAnAuskleidenDate( today );
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    cy.wait( 1000 );

  } );

  it( 'HE-Grad shows Leicht when assistance is needed in 3 of the 6 daily living activities', () => { 
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23211" ).click();
    entGrid.entSelectedRow( "23211" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 7000 );
    entHilflosigkeitTab.SelectAnAuskleidenDate( today );
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
    entHilflosigkeitTab.SelectEssenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    cy.wait( 1000 );
    
  } );

  it( "HE-Grad shows Leicht when personal supervision is needed", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23212" ).click();
    entGrid.entSelectedRow( "23212" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 7000 );
    entHilflosigkeitTab.SelectPersÜberwachung( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    cy.wait( 1000 );
    
  } );

  it( "HE-Grad shows Leicht when 1 area of practical life assistance is fulfilled", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "23213" ).click();
    entGrid.entSelectedRow( "23213" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();
    cy.wait( 7000 );
    entHilflosigkeitTab.SelectWohnenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    cy.wait( 1000 );

} );

it( "HE-Grad shows Leicht when at least 2 areas of practical life assistance is fulfilled", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23214" ).click();
  entGrid.entSelectedRow( "23214" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 7000 );
  entHilflosigkeitTab.SelectWohnenDate( today );
  entHilflosigkeitTab.SelectBegleitungDate( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
  cy.wait( 1000 );

} );

it( "HE-Grad shows Leicht when 3 areas of practical life assistance is fulfilled", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23215" ).click();
  entGrid.entSelectedRow( "23215" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 7000 );
  entHilflosigkeitTab.SelectWohnenDate( today );
  entHilflosigkeitTab.SelectBegleitungDate( today );
  entHilflosigkeitTab.SelectIsolationDate( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
  cy.wait( 1000 );

} );

it( "HE-Grad shows Mittel when assistance is needed in 4 of the 6 daily living activities", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23231" ).click();
  entGrid.entSelectedRow( "23231" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 7000 );
  entHilflosigkeitTab.SelectAnAuskleidenDate( today );
  entHilflosigkeitTab.SelectEssenDate( today );
  entHilflosigkeitTab.SelectKörperpflegeDate( today );
  entHilflosigkeitTab.SelectFortbewegungDate( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Mittel" );
  cy.wait( 1000 );

} );

it( "HE-Grad shows Mittel when assistance is needed in 5 of the 6 daily living activities", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23232" ).click();
  entGrid.entSelectedRow( "23232" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 5000 );
  entHilflosigkeitTab.SelectAnAuskleidenDate( today );
  entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
  entHilflosigkeitTab.SelectEssenDate( today );
  entHilflosigkeitTab.SelectKörperpflegeDate( today );
  entHilflosigkeitTab.SelectFortbewegungDate( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Mittel" );
  cy.wait( 1000 );

} );

it( "HE-Grad shows Mittel when assistance is needed in 2 of the 6 daily living activities and  personal supervision is needed", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23233" ).click();
  entGrid.entSelectedRow( "23233" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 5000 );
  entHilflosigkeitTab.SelectVerrichtenderNDDate( today );
  entHilflosigkeitTab.SelectFortbewegungDate( today );
  entHilflosigkeitTab.SelectPersÜberwachung( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Mittel" );
  cy.wait( 1000 );

} );

it( "HE-Grad shows Mittel when assistance is required in at least 2 of the 6 daily living activities and  in addition, at least one of the 3 areas of practical life support is fulfilled ( Essen +  Körperpflege+Wohnen )", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23234" ).click();
  entGrid.entSelectedRow( "23234" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 5000 );
  entHilflosigkeitTab.SelectVerrichtenderNDDate( today );
  entHilflosigkeitTab.SelectFortbewegungDate( today );
  entHilflosigkeitTab.SelectPersÜberwachung( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Mittel" );
  cy.wait( 1000 );

} );

it( "HE-Grad shows Schwer when assistance is required in all 6 daily living activities and in addition  medical-care assistance or personal supervision is required", () => {
  desktop.Entscheid().click();
  entGrid.EntscheidID( "23235" ).click();
  entGrid.entSelectedRow( "23235" ).dblclick();
  cy.wait( 4000 );
  dashboard.HomeBtn().click();
  cy.wait( 3000 );
  entscheidDetails.HilflosigkeitTab().click();
  cy.wait( 5000 );
  entHilflosigkeitTab.SelectAnAuskleidenDate( today );
  entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
  entHilflosigkeitTab.SelectEssenDate( today );
  entHilflosigkeitTab.SelectKörperpflegeDate( today );
  entHilflosigkeitTab.SelectVerrichtenderNDDate( today );
  entHilflosigkeitTab.SelectFortbewegungDate( today );
  entHilflosigkeitTab.SelectMedPflegeDate( today );
  entHilflosigkeitTab.SpeichernBtn().click();
  entHilflosigkeitTab.ConfirmBtn().click();
  entHilflosigkeitTab.ValidateHEGradValue( "Schwer" );
  cy.wait( 1000 );
} );
} );
