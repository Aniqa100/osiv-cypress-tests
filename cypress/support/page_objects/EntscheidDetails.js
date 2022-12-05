export class EntscheidDetails{
    Leistungsgruppe(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-leistungsgruppe"]')
        }
    Leistungscode(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-leistungtext"]')
    }
    Gesuch(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-gesuchtext"]')
    }
    Ereignis(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-ereignistext"]')
    }
    Bereich(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-bereich"]')
    }
    Bearbeiter(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-bearbeiter"]').find('input')
    }
    Arbeitsliste(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]').find('input')
    } 
    Notizen(){
        return cy.get('[akid="EntscheidDetailBasisDatenForm-bem"]').find('textarea')
    }
    DurchführungsstellenTab(){
        return cy.get('[akid="EntscheidDetailBasisFrameTabbar-Durchführungsstellen"]')
    }

    VersicherungenTab(){
        return cy.get('[akid="EntscheidDetailBasisFrameTabbar-Versicherungen"]')
    }
    FreitexteTab(){ 
        return cy.get('[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]')
     }
    
    ValidateArbeitslisteValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]').find('input')
        .invoke('prop', 'value').should('contain', value)
    }

    ValidateBearbeiterValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-bearbeiter"]').find('input')
        .invoke('prop', 'value').should('contain', value)
    }
    ValidateLeistungsgruppeValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-leistungsgruppe"]')
        .contains(value)
    }
    ValidateLeistungscodeValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-leistungtext"]')
        .contains(value)
    }
    ValidateGesuchValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-gesuchtext"]')
        .contains(value)
    }
    ValidateEreignisValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-ereignistext"]')
        .contains(value)
    }
    ValidateBereichValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-bereich"]')
        .contains(value)
    }
    ValidateNotizenValue(value){
        cy.get('[akid="EntscheidDetailBasisDatenForm-bem"]').find('textarea')
        .invoke('prop', 'value').should('contain', value)
    }

    DurchführungsstellenList(){
        return cy.get('#active-panel .objbox').find('tr')
        
    }

    VersicherungenList(text){
        cy.contains(text).parents()
        return cy.get('#active-panel .objbox').find('tr')

    }
    ValidateBausteinListHasValue(text){
        cy.get('[akid="BausteinlisteIndiVerfuegungBeiblattGrid"]').contains(text)
    }
    ValidateBausteinListHasNotValue(value){
        cy.get('[akid="BausteinlisteIndiVerfuegungBeiblattGrid"]')
        .find('[class="objbox"] tbody td').each(($td) =>  {
            cy.wrap($td).invoke('text').then(text =>{
                expect(text).not.contain(value)
            })
            });
            
    }




}
export const entscheidDetails = new EntscheidDetails()