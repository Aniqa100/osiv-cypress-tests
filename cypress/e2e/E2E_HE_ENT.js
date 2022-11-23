import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility";
import {choosenElem} from "../support/page_objects/elements";
import { inputTo } from "../support/page_objects/inputFields";
import { tabTo } from "../support/page_objects/Tabs";
import { pressButton } from "../support/page_objects/Buttons";
import { fillForm } from "../support/page_objects/FillForm";
import { compareValuesOf } from "../support/page_objects/assertionValues";
import { selectDate } from "../support/page_objects/DatePicker";
import { dropdownValue } from "../support/page_objects/dropdownSelection";
import { rowselected } from "../support/page_objects/Tables";
//import { GetCountEntscheide } from "../support/page_objects/Tables";
import { Datefunctions } from "../support/Datefunctions"


//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
//const req = new Utility().RequestEeEntscheid();

/* function getFirstDayOfMonth(month, year) {
  return new Date(1, month, year);
} */

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

let yyyy = today.getFullYear();

let yearPlus = yyyy + 1;
let dayOneless = String(today.getDate()-1).padStart(2, '0');
let end = dayOneless + '.' + mm + '.' + yearPlus;
let samedaynextyear = dd + '.' + mm +  '.' + yearPlus;
let firstDay = '01' + '.' + mm + '.' + yearPlus;
today = dd + '.' + mm + '.' + yyyy; 

console.log(days_of_a_year(yyyy));
console.log(today);
console.log(end);
console.log(firstDay);


describe('E2E test of createting and sending Entscheide for HE code ' + url, () => {

    it('Verify Environment', () => {

  
        //cy.UILogin(Cypress.env("username"), Cypress.env("password"))
        cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
        cy.visit(url)
        //choosenElem.UserName()
        navigateTo.folderVersicherte()
        inputTo.VersichertenName('Wait Will')
        rowselected.firstSelectedRow()
        pressButton.Homebtn()
        //cy.wait I used here cause the element Entscheide tab exists on page but it is not clickable
        cy.wait(2000)
        tabTo.Entscheide()
        pressButton.EntscheideNew()
        fillForm.NeuenEntscheidErstellenForm('Hilflosenentschädigung' , 'Hilflosenentschädigung')
        compareValuesOf.EntscheidCreation()
        pressButton.modalOk()
        pressButton.Warningconfirm()
        pressButton.Homebtn()
        cy.get('.active-taskbar-items > .active')
        compareValuesOf.DetailsTabColor()
        compareValuesOf.BasicDataColor()
        compareValuesOf.Durchführungsstellen()

        if(url == 'https://osiv-frtest.ivnet.ch/') {
          compareValuesOf.HilflosigkeitColor()
        } else 
        compareValuesOf.BitteWarningmsg()
        compareValuesOf.Shouldbefilled()
        compareValuesOf.EntscheidEditor()
        fillForm.EditEntscheidDatenForm('Zusprache', '3205', 'Mitteilung der IV-Stelle (IV Allgemein)')
        fillForm.EditErweiterteInfoForm('101', '01')
        selectDate.forBegin()
        pressButton.SpeichernBearb()
        pressButton.Warningconfirm()
        compareValuesOf.EntscheidSendungen()
        compareValuesOf.BasicDataNotColor()
        compareValuesOf.ShouldbefilledNotExist()
        pressButton.BearbeitungEinleiten()
        pressButton.modalOkWithWait()
        compareValuesOf.Freitexte()
        compareValuesOf.Diskutieren()
        compareValuesOf.EntscheidStatus('Bearbeiten')
        tabTo.Hilflosigkeit()
        dropdownValue.verfahrenbezVaue('Langdauernde')
        dropdownValue.akbezValue('Freiburg')
        dropdownValue.aufenthaltbezValue('Zu')
        selectDate.AnAuskleiden()
        selectDate.AufstehenAbsitzen()
        selectDate.Essen()
        pressButton.SpeichernHilf()
        pressButton.confirm()
        compareValuesOf.HilflosigkeitNotColor()
        cy.waitUntil(()=> cy.get('[akid="EntscheidWartefristForm"]').should('be.visible'))
        compareValuesOf.Wartefrist(days_of_a_year(yyyy));
        compareValuesOf.AblaufWartefrist(samedaynextyear);
        compareValuesOf.WartefristVerlauf(today, end, days_of_a_year(yyyy), '20');
        compareValuesOf.HEGrad(firstDay)
        compareValuesOf.HEGradVerlauf(firstDay, firstDay, 'Leicht');
        tabTo.Freitexte()
        compareValuesOf.FreitexteColor()
        inputTo.TextForm('test')
        pressButton.Begründungspeichern()
        compareValuesOf.TextFormfilling()
        tabTo.VerfügungBeiblattAK()
        cy.wait(10000)
        pressButton.Freitextgenerieren()
        cy.wait(500)
        pressButton.Warningconfirm()
        cy.wait(1000)
        //compareValuesOf.GeneratedTextWithColore(firstDay)
        pressButton.Freitextspeichern()
        cy.wait(10000)
        //compareValuesOf.GeneratedTextWithoutColore(firstDay)
        tabTo.GesetzlicheGrundlagen()
        cy.wait(1000)
        pressButton.FreitextgenerierenGesetzliche()
        pressButton.Warningconfirm()
        compareValuesOf.FreitexteNotColor()
        tabTo.EntscheidSendungen()
        tabTo.Sendungen()
        tabTo.Details()
        pressButton.EntscheidSendungVerschicken()
        compareValuesOf.VisierenColor()
        compareValuesOf.EntscheidSendungenNotColor()
        compareValuesOf.ExistRow()
        tabTo.Visieren()
        pressButton.VisumSpeichern()
        pressButton.Warningconfirm()
        compareValuesOf.EntscheidSendungenColor()
        cy.wait(1000)
        compareValuesOf.VisierenNotColor()
        tabTo.EntscheidSendungen()
        tabTo.Sendungen()
        rowselected.linkOnTable()
        pressButton.Homebtn()
        tabTo.FormularVariablen()
        inputTo.Betrifft('Formular Variablen')
        pressButton.VariablenSpeichern()
        pressButton.DruckVersand()
        pressButton.DruckVorschauMW()
        pressButton.DruckVersandMW()
        dropdownValue.DruckerAuswählen('Testdrucker')
        pressButton.modalOk()
        pressButton.FrageJa()
        compareValuesOf.Finished('Abgeschlossen')

   })
})
