import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility";
import {userInfor} from "../support/page_objects/elements";
import { inputTo } from "../support/page_objects/inputFields";
import { tabTo } from "../support/page_objects/Tabs";
import { pressButton } from "../support/page_objects/Buttons";
import { fillForm } from "../support/page_objects/FillForm";
import { compareValuesOf } from "../support/page_objects/assertionValues";
import { selectDate } from "../support/page_objects/DatePicker";
import { dropdownValue } from "../support/page_objects/dropdownSelection";





//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

var samedaynextyear = new Date();
var dd = String(samedaynextyear.getDate()).padStart(2, '0');
var mm = String(samedaynextyear.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = samedaynextyear.getFullYear();
var yearPlus = yyyy + 1;
var dayOneless = String(samedaynextyear.getDate()-1).padStart(2, '0');
var end = dayOneless + '.' + mm + '.' + yearPlus;
samedaynextyear = dd + '.' + mm +  '.' + yearPlus;

var today = dd + '.' + mm + '.' + yyyy;

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(yyyy));
console.log(today);
console.log(end);


describe('Verify Environment Config ' + url, () => {

    it('Verify Environment', () => {
        cy.visit(url); //use url variable
        cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })
        cy.waitUntil(()=> cy.get('[class="akUserInfo"]').should('be.visible'))
        navigateTo.folderVersicherte();
        cy.wait(5000);
        inputTo.VersichertenName('eing kyra{enter}', {timeout: 10_000});
        cy.get('[akid="sStammQueryB-A60-ab901f85688e6da29a14381b249b0071"]').dblclick();
        cy.wait(20000);
        cy.get('[class="dhx_cell_toolbar_def"]').click();
        cy.wait(5000);
        tabTo.Entscheide();
        cy.wait(5000);
        pressButton.EntscheideNew();
        cy.wait(5000);
        fillForm.NeuenEntscheidErstellenForm('Hilflosenentschädigung' , 'hilflosen');
        compareValuesOf.EntscheidCreation();
        pressButton.modalOk();
        cy.wait(20000);
        cy.get('[class="dhx_cell_toolbar_def"]').click();
        cy.get('.active-taskbar-items > .active');
        compareValuesOf.DetailsTabColor()
        compareValuesOf.BasicDataColor()
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Durchführungsstellen"]').should('be.visible')
        compareValuesOf.HilflosigkeitColor()
        cy.wait(500)
        cy.contains('Bitte die Bearbeitung einleiten. (OSCIENT:522)')
        cy.contains('Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)')
        compareValuesOf.EntscheidEditor()
        fillForm.EditEntscheidDatenForm('Zusprache', '3205', 'Mitteilung der')
        fillForm.EditErweiterteInfoForm('101', '01')
        selectDate.forBegin()
        pressButton.SpeichernBearb()
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]').should('be.visible')
        compareValuesOf.BasicDataNotColor()
        cy.contains('Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)').should('not.exist')
        pressButton.BearbeitungEinleiten()
        pressButton.modalOk()
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]').should('be.visible')
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Diskutieren"]').should('be.visible')
        compareValuesOf.EntscheidStatus('Bearbeiten')
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]').click()
        dropdownValue.verfahrenbezVaue('Langdauernde')
        dropdownValue.akbezValue('Freiburg')
        dropdownValue.aufenthaltbezValue('Zu')
        selectDate.AnAuskleiden()
        selectDate.AufstehenAbsitzen()
        selectDate.Essen()
        pressButton.SpeichernHilf()
        cy.waitUntil(() =>  cy.get('[class="swal-modal warningModal"]').should('be.visible'))
        pressButton.confirm()
        compareValuesOf.HilflosigkeitNotColor()
        cy.waitUntil(()=> cy.get('[akid="EntscheidWartefristForm"]').should('be.visible'))
        //Ablauf Wartefrist date need to be assert
        compareValuesOf.Wartefrist(days_of_a_year(yyyy));
        compareValuesOf.AblaufWartefrist(samedaynextyear);
        compareValuesOf.WartefristVerlauf(today, end, days_of_a_year(yyyy), '20');
        })
    
          /* cy.get('[akid="WartefristQueryGrid"]').find('[class="objbox"]').then (WartefristVerlauf =>{
            cy.wrap(WartefristVerlauf).find('table')
        })  */ 
        //cy.contains('Wartefrist Verlauf')
})
