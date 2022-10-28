export class Tabs{
    Protocol(){
        cy.get('[akid="SimpleSwatTabbar-Protokoll"]').click();
        
     
  }

    Entscheide(){
        cy.get('[akid="SimpleSwatTabbar-Entscheide"]').click();
    }
}
  export const tabTo = new Tabs()