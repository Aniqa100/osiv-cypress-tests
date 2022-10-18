
const { navigateTo } = require("../support/page_objects/navigationPage");
const { dropdownValue } = require("../support/page_objects/dropdownSelection");
const {inputTo} = require("../support/page_objects/inputFields");
const {pressButton} = require("../support/page_objects/Buttons");
const {postcodeValue} = require("../support/page_objects/dropdownSelection")

describe('Test with Page Objects',() => {
    it('adress', () => {
    cy.visit('/');
    cy.wait(10000);
    cy.typeLogin({ email: 'hulk1', password: 'hulk1{enter}' })

    cy.wait(10000);
    cy.get('[class="akUserInfo"]').invoke('text').then( text => {
      expect(text).to.equal('Hulk1');
    })
    navigateTo.folderAdressen();
    cy.wait(1000);
    cy.get('[akid="AdresseQueryGrid-AdresseNew"]').click();
    cy.wait(1000);
    dropdownValue.adressTypeValue();
    dropdownValue.languageTypeValue();
    dropdownValue.salutationValue();
    dropdownValue.titleValue();
    inputTo.NameAndSurname();
    inputTo.City();
    dropdownValue.postalcodeValue();
    pressButton.Generate(); 
    pressButton.modatOk();
    cy.get('[class="swal-modal warningModal"]').find('[class="swal-button swal-button--replyok"]').contains('Ok').click()
    //cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_def"][title="Ok"]').click();
    
})
})