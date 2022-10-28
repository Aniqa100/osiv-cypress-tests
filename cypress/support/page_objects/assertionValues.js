export class AssertValues{
    EntscheidCreation(){

        cy.get('[class="dhxwin_active"][modalwindow="true"]')
          .find('[akid="CreateEntscheidForm-createentscheidfieldset"]')
          .then (basicdata =>{ 

        cy.wrap(basicdata).get('[akid="CreateEntscheidForm-gesuchtext"]')
          .find('[class="select2-selection__rendered"]').invoke('text').then( text => {
            expect(text).to.equal('Gesuch vom 01.02.2021');
         })
         cy.wrap(basicdata).get('[akid="CreateEntscheidForm-ereignistext"]')
           .find('[class="select2-selection__rendered"]').invoke('text').then( text => {
            expect(text).to.equal('Ereignis Basis vom 20.07.2022');
         }) 
         cy.wrap(basicdata).get('[akid="CreateEntscheidForm-bereich"]')
           .find('[class="select2-selection__rendered"]').invoke('text').then( text => {
            expect(text).to.equal('IV Erwachsene');
         }) 
         cy.wrap(basicdata).get('[akid="CreateEntscheidForm-bearbeiter"]')
           .find('[value="5015"]').invoke('text').then( text => {
            expect(text).to.equal('Hulk1 - Hulk Eins');
         }) 
         cy.wrap(basicdata).get('[akid="CreateEntscheidForm-arbeitslistevalue"]')
           .find('input').then( input => {
         cy.wrap(input).invoke('prop', 'value').should('contain', 'Neu')
         })
    })
  }
  EntscheidEditor(){
             cy.get('[akid="EntscheidDetailBasisDatenForm-fieldsetbasisinformationen"]').then(basicdataeditor => {

                cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]')
                .find('input').then( input => {
                    cy.wrap(input).invoke('prop', 'value').should('contain', 'Neu')
         })
                cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-gesuchtext"]')
                .find('[class="select2-selection__rendered"]').invoke('text').then( text => {
                    expect(text).to.equal('Gesuch vom 01.02.2021');
         }) 
                cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-ereignistext"]')
                .find('[class="select2-selection__rendered"]').invoke('text').then( text => {
                    expect(text).to.equal('Ereignis Basis vom 20.07.2022');
         }) 
                cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-bereich"]')
                .find('[class="select2-selection__rendered"]').invoke('text').then( text => {
                     expect(text).to.equal('IV');
         }) 
               cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-bearbeiter"]')
                .find('input').then( input => {
                    cy.wrap(input).invoke('prop', 'value').should('contain', 'Hulk1 - Hulk Eins')
            
         }) 
             })



  }

     DetailsTabColor() {
  cy.get('[akid="EntscheidDetailWindowTabbar-Details"]').should('have.css', 'border-left-color', 'rgb(255, 165, 0)');
     }

     BasicDataColor() {
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]')
        .should('have.css', 'border-left-color', 'rgb(255, 165, 0)');
     }

     HilflosigkeitColor(){
     cy.get('[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]')
     .should('have.css', 'border-left-color', 'rgb(255, 165, 0)'); 
     }
}
  export const compareValuesOf = new AssertValues()