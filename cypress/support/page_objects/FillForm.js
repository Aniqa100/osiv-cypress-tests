export class fillFormValues{
    NeuenEntscheidErstellenForm(lgname, ltvalue){
        cy.get('[class="dhxwin_active"][modalwindow="true"]')
          .find('[akid="CreateEntscheidForm-createentscheidfieldset"]')
          .then (basicdata =>{
              cy.wrap(basicdata).get('[akid="CreateEntscheidForm-leistungsgruppe"]')
                .click().type(lgname).get('[class="select2-results__options"]').click();
              cy.wrap(basicdata).get('[akid="CreateEntscheidForm-leistungtext"]')
                .click().type(ltvalue).wait(500).get('[class="select2-results__options"]').click();                         
            })
     
  }                

     EditEntscheidDatenForm(entscheid, supertext, entscheidtyp){
        cy.get('[akid="EntscheidDetailBasisDatenForm-fieldsetbasisinformationen"]').then(basicdataeditor => {
            cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-entscheidvalue"]')
            .click().type(entscheid).wait(500).get('[class="select2-results__options"]').click()

            cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-supertextbez"]')
            .click().type(supertext).wait(500).get('[class="select2-results__options"]').click()

            cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-entscheidtypbez"]')
            .click().type(entscheidtyp).wait(500).get('[class="select2-results__options"]').click()

     })
    }

     EditErweiterteInfoForm(gebrechen, funktionsausfall){
        cy.get('[akid="EntscheidDetailBasisDatenForm-fieldseterweiterteinformation"]').then(info => {
            cy.wrap(info).get('[akid="EntscheidDetailBasisDatenForm-gebrechen"]')
            .click().type(gebrechen).wait(500).get('[class="select2-results__options"]').click()
            cy.wrap(info).get('[akid="EntscheidDetailBasisDatenForm-funktausfall"]')
            .click().type(funktionsausfall).wait(500).get('[class="select2-results__options"]').click()
     })
    
    }

     
}
  export const fillForm = new fillFormValues()

