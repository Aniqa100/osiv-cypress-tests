export class VPGrid{
    vpName(){
        return cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]')
    }

    vpSelectedRow(){
        return cy.get('[class=" ev_material rowselected"]')
    }

}
export const vpGrid = new VPGrid()