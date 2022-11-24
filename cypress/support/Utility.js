export class Utility {
    
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'FR') //Check the value
            return "https://osiv-frtest.ivnet.ch"; //return desired url
        else if (envi == 'NR')
            return "https://osiv-nrtest.ivnet.ch";
        else if (envi == 'FW')
            return "https://fw-test2.ivnet.ch";
    }
    
    EntscheidNr() {
        let envi = Cypress.env('ENV');
        if (envi == 'FR') //Check the value
            return 23175;
        else if (envi == 'NR')
            return 23152;

    }
}
