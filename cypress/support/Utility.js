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
    
     /* Entscheidrequest() {
        let envi = Cypress.env('ENV');
        if (envi == 'FR') //Check the value
            return ''https://osiv-frtest.ivnet.ch/web/Resource/Osiv.Entscheid.Entscheid.EntscheidBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22entscheid_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A'+ EntscheidIdNM +'%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&clientRequestId=7782&filter=%7B%22orderBy%22%3A%22Entscheid_ID%20descending%22%7D&_ts=166973042-811467938-45'';
        else if (envi == 'NR')
            return 'https://osiv-nrtest.ivnet.ch/web/Resource/Osiv.Entscheid.Entscheid.EntscheidBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22entscheid_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A'+ EntscheidIdNM +'%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&clientRequestId=164&filter=%7B%22orderBy%22%3A%22Entscheid_ID%20descending%22%7D&_ts=166972068-6678884243-66';

     }  */
}
