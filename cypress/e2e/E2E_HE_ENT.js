import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility";
import { inputTo } from "../support/page_objects/inputFields";
import { tabTo } from "../support/page_objects/Tabs";
import { pressButton } from "../support/page_objects/Buttons";
import { fillForm } from "../support/page_objects/FillForm";
import { compareValuesOf } from "../support/page_objects/assertionValues";
import { selectDate } from "../support/page_objects/DatePicker";
import { dropdownValue } from "../support/page_objects/dropdownSelection";
import { rowselected } from "../support/page_objects/Tables"
import { loginPage } from "../support/page_objects/LoginPage";
import { desktop } from "../support/page_objects/Desktop";
import { vpGrid } from "../support/page_objects/VPGrid";
import { DateHelper } from "../support/DateHelper";

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();
const today = new DateHelper().getCurrentDate();
const countOfdaysInYear = new DateHelper().getCountOfdaysInYear();
const nextyear = new DateHelper().getSameDayNextYear();
const firstday = new DateHelper().getTheFirstDayOfMonth()
const end = new DateHelper().getOneDayLess()
console.log('today ' + today)
console.log('count '+ countOfdaysInYear)
console.log('nextyear ' + nextyear)
console.log('firstday ' + firstday)
console.log('dayless ' + end)

describe('E2E test of createting and sending Entscheide for HE code ' + url, () => {

    it('Verify Environment', () => {
        //cy.UILogin(Cypress.env("username"), Cypress.env("password"))
        cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
        loginPage.open(url)
        desktop.Versicherte().click()
        vpGrid.vpName().type('Wait Will', {delay:20}).clear().type('Wait Will').type('{enter}')
        //inputTo.VersichertenName('Wait Will')
        rowselected.firstSelectedRow()
        pressButton.Homebtn()
        //cy.wait I used here cause the element Entscheide tab exists on page but it is not clickable
        cy.wait(2000)
        tabTo.Entscheide()
        pressButton.EntscheideNew()
        fillForm.NeuenEntscheidErstellenForm('Hilflosenentschädigung' , 'Hilflosenentschädigung')
        compareValuesOf.EntscheidCreation('Gesuch vom 01.02.2022', 'Ereignis Basis vom 22.11.2022', 'IV Erwachsene', 'Hulk1 - Hulk Eins', 'Neu', 'Hilflosenentschädigung', 'HE - Hilflosenentschädigung', '')
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
        compareValuesOf.EntscheidEditor('Neu', 'Gesuch vom 01.02.2022', 'Ereignis Basis vom 22.11.2022', 'IV', 'Hulk1 - Hulk Eins', 'HE','HE - Hilflosenentschädigung', '')
        fillForm.EditEntscheidDatenForm('Zusprache', '3205', 'Mitteilung der IV-Stelle (IV Allgemein)')
        fillForm.EditErweiterteInfoForm('101', '01')
        selectDate.forBegin()
        pressButton.SpeichernBearb()
        pressButton.Warningconfirm()
        compareValuesOf.EntscheidSendungen()
        compareValuesOf.BasicDataNotColor()
        compareValuesOf.ShouldbefilledNotExist()
        pressButton.BearbeitungEinleiten()
        pressButton.modalOkWithWait('Hulk1 - Hulk Eins')
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
        compareValuesOf.Wartefrist(countOfdaysInYear);
        compareValuesOf.AblaufWartefrist(nextyear);
        compareValuesOf.WartefristVerlauf(today, end, countOfdaysInYear, '20');
        compareValuesOf.HEGrad(nextyear)
        compareValuesOf.HEGradVerlauf(nextyear, nextyear, 'Leicht');
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
