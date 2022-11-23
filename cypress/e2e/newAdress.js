import { Utility } from "../support/Utility"
const { navigateTo } = require("../support/page_objects/navigationPage");
const { dropdownValue } = require("../support/page_objects/dropdownSelection");
const {inputTo} = require("../support/page_objects/inputFields");
const {pressButton} = require("../support/page_objects/Buttons");
const {postcodeValue} = require("../support/page_objects/dropdownSelection");
const {choosenElem} = require("../support/page_objects/elements")
const url = new Utility().getBaseUrl();

describe('Test to add a new adress with Frau solutation ' + url,() => {
    it('Creating adress and remove it', () => {

    cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
    cy.visit(url)
    navigateTo.folderAdressen()
    cy.wait(1000)
    pressButton.newAdress()
    cy.wait(1000)
    dropdownValue.adressTypeValue()
    dropdownValue.languageTypeValue()
    dropdownValue.salutationValue()
    dropdownValue.titleValue()
    inputTo.NameAndSurename('Anna', 'Striha')
    inputTo.City('Amsterdam');
    dropdownValue.postalcodeValue()
    pressButton.Generate()
    pressButton.modalOk()
    cy.wait(1000)
    pressButton.confirm()
    pressButton.Homebtn()
    
    
})
})