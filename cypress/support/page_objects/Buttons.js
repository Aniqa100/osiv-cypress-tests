
export class Buttons{

    Generate(){
        cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-but_kurzadresse_anpassen"]').click();
    }
    
   modalOk(){
        cy.waitUntil(()=> cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"]').should('be.visible'))
        cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();

    }

    newAdress(){
        cy.get('[akid="AdresseQueryGrid-AdresseNew"]').click();

    }

    confirm(){
        cy.waitUntil(()=> cy.get('[class="swal-modal warningModal"]').should('be.visible'))
        cy.get('[class="swal-modal warningModal"]').find('[class="swal-button swal-button--replyok"]')
        .contains('Ok').click()
    }

    Warningconfirm(){
        cy.waitUntil(()=> cy.get('[class="swal-modal warningModal"]').should('be.visible'))
        cy.get('[class="swal-modal warningModal"]').find('[class="swal-button swal-button--okreply default"]')
        .contains('Ok').click()
    }
    
    EntscheideNew(){
        cy.contains('[class="dhxrb_block_label"]', 'Versicherter - Entscheide')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Neu"]')
          .click();
    }

    BearbeitungEinleiten(){
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid spezifische Funktionen')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidSpezifischeBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Bearbeitung einleiten"]')
          .click();
    }

    SpeichernHilf(){
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Hilflosigkeit')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidHilflosigkeitBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Speichern"]')
          .click();

    }
    SpeichernBearb(){
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid bearbeiten')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidBearbeitenBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Speichern"]')
          .click();

    }
    Begründungspeichern(){
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Begründung')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidBegruendungBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Begründung speichern"]')
        .click()
    }
    
    Freitextgenerieren() {
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Verfügung / Beiblatt AK')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Freitext generieren"]')
        .click()
    }

    Freitextspeichern() {
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Verfügung / Beiblatt AK')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Freitext speichern"]')
        .click()
    }
    
}

export const pressButton = new Buttons()