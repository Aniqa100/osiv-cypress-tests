import { Utility } from "../support/Utility"


//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

describe('Verify Environment Config ' + url, () => {
    it('Verify Environment', () => {
        cy.visit(url); //use url variable
    });
});