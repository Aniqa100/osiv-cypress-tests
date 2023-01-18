//This test can be run only one time per day as the modal window shows up only for the first calculation
//https://osiv.testrail.net/index.php?/cases/view/44744 
//FINISHED
import { getBaseUrl }      from "../support/utility";
import loginPage           from "../support/page_objects/LoginPage";
import desktop             from "../support/page_objects/Desktop";
import entGrid             from "../support/page_objects/ENTGrid";
import dashboard           from "../support/page_objects/Dashboard";
import dateHelper          from "../support/DateHelper";
import entHilflosigkeitTab from "../support/page_objects/EntscheidHilflosigkeitTab";
import entscheidDetails    from "../support/page_objects/EntscheidDetails";

const url               = getBaseUrl();
const today             = dateHelper.getCurrentDate();
const nextyear          = dateHelper.getSameDayNextYear();
const end               = dateHelper.getOneDayLess();
const countOfdaysInYear = dateHelper.getCountOfdaysInYear();
const firstday          = dateHelper.getTheFirstDayOfMonth();

describe( `Add Hilflosigkeit data_Happy case ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );
  it( "Check the system calculation", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22783" ).click();
    entGrid.entSelectedRow( "22783" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 ); 
    entscheidDetails.HilflosigkeitTab().click();
    entHilflosigkeitTab.SelectArtderInvaliditätValue( "Langdauernde Erwerbsunfähigkeit" );
    entHilflosigkeitTab.SelectAusgleichskasseValue( "10 - Ausgleichskasse des Kantons Freiburg" );
    entHilflosigkeitTab.SelectAnAuskleidenDate( today );
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
    entHilflosigkeitTab.SelectEssenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ValidateTextOfWarningmeg( "(OSCIENT:465)" );
    entHilflosigkeitTab.ConfirmBtn().click();
    entHilflosigkeitTab.ValidateAblaufWartefristValue( nextyear );
    entHilflosigkeitTab.ValidateWFGradValue( "20 %" );
    entHilflosigkeitTab.ValidateTageValue( countOfdaysInYear );
    entHilflosigkeitTab.ValidateGrenzgradValue( "20 %" );
    entHilflosigkeitTab.ValidateBeginnDate( today );
    entHilflosigkeitTab.ValidateEndeDate( end );
    entHilflosigkeitTab.ValidateAnzahlTageValue( countOfdaysInYear );
    entHilflosigkeitTab.ValidateHEGradinValue( "20" );
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.ValidateHEGradBeginnDate( firstday );
    entHilflosigkeitTab.ValidateHeGradabDate( firstday );
    entHilflosigkeitTab.ValidateHEGradVerlaufValue( "Leicht" ); 
  } );
} );
