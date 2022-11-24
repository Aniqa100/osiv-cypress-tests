export class Tables{
    firstSelectedRow(){
        cy.waitUntil(() => cy.get('[class=" ev_material rowselected"]').should('be.visible'))
        cy.get('[class=" ev_material rowselected"]').trigger('dblclick');
        
     
  }  
      linkOnTable(){
  cy.contains('VRD').parents('[class=" ev_material rowselected"]').find('[class="akcelllink"]').click({force: true})
      }
}
  export const rowselected = new Tables()