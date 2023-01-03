export default {
  /* Versicherte() {
        return cy.get('[akid="itFolder-Versicherte"]')
    }, */
  /*  Adressen(){
        return cy.get('[akid="itFolder-Adressen"]')
    }, */
  Versicherte() {
    return cy.contains( "Versicherte" ).click().get( '[id="vsm-link-a317347e-400a-33b3-a214-102b5ae23ac1"]' );
  },

  Adressen() {
    return cy.contains( "Adressen" ).get( '[id="vsm-link-a715bf8f-d13e-f8b8-3f14-f962a8e505bd"]' );
  },

  Entscheid() {
    return cy.contains( "Entscheid" );
  }
};
