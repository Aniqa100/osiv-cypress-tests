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
    
    RequestEeEntscheid() {
        let envi = Cypress.env('ENV');
        if (envi == 'FR') //Check the value
            return "/web/Resource/Osiv.Entscheid.Entscheid.Query.EntscheidQueryBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22stamm_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A7531%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&skip=0&top=50&clientRequestId=1965&filter=%7B%22top%22%3A50%7D&_ts=166877765-5786082942-51"; //return desired url
        else if (envi == 'NR')
            return "/web/Resource/Osiv.Entscheid.Entscheid.Query.EntscheidQueryBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22stamm_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A7531%7D%5D%7D%2C%7B%22logic%22%3A%22or%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22arbeitsliste%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A%22N%22%7D%2C%7B%22field%22%3A%22arbeitsliste%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3A%22B%22%7D%5D%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&skip=0&top=50&clientRequestId=4070&filter=%7B%22orderBy%22%3A%22arbeitsliste%22%2C%22top%22%3A50%7D&_ts=166877721-7199055114-61";

    }
}
