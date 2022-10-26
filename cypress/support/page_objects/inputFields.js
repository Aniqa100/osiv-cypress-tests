
export class inputField{
  NameAndSurename(name, surename){
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-nachname"]')
    .find('input').type(name).tab().type(surename);
  }
   City(city){
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-ort"]').click().type(city);
}
   VersichertenName(name){
    cy.get('[akid="sStammQueryB-BRS_Versicherten_Name"]').type(name);
   }
}
export const inputTo = new inputField()