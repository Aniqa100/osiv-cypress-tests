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
const req = new Utility().RequestEeEntscheid();

function getFirstDayOfMonth(month, year) {
  return new Date(1, month, year);
}

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}
 var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

var yyyy = today.getFullYear();

var yearPlus = yyyy + 1;
var dayOneless = String(today.getDate()-1).padStart(2, '0');
var end = dayOneless + '.' + mm + '.' + yearPlus;
var samedaynextyear = dd + '.' + mm +  '.' + yearPlus;
var firstDay = '01' + '.' + mm + '.' + yearPlus;
today = dd + '.' + mm + '.' + yyyy; 

console.log(days_of_a_year(yyyy));
console.log(today);
console.log(end);
console.log(firstDay);


describe('Verify Environment Config ' + url, () => {

    it('Verify Environment', () => {

  
        //cy.UILogin(Cypress.env("username"), Cypress.env("password"))
        cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
        cy.visit(url)
        choosenElem.UserName()
        navigateTo.folderVersicherte()
        inputTo.VersichertenName('eing kyra')
        rowselected.firstSelectedRow()
        pressButton.Homebtn()
        tabTo.Entscheide()
        pressButton.EntscheideNew()
        fillForm.NeuenEntscheidErstellenForm('Hilflosenentschädigung' , 'Hilflosenentschädigung')
        compareValuesOf.EntscheidCreation()
        pressButton.modalOk()
        
        cy.request(url + req)
       .should((response) => {
        expect(response.status).to.eq(200)
        console.log(response.body)
        const countOfEntscheid = response.body.dsEntscheid.eEntscheid.length;
        var i; 
        var existedEntscheids = 0;
        for(i = 0; i < countOfEntscheid; i++){
          if((response.body.dsEntscheid.eEntscheid[i].Arbeitsliste == "N")||(response.body.dsEntscheid.eEntscheid[i].Arbeitsliste == "B"))
          existedEntscheids = existedEntscheids + 1;
        } 
        if(existedEntscheids>0){
          pressButton.Warningconfirm()
       } else {}
       })
        /* const modalWindow = cy.get('[class="swal-modal warningModal"]')
        if(modalWindow) {
          pressButton.Warningconfirm()
        } else {} */
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
        cy.request(url + req)
        .should((response) => {
         expect(response.status).to.eq(200)
         console.log(response.body)
         const countOfEntscheid = response.body.dsEntscheid.eEntscheid.length;
         var i; 
         var existedEntscheids = 0;
         for(i = 0; i < countOfEntscheid; i++){
           if((response.body.dsEntscheid.eEntscheid[i].Leistung_Leistungscode == "HE"))
           existedEntscheids = existedEntscheids + 1;
         } 
         if(existedEntscheids>0){
           pressButton.Warningconfirm()
        } else {}
        }) 

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
        //Ablauf Wartefrist date need to be assert
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
        compareValuesOf.GeneratedTextWithColore(firstDay)
        pressButton.Freitextspeichern()
        cy.wait(10000)
        compareValuesOf.GeneratedTextWithoutColore(firstDay)
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
