export class VPGrid{
    vpName(){
        return cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]')
    }

    vpSelectedRow(){
        return cy.get('[class=" ev_material rowselected"]')
    }

    typevpName(value){
        cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]').type(value, {delay:20}).clear().type(value +'{enter}')
    }

}
export const vpGrid = new VPGrid()