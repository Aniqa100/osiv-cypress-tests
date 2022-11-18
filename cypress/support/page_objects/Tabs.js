export class Tabs{
    Protocol(){
        cy.get('[akid="SimpleSwatTabbar-Protokoll"]').click(); 
    }
    Entscheide(){
        cy.waitUntil(() => cy.get('[akid="SimpleSwatTabbar-Entscheide"]').should('be.visible'))
        cy.get('[akid="SimpleSwatTabbar-Entscheide"]').click();
    }
    Hilflosigkeit(){
       cy.get('[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]').click()
    }
    Freitexte(){ 
       cy.get('[akid="EntscheidDetailBasisFrameTabbar-Freitexte"]').click()
    }
    VerfügungBeiblattAK(){
       cy.get('[akid="EntscheidFreitextTabbar-Verfügung / Beiblatt AK"]').click()
    }
    GesetzlicheGrundlagen(){
       cy.get('[akid="EntscheidFreitextTabbar-Gesetzliche Grundlagen"]').click()
    }
    EntscheidSendungen(){
       cy.get('[akid="EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen"]').click()
    }
    Sendungen(){
        cy.get('[akid="EntscheidDetailWindowTabbar-Sendungen"]').click()
    }
    Details(){
        cy.get('[akid="EntscheidDetailWindowTabbar-Details"]').click()
    }
    Visieren(){
    cy.get('[akid="EntscheidDetailBasisFrameTabbar-Visieren"]').click()
    }
    FormularVariablen(){
    cy.get('[akid="SimpleSwatTabbar-Formular Variablen"]').click()
    }
}
  export const tabTo = new Tabs()