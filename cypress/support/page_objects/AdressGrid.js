export class AdressGrid{
    AddAdressBtn(){
        return cy.get('[akid="AdresseQueryGrid-AdresseNew"]');
    }

  
}
export const adressGrid = new AdressGrid()