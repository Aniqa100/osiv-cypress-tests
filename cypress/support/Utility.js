export class Utility {
    
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'FR') //Check the value
            return "https://osiv-frtest.ivnet.ch"; //return desired url
        else if (envi == 'NR')
            return "https://osiv-nrtest.ivnet.ch";
        else if (envi == 'FW')
            return "https://osiv-devcwe.ivnet.ch";
    }
    
      Entscheidrequest() {
        let envi = Cypress.env('ENV');
        if (envi == 'FR') //Check the value
            return 'FRCopiedinOsiv5';
        else if (envi == 'NR')
            return 'NRCopiedinOsiv5';

     }  
}
