//https://osiv.testrail.net/index.php?/cases/view/47706
//NOT FINISHED
import { getBaseUrl }      from "../support/utility";
import loginPage           from "../support/page_objects/LoginPage";
import desktop             from "../support/page_objects/Desktop";
import entGrid             from "../support/page_objects/ENTGrid";
import dashboard           from "../support/page_objects/Dashboard";
import entscheidDetails    from "../support/page_objects/EntscheidDetails";
import diskutierenDetails  from "../support/page_objects/DiskutierenDetails";
import entscheidHilflosigkeitTab from "../support/page_objects/EntscheidHilflosigkeitTab";

const url               = getBaseUrl();

describe( `Possibility to edit data on Hillflosigkeit tab when discussion started/ended ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );
  it( "Test that Hilflosigkeit data can't be edited in ENT has AL = D and also options in ribbon block Entscheid Hillflosigkeit spezifische Funktionen are disabled", () => {
    desktop.Entscheid().click();
    entGrid.EntscheidID( "22722" ).click();
    entGrid.entSelectedRow( "22722" ).dblclick();
    cy.wait( 4000 );
    dashboard.HomeBtn().click();
    cy.wait( 3000 );
    entscheidDetails.HilflosigkeitTab().click();

    //THere shoudl be verification if all fields and buttons are enabled
    
    entscheidDetails.DiskutierenTab().click();
    diskutierenDetails.SelectArztValue( " Wenger, Alex (awe)" );
    diskutierenDetails.DiskussionStartenBtn().click();
    diskutierenDetails.ConfirmOKBtn().click();
    entscheidDetails.HilflosigkeitTab().click();
    entscheidHilflosigkeitTab.ValidateSpeichernBtnIsDisabled();
    if (url != "https://osiv-nrtest.ivnet.ch/"){
      entscheidHilflosigkeitTab.ValidateAusgleichkasseändernBtnIsDisabled();
    }else{}
    entscheidHilflosigkeitTab.ValidateGrenzgradAb30TBtnIsDisabled();     
    entscheidHilflosigkeitTab.ValidateWartefristBearbeitenBtnIsDisabled();
    entscheidHilflosigkeitTab.ValidateHEGradbearbeitenIsDisabled();
    entscheidHilflosigkeitTab.ValidateArtderInvaliditätIsReadOnly();
    entscheidHilflosigkeitTab.ValidateAusgleichskasseIsReadOnly();

    //Do I need to verify every field? or it's enough to verify just a few?
    
    entscheidDetails.DiskutierenTab().click();
    diskutierenDetails.DiskussionfürübrigeTeilnehmerabbrechen().click();
    diskutierenDetails.Meldung( "blablabla" );
    diskutierenDetails.DiskussionbeendenBtn().click();
    diskutierenDetails.ConfirmOKBtn().click();
    entscheidDetails.HilflosigkeitTab().click();

    //THere shoudl be verification if all fields and buttons are enabled

  } );
} );
