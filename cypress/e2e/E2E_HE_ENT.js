import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility";
import {userInfor} from "../support/page_objects/elements"
import { inputTo } from "../support/page_objects/inputFields";
import { tabTo } from "../support/page_objects/Tabs";
import { pressButton } from "../support/page_objects/Buttons";
import { fillForm } from "../support/page_objects/FillForm";
import { compareValuesOf } from "../support/page_objects/assertionValues";
import { selectDate } from "../support/page_objects/DatePicker";



//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

describe('Verify Environment Config ' + url, () => {
    it('Verify Environment', () => {
        cy.visit(url); //use url variable
        cy.wait(20000);
        cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })
        cy.wait(20000);
        navigateTo.folderVersicherte();
        cy.wait(5000);
        inputTo.VersichertenName('eing kyra{enter}', {timeout: 10000});
        cy.get('[akid="sStammQueryB-A60-ab901f85688e6da29a14381b249b0071"]').dblclick();
        cy.wait(20000);
        cy.get('[class="dhx_cell_toolbar_def"]').click();
        cy.wait(5000);
        tabTo.Entscheide();
        cy.wait(5000);
        pressButton.EntscheideNew();
        cy.wait(5000);
        fillForm.NeuenEntscheidErstellenForm('hilflosen' , 'hilflosen');
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
        cy.get('[akid="EntscheidDetailBasisDatenForm-fieldsetbasisinformationen"]').then(basicdataeditor => {

            cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]')
            .find('input').then( input => {
                cy.wrap(input).invoke('prop', 'value').should('contain', 'Bearbeiten')
     })

    })

       cy.get('[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]').click()

       cy.get('[akid="EntscheidHilflosigkeitForm-verfahrenbez"]').click()
       .get('[class="select2-search select2-search--dropdown"]').type('Langdauernde').wait(500)
       .get('[class="select2-results__options"]').click();

       cy.get('[akid="EntscheidHilflosigkeitForm-akbez"]').click()
       .get('[class="select2-search select2-search--dropdown"]').type('Freiburg').wait(500)
       .get('[class="select2-results__options"]').find('[akid="akbez-A0A:111:000004078894"]').click();

       cy.get('[akid="EntscheidHilflosigkeitForm-aufenthaltbez"]').click()
       .get('[class="select2-search select2-search--dropdown"]').type('Zu').wait(500)
       .get('[class="select2-results__options"]').click();
       selectDate.AnAuskleiden()
       selectDate.AufstehenAbsitzen()
       selectDate.Essen()


       pressButton.SpeichernHilf()
})
})