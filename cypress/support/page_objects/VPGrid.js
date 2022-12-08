export class VPGrid{
    vpName(){
        return cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]')
    }

    vpSelectedRow(){
        return cy.get('[class=" ev_material rowselected"]')
    }

    typevpName(value){
        return cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]').type(value, {delay:1000}).clear()
    }

}
export const vpGrid = new VPGrid()