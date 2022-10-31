import { Utility } from "../support/Utility"
const { navigateTo } = require("../support/page_objects/navigationPage");
const { dropdownValue } = require("../support/page_objects/dropdownSelection");
const {inputTo} = require("../support/page_objects/inputFields");
const {pressButton} = require("../support/page_objects/Buttons");
const {postcodeValue} = require("../support/page_objects/dropdownSelection");
const {userInfor} = require("../support/page_objects/elements")
const url = new Utility().getBaseUrl();

describe('Test with Page Objects ' + url,() => {
    it('adress', () => {
    cy.visit(url);
    //cy.wait(30000);
    cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })
    cy.wait(30000);
    userInfor.UserName();
    navigateTo.folderAdressen();
    cy.wait(10000);
    pressButton.newAdress();
    cy.wait(10000);
    dropdownValue.adressTypeValue();
    dropdownValue.languageTypeValue();
    dropdownValue.salutationValue();
    dropdownValue.titleValue();
    inputTo.NameAndSurename('Anna', 'Striha');
    inputTo.City('Amsterdam');
    dropdownValue.postalcodeValue();
    pressButton.Generate(); 
    pressButton.modalOk();
    cy.wait(2000);
    pressButton.confirm();
    
})
})