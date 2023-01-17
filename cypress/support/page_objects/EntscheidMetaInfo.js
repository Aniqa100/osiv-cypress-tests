export default {
  MetaInfoTab() {
    return cy.get( '[akid="EntscheidDetailWindowTabbar-Meta-Info"]' );
  },

  EntscheidIdNM() {
    cy.get( '[akid="EntscheidMetaInfoForm-entscheid_id"] input' );
  },

  SaveEntscheidIdNMtoGlobalValue() {
    cy.get( '[akid="EntscheidMetaInfoForm-entscheid_id"] input' )
      .invoke( "prop", "value" ).then( EntscheidIdNM => {
        cy.task( "setEntscheidIdNM", EntscheidIdNM );
        console.log(EntscheidIdNM);
      } );
      
  }
};
