export class EntscheidNew{
    Leistungsgruppe(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-leistungsgruppe"]')
        }
    Leistungscode(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-leistungtext"]')
    }
    Gesuch(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-gesuchtext"]')
    }
    Ereignis(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-ereignistext"]')
    }
    Bereich(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-bereich"]')
    }
    Bearbeiter(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-bearbeiter"]')
    }
    Arbeitsliste(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-arbeitslistevalue"]').find('input')
    } 
    Notizen(){
        return cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-bem"]').find('textarea')
    }
      
    ModatOkBtn(){
        //the value for 
        return cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]');
  
        }
    ConfirmBtn(){
        return cy.get('[class="swal-modal warningModal"]')
        .find('[class="swal-button swal-button--replyok"]').contains('Ok')
    }

    ValidateLeistungsgruppeValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-leistungsgruppe"]')
        .contains(value)
    }

    ValidateLeistungscodeValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-leistungtext"]')
        .contains(value)
    }
 
    ValidateGesuchValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-gesuchtext"]')
        .contains(value)
    }

    ValidateEreignisValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-ereignistext"]')
        .contains(value)
    }

    ValidateBereichValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-bereich"]')
        .contains(value)
    }
    ValidateBearbeiterValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-bearbeiter"]')
        .contains(value)
    }

    ValidateArbeitslisteValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-arbeitslistevalue"]').find('input')
        .invoke('prop', 'value').should('contain', value)
    }
     
    ValidateNotizenValue(value){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
        .find('[akid="CreateEntscheidForm-bem"]').find('textarea')
        .invoke('prop', 'value').should('contain', value)
    }


     
}


        

export const entscheidNew = new EntscheidNew()