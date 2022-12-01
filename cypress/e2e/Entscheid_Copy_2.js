import { Utility } from "../support/Utility";
import 'cypress-wait-until';
import { desktop } from "../support/page_objects/Desktop";
import { loginPage } from "../support/page_objects/LoginPage";
import { vpGrid } from "../support/page_objects/VPGrid";
import { vpDetails } from "../support/page_objects/VPDetails";
import { dashboard } from "../support/page_objects/Dashboard";
import { vpEntscheidGrid } from "../support/page_objects/VPEntscheidGrid";
import { entscheidNew } from "../support/page_objects/EntscheidNew";
import { entscheidDetails } from "../support/page_objects/EntscheidDetails";
import { entscheidMetaInfo } from "../support/page_objects/EntscheidMetaInfo";
const url = new Utility().getBaseUrl()

describe('Test to copy Entscheid with all data ' + url,() => {

    beforeEach('Login', () => {
        cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
        loginPage.open(url)
    })
    it('Open Entscheid and copy', () => {
        desktop.Versicherte().click()
        vpGrid.vpName().type('Wait Will', {delay:20}).clear().type('Wait Will').type('{enter}')
        vpGrid.vpSelectedRow().trigger('dblclick')
        //Here until I don't know how to handle new opened tab I put chain cy.wait -> homeBtn -> cy.wait
        cy.wait(1000)
        dashboard.HomeBtn().click()
        cy.wait(3000)
        vpDetails.Entscheide().click()
        vpEntscheidGrid.TableRowbyText('Test notes on copy').click()
        vpEntscheidGrid.CopyBtn().click()
        /* entscheidNew.Leistungsgruppe().contains('ABM')
        entscheidNew.Leistungscode().contains('281 - (N) Gutachten SAHB Prothetik/Orthetik')
        entscheidNew.Gesuch().contains('Gesuch vom 01.02.2022')
        entscheidNew.Ereignis().contains('Ereignis Basis vom 22.11.2022')
        entscheidNew.Bereich().contains('IV')
        entscheidNew.Bearbeiter().contains('Hulk1 - Hulk Eins')
        entscheidNew.Arbeitsliste().invoke('prop', 'value').should('contain', 'Neu')
        entscheidNew.Notizen().invoke('prop', 'value').should('contain', 'Test notes on copy') */
        entscheidNew.Notizen().clear().type('Copied')
        entscheidNew.ModatOkBtn().click()
        entscheidNew.ConfirmBtn().click()
        dashboard.HomeBtn().click()
        entscheidDetails.Arbeitsliste().invoke('prop', 'value').should('contain', 'Neu')
        entscheidDetails.Bearbeiter().invoke('prop', 'value').should('contain', 'Hulk1 - Hulk Eins')
        entscheidDetails.Leistungsgruppe().contains('ABM')
        entscheidDetails.Leistungscode().contains('281 - (N) Gutachten SAHB Prothetik/Orthetik')
        entscheidDetails.Gesuch().contains('Gesuch vom 01.02.2022')
        entscheidDetails.Ereignis().contains('Ereignis Basis vom 22.11.2022')
        entscheidDetails.Bereich().contains('IV')
        entscheidDetails.Notizen().invoke('prop', 'value').should('contain', 'Copied')
        entscheidDetails.DurchführungsstellenTab().click()
        entscheidDetails.DurchführungsstellenList().eq(1).invoke('text').should('contain', 'Schaeppi Grundstücke per Adresse: Stamm Immobilien AG, Holbeinstrasse 75, 4002 Basel')
        entscheidDetails.DurchführungsstellenList().eq(2).invoke('text').should('contain', 'Basler Orthopädie René Ruepp AG, Austrasse 109, 4051 Basel')
        entscheidDetails.DurchführungsstellenList().eq(3).invoke('text').should('contain', 'Ergotherapie Rheinfelden, Petra Leisinger-Burns, Thermenstrasse 11, 4310 Rheinfelden')
        entscheidDetails.VersicherungenTab().click()
        entscheidDetails.VersicherungenList('MV').eq(1).invoke('text').should('contain', 'Personalfürsorgestiftung Grosspeter AG, St. Jakob-Strasse 72, 4132 Muttenz')
        entscheidDetails.VersicherungenList('UVG').eq(2).invoke('text').should('contain', 'Herr Dr. Peter Bont, Rechtsanwalt und Notar, Dornacherstrasse 26, Postfach, 4603 Olten')       
        // Over here I need to find EntscheidNM and save outside the test, I use settering gettering, to use it in futher in API call
        entscheidMetaInfo.MetaInfoTab().click()
        entscheidMetaInfo.EntscheidIdNM().invoke('prop', 'value').then(EntscheidIdNM =>{
            cy.task('setEntscheidIdNM', EntscheidIdNM)
        })
    })
})