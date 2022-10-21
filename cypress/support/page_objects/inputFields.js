export class inputField{
  NameAndSurename(){
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-nachname"]')
    .find('input').type('Anna').tab().type('Striha');
  }
   City(){
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-ort"]').click().type('Amsterdam');
}
}
export const inputTo = new inputField()