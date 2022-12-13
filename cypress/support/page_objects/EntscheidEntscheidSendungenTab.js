export class EntscheidEntscheidSendungenTab{
    EntscheidSendungGenerierenBtn() {
        return cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidEntscheidSendungenBlock"]')
        .find('[title="Entscheid-Sendungen generieren"]')
    }
    VerifyExistedRow(status){
        return cy.get('[akid="eSendungQueryVPContextB"]').find('[class=" ev_material rowselected"]').contains('td', status)    
    }
    VisumSpeichernBtn(){
        return cy.get('[class="dhxrb_3rows_button"][title="Visum speichern"]')
    }
    WarningconfirmBtn(){
        return cy.get('[class="swal-modal warningModal"]').find('[class="swal-button swal-button--okreply default"]')
        .contains('Ok')
    }
}
export const entscheidEntscheidSendungenTab = new EntscheidEntscheidSendungenTab()