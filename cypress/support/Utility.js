export default {
  getBaseUrl() {
    //Get the value of evnironment variable i.e FR, NR, FW
    const envi = Cypress.env( "ENV" );

    //Check the value and return desired url
    if ( envi === "FR" ) return "https://osiv-frtest.ivnet.ch";
    if ( envi === "NR" ) return "https://osiv-nrtest.ivnet.ch";
    if ( envi === "FW" ) return "https://osiv-devcwe.ivnet.ch";
  },

  Entscheidrequest() {
    const envi = Cypress.env( "ENV" );
    if ( envi === "FR" ) return "FRCopiedinOsiv5";
    if ( envi === "NR" ) return "NRCopiedinOsiv5";
  },

  UserInfo() {
     const user = Cypress.env ( "user" )
     if ( user === "username") return "Hulk1";
     if ( user === "username1") return "User1"
  }
};
