
export class Buttons{

    Generate(){
        cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-but_kurzadresse_anpassen"]').click();
    }
    
   modatOk(){
    cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();

   }

}

export const pressButton = new Buttons()