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
    DurchführungsstellenList(){
        return cy.get('#active-panel .objbox').find('tr')
        
    }
    VersicherungenTab(){
        return cy.get('[akid="EntscheidDetailBasisFrameTabbar-Versicherungen"]')
    }
    


    VersicherungenList(text){
        cy.contains(text).parents()
        
        return cy.get('#active-panel .objbox').find('tr')

    }
}
export const entscheidDetails = new EntscheidDetails()