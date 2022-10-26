
export class Buttons{

    Generate(){
        cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-but_kurzadresse_anpassen"]').click();
    }
    
   modalOk(){
    cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();

    }

    newAdress(){
        cy.get('[akid="AdresseQueryGrid-AdresseNew"]').click();

    }

    confirm(){
        cy.get('[class="swal-modal warningModal"]').find('[class="swal-button swal-button--replyok"]').contains('Ok').click()
    }

}

export const pressButton = new Buttons()