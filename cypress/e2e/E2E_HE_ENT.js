import { navigateTo } from "../support/page_objects/navigationPage";
import { Utility } from "../support/Utility";
import {userInfor} from "../support/page_objects/elements"
import { inputTo } from "../support/page_objects/inputFields";



//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

describe('Verify Environment Config ' + url, () => {
    it('Verify Environment', () => {
        cy.visit(url); //use url variable
        cy.wait(30000);
        cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })
        cy.wait(20000);
        userInfor.UserName();
        navigateTo.folderVersicherte();
        cy.wait(5000);
        inputTo.VersichertenName('oco{enter}');

    });
});