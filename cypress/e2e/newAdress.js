import { Utility } from "../support/Utility"
const { navigateTo } = require("../support/page_objects/navigationPage");
const { dropdownValue } = require("../support/page_objects/dropdownSelection");
const {inputTo} = require("../support/page_objects/inputFields");
const {pressButton} = require("../support/page_objects/Buttons");
import { loginPage } from "../support/page_objects/LoginPage";
import { desktop } from "../support/page_objects/Desktop";
import { adressGrid } from "../support/page_objects/AdressGrid";
const url = new Utility().getBaseUrl();

describe('Test to add a new adress with Frau solutation ' + url,() => {
    it('Creating adress', () => {

    cy.UILoginWithSession(Cypress.env("username"), Cypress.env("password"))
    loginPage.open(url)
    desktop.Adressen().click()
    //navigateTo.folderAdressen()
    adressGrid.AddAdressBtn().click()
    //pressButton.newAdress()
    //cy.wait(1000)
    dropdownValue.adressTypeValue('024')
    dropdownValue.languageTypeValue('Deutsch')
    dropdownValue.salutationValue('Frau')
    dropdownValue.titleValue('Dr')
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