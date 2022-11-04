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

        if(url == 'https://osiv-frtest.ivnet.ch/') {
          compareValuesOf.HilflosigkeitColor()
        } else 
        
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
        compareValuesOf.HEGrad(firstDay)
        compareValuesOf.HEGradVerlauf(firstDay, firstDay, 'Leicht');
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]').click()
        compareValuesOf.FreitexteColor()
        cy.get('[akid="BegruendungHTMLTextForm"]').find('.cke_wysiwyg_div').type('test');
        pressButton.Begründungspeichern()
        cy.get('[akid="BegruendungHTMLTextForm"]').find('.cke_wysiwyg_div').find('p').invoke('text').then(text =>{
          expect(text).to.equal('test')
        })
        cy.get('[akid="EntscheidFreitextTabbar-Verfügung / Beiblatt AK"]').click()
        //cy.wait(500)
        //pressButton.Freitextspeichern()
        cy.wait(5000)
        pressButton.Freitextgenerieren()
        cy.wait(5000)
        pressButton.Warningconfirm()
        cy.wait(1000)
        cy.get('[id="cke_3_contents"]').find('[class="WordSection1"]').eq(1).find('[class="OSIVDAbsatz"]')
         .find('span').should('include.text', 'Sehr geehrte Frau Eing')
         .and('have.css', 'background').should('include', 'rgb(255, 255, 0)') 
        //cy.get('[id="cke_3_contents"]').find('[class="WordSection1"]').eq(4).find('tbody')

        })
})
