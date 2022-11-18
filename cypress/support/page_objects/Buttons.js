export class Buttons{

    Generate(){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="sAdresseDetailOverviewForm-but_kurzadresse_anpassen"]').click();
    }
    
    modalOk(){
        cy.waitUntil(()=> cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"]').should('be.visible'))
        cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();
        

    }
    modalOkWithWait(){
        //the value for 
        cy.waitUntil(() => cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"]').should('be.visible'))
        cy.wait(1000)
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
        //working for FR after ribbon Block class was renamed
     EntscheideNew(){
           cy.waitUntil(() => cy.contains('Versicherter - Entscheide').should('be.visible'))
           cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]')
           .find('[title="Neu"]').click()
           //.should('not.have.class', 'dhxrb_item_hide')

        // working for NR
        /* cy.contains('[class="dhxrb_block_label"]', 'Versicherter - Entscheide')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Neu"]')
          .click(); */
    } 
   

    BearbeitungEinleiten(){
        cy.waitUntil(() => cy.contains('Entscheid spezifische Funktionen').should('be.visible'))
           cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidSpezifischeBlock"]')
           .find('[title="Bearbeitung einleiten"]').click()

        // working for NR
        /* cy.contains('[class="dhxrb_block_label"]', 'Entscheid spezifische Funktionen')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidSpezifischeBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Bearbeitung einleiten"]')
          .click(); */
    }

    SpeichernHilf(){

        cy.waitUntil(() => cy.contains('Entscheid - Hilflosigkeit').should('be.visible'))
        cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidHilflosigkeitBlock"]')
        .find('[title="Speichern"]').click()

        /* cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Hilflosigkeit')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidHilflosigkeitBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Speichern"]')
          .click(); */

    }
    SpeichernBearb(){
        cy.waitUntil(() => cy.contains('Entscheid bearbeiten').should('be.visible'))
           cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBearbeitenBlock"]')
           .find('[title="Speichern"]').click()

           
        /* cy.contains('[class="dhxrb_block_label"]', 'Entscheid bearbeiten')
          .parents('[class="dhxrb_block_base ribbonBlock_EntscheidBearbeitenBlock"]')
          .find('[class="dhxrb_3rows_button"][title="Speichern"]')
          .click(); */

    }
    Begründungspeichern(){
        cy.waitUntil(() => cy.contains('Entscheid - Begründung').should('be.visible'))
        cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBegruendungBlock"]')
        .find('[title="Begründung speichern"]').click()

        /* cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Begründung')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidBegruendungBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Begründung speichern"]')
        .click() */
    }
    
    Freitextgenerieren() {
        cy.waitUntil(() => cy.contains('Entscheid - Verfügung / Beiblatt AK').should('be.visible'))
        cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]')
        .find('[title="Freitext generieren"]').click()

        /* cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Verfügung / Beiblatt AK')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Freitext generieren"]')
        .click() */
    }

    Freitextspeichern() {
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Verfügung / Beiblatt AK')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Freitext speichern"]')
        .click()
    }

    FreitextgenerierenGesetzliche () {
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Gesetzliche Grundlagen')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidGesetzlicheGrundlagenBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Freitext generieren"]')
        .click()

      }

    EntscheidSendungVerschicken () {
        cy.contains('[class="dhxrb_block_label"]', 'Entscheid - Entscheid-Sendungen')
        .parents('[class="dhxrb_block_base ribbonBlock_EntscheidEntscheidSendungenBlock"]')
        .find('[class="dhxrb_3rows_button"][title="Entscheid-Sendungen generieren"]')
        .click()
      }
    FrageJa() {
        cy.waitUntil(()=> cy.get('[class="swal-modal confirmModal"]').should('be.visible'))
        cy.get('[class="swal-modal confirmModal"]').find('[class="swal-footer"]').find('[class="swal-button swal-button--yesreply default"]').click();
    }  


    Homebtn(){
        cy.wait(3000)
        cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_pres"]').click()
        cy.wait(5000)
    }
    VisumSpeichern(){
        cy.waitUntil(() =>cy.get('[class="dhxrb_3rows_button"][title="Visum speichern"]').should('be.visible'))
        cy.get('[class="dhxrb_3rows_button"][title="Visum speichern"]').click()
    }

    VariablenSpeichern(){
        cy.get('[class="dhxrb_3rows_button"][title="Variablen speichern"]').click()
    }

    DruckVersand(){

        cy.get('[class="dhxrb_3rows_button"][title="Druck/Versand"]').click()
    }

    DruckVorschauMW(){
        cy.waitUntil(() =>cy.get('[class="dhxwin_active"][modalwindow="true"]').should('be.visible'))
        cy.get('[akid="SimpleSwatTabbar-Druck-Vorschau"]').click()
    }

    DruckVersandMW(){
        cy.waitUntil(() => cy.get('[akid="SimpleSwatTabbar-Druck/Versand"]').should('be.visible'))
       cy.get('[akid="SimpleSwatTabbar-Druck/Versand"]').click()
    }

    ProtokollBearbLöschen(){

        cy.waitUntil(() => cy.contains('Protokolleintrag bearbeiten').should('be.visible'))
        cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_ProtokollBearbeitenBlock"]')
        .find('[title="Löschen"]').click()

}
}

export const pressButton = new Buttons()