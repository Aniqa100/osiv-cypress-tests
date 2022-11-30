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
    


    VersicherungenList(){
        return cy.get('#active-panel .objbox').find('tr')

        //I'll leave you it here for now
         cy.contains('MV').parents('[class=" ev_material rowselected"]').find('[class="akcelllink"]').invoke('text').then(text =>{
        expect(text).to.equal('Personalfürsorgestiftung Grosspeter AG, St. Jakob-Strasse 72, 4132 Muttenz')
    }) 
         cy.contains('UVG').parents('[class=" odd_material"]').find('[class="akcelllink"]').invoke('text').then(text =>{
        expect(text).to.equal('Herr Dr. Peter Bont, Rechtsanwalt und Notar, Dornacherstrasse 26, Postfach, 4603 Olten')
    }) 
    }
}
export const entscheidDetails = new EntscheidDetails()