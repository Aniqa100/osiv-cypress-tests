import { Utility } from "../support/Utility";
import { pressButton } from "../support/page_objects/Buttons";
import { loginPage } from "../support/page_objects/LoginPage";
import { desktop } from "../support/page_objects/Desktop";
import { vpGrid } from "../support/page_objects/VPGrid";
import { DateHelper } from "../support/DateHelper";
import { entscheidDetails } from "../support/page_objects/EntscheidDetails";
import { entHilflosigkeitTab } from "../support/page_objects/EntscheidHilflosigkeitTab";
import { dashboard } from "../support/page_objects/Dashboard";
import { vpDetails } from "../support/page_objects/VPDetails";
import { vpEntscheidGrid } from "../support/page_objects/VPEntscheidGrid";
import { entscheidNew } from "../support/page_objects/EntscheidNew";
import { EntscheidFreitexteTab, entscheidFreitexteTab } from "../support/page_objects/EntscheidFreitexteTab";

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl()
const today = new DateHelper().getCurrentDate()
const countOfdaysInYear = new DateHelper().getCountOfdaysInYear()
const nextyear = new DateHelper().getSameDayNextYear()
const firstday = new DateHelper().getTheFirstDayOfMonth()
const end = new DateHelper().getOneDayLess()
console.log('today ' + today)
console.log('count '+ countOfdaysInYear)
console.log('nextyear ' + nextyear)
console.log('firstday ' + firstday)
console.log('dayless ' + end)

describe('E2E test of createting and sending Entscheide for HE code ' + url, () => {
    beforeEach('Login', () => {
    cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
    loginPage.open(url)
})

    it('Verify Environment', () => {
        desktop.Versicherte()
        vpGrid.typevpName('Wait Will').type('{enter}')
        vpGrid.vpSelectedRow().dblclick()
        cy.wait(4000)
        dashboard.HomeBtn().click()
        cy.wait(3000)
        //cy.wait I used here cause the element Entscheide tab exists on page but it is not clickable
        vpDetails.Entscheide().click()
        pressButton.EntscheideNew()
        vpEntscheidGrid.NewBtn().click()
        entscheidNew.SelectLeistungsgruppeValue('Hilflosenentschädigung').click()
        entscheidNew.SelectLeistungscodeValue('Hilflosenentschädigung').click()
        entscheidNew.ValidateGesuchValue('vom 01.02.2022')
        entscheidNew.ValidateEreignisValue('Basis vom 22.11.2022')
        entscheidNew.ValidateBereichValue('IV Erwachsene')
        entscheidNew.ValidateBearbeiterValue('Hulk1 - Hulk Eins')
        entscheidNew.ValidateArbeitslisteValue('Neu')
        entscheidNew.ModatOkBtn().click()
        entscheidNew.WarningConfirmBtn().click()
        dashboard.HomeBtn().click()
        entscheidDetails.ValidateOrangeBasicDataColore('rgb(255, 165, 0)')
        entscheidDetails.ValidateOrangeDetailsTabColore('rgb(255, 165, 0)')
        entscheidDetails.ValidateNotOrangeDurchführungsstellenTabColore('rgb(255, 165, 0)')
        if(url == 'https://osiv-frtest.ivnet.ch/') {
          entscheidDetails.ValidateOrangeHilflosigkeitTabColor('rgb(255, 165, 0)')
        } else 
        entscheidDetails.ValidateBitteWarningMsg('Bitte die Bearbeitung einleiten. (OSCIENT:522)')
        entscheidDetails.ValidateShouldbefilledMsg('Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)')
        entscheidDetails.ValidateArbeitslisteValue('Neu')
        entscheidDetails.ValidateGesuchValue('vom 01.02.2022')
        entscheidDetails.ValidateEreignisValue('Basis vom 22.11.2022')
        entscheidDetails.ValidateBereichValue('IV')
        entscheidDetails.ValidateBearbeiterValue('Hulk1 - Hulk Eins')
        entscheidDetails.ValidateLeistungsgruppeValue('HE')
        entscheidDetails.ValidateLeistungscodeValue('HE - Hilflosenentschädigung')
        entscheidDetails.SelectEntscheidValue('Zusprache')
        entscheidDetails.SelectSupertextValue('3205')
        entscheidDetails.SelectEntscheidtypValue('Mitteilung der IV-Stelle (IV Allgemein)')
        entscheidDetails.SelectGebrechenValue('101')
        entscheidDetails.SelectFunktausfallValue('01')
        entscheidDetails.SelectBeginnValue(today)
        entscheidDetails.SpeicherBtn().click()
        entscheidDetails.WarningConfirmBtn().click()
        entscheidDetails.ValidateNotOrangeEntscheidSendungenColor('rgb(255, 165, 0)')
        entscheidDetails.ValidateNotOrangeBasicDataColore('rgb(255, 165, 0)')
        entscheidDetails.ValidateNoShouldbefilledMsg('Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)')
        entscheidDetails.BearbeitungEinleitenBtn().click()
        entscheidDetails.modalOkBtn('Hulk1 - Hulk Eins')
        entscheidDetails.ValidateNotOrangeFreitexteColore('rgb(255, 165, 0)')
        entscheidDetails.ValidateNotOrangeDiskutierenColor('rgb(255, 165, 0)')
        entscheidDetails.ValidateArbeitslisteValue('Bearbeiten')
        entscheidDetails.HilflosigkeitTab().click()
        entHilflosigkeitTab.SelectArtderInvaliditätValue('Langdauernde Erwerbsunfähigkeit')
        entHilflosigkeitTab.SelectAusgleichskasseValue('10 - Ausgleichskasse des Kantons Freiburg')
        entHilflosigkeitTab.SelectAufenthaltbezValue('Zu Hause')
        entHilflosigkeitTab.SelectAnAuskleidenDate(today)
        entHilflosigkeitTab.SelectAufstehenAbsitzenDate(today)
        entHilflosigkeitTab.SelectEssenDate(today)
        entHilflosigkeitTab.SpeichernBtn().click()
        entHilflosigkeitTab.ConfirmBtn().click()
        entscheidDetails.ValidateOrangeHilflosigkeitTabColor('rgb(255, 165, 0)')
        entHilflosigkeitTab.ValidateAblaufWartefristValue(nextyear)
        entHilflosigkeitTab.ValidateWFGradValue('20 %')
        entHilflosigkeitTab.ValidateTageValue(countOfdaysInYear)
        entHilflosigkeitTab.ValidateGrenzgradValue('20 %')
        entHilflosigkeitTab.ValidateBeginnDate(today)
        entHilflosigkeitTab.ValidateEndeDate(end)
        entHilflosigkeitTab.ValidateAnzahlTageValue(countOfdaysInYear)
        entHilflosigkeitTab.ValidateHEGradinValue('20')
        entHilflosigkeitTab.ValidateHEGradValue('Leicht')
        entHilflosigkeitTab.ValidateHEGradBeginnDate(firstday)
        entHilflosigkeitTab.ValidateHeGradabDate(firstday)
        entHilflosigkeitTab.ValidateHEGradVerlaufValue('Leicht')
        entscheidDetails.FreitexteTab().click()
        entscheidDetails.ValidateOrangeFreitextColore('rgb(255, 165, 0)')
        entscheidFreitexteTab.TextForm('test')
        entscheidFreitexteTab.BegründungSpeichernBtn().click()
        entscheidFreitexteTab.ValidateTextFormValue('test')
        entscheidFreitexteTab.VerfügungBeiblattAK().click()
        entscheidFreitexteTab.FreitextgenerierenBtn().click()
        
        //pressButton.FreitextgenerierenGesetzliche()
        //cy.wait(1000)
        //entscheidFreitexteTab.BegründungSpeichernBtn().click()
        /*cy.wait(500)
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
        //tabTo.Sendungen()
        //tabTo.Details()
        pressButton.EntscheidSendungVerschicken()// - need to press generieren
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
 */
   })
})
