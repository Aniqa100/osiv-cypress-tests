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
     cy.get('[akid="EntscheidDetailWindowTabbar-Details"]')
     .should('have.css', 'border-left-color', 'rgb(255, 165, 0)');
     }

     BasicDataColor() {
        cy.get('[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]')
        .should('have.css', 'border-left-color', 'rgb(255, 165, 0)');
     }

     HilflosigkeitColor(){
     cy.get('[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]')
     .should('have.css', 'border-left-color', 'rgb(255, 165, 0)'); 
     }

     HilflosigkeitNotColor(){
      cy.get('[akid="EntscheidDetailBasisFrameTabbar-Hilflosigkeit"]')
      .should('not.have.css', 'border-left-color', 'rgb(255, 165, 0)'); 
      }

     BasicDataNotColor(){
      cy.get('[akid="EntscheidDetailBasisFrameTabbar-Basisdaten"]')
      .should('not.have.css', 'border-left-color', 'rgb(255, 165, 0)'); 
      }
     EntscheidStatus(status){
      cy.get('[akid="EntscheidDetailBasisDatenForm-fieldsetbasisinformationen"]').then(basicdataeditor => {

        cy.wrap(basicdataeditor).get('[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]')
        .find('input').then( input => {
            cy.wrap(input).invoke('prop', 'value').should('contain', status)
 })

})
     }

     AblaufWartefrist(date){

      cy.get('[akid="EntscheidHilflosigkeitForm-re_ablauf_wf"]').find('input').then (input => {
        cy.wrap(input).invoke('prop', 'value').should('contain', date)
      })
     }

     Wartefrist(year){
      cy.get('[akid="EntscheidWartefristForm"]').then(Wartefrist => {
        cy.wrap(Wartefrist).get('[akid="EntscheidWartefristForm-augradds"]').find('input').then(input => {
            cy.wrap(input).invoke('prop', 'value').should('contain', '20 %')
        })
        
        cy.wrap(Wartefrist).get('[akid="EntscheidWartefristForm-re_au_grenzgrad"]').find('input').then(input => {
            cy.wrap(input).invoke('prop', 'value').should('contain', '20 %')
        })

        / cy.wrap(Wartefrist).get('[akid="EntscheidWartefristForm-audauer"]').find('input').then(input => {
            cy.wrap(input).invoke('prop', 'value').should('contain', year)
        }) 
    })
     }
     WartefristVerlauf(Beginn, Ende, AnzahlTage, HEGradin){
     cy.get('[akid="WartefristQueryGrid"]').find('[class="objbox"]').find('table').find('tbody').contains('tr', '20')
        .then(row =>{
            cy.wrap(row).find('td').eq(0).should('contain', Beginn)
            cy.wrap(row).find('td').eq(1).should('contain', Ende)
            cy.wrap(row).find('td').eq(2).should('contain', AnzahlTage)
            cy.wrap(row).find('td').eq(3).should('contain', HEGradin)
        })
      }
      HEGrad(Ende){
        cy.get('[akid="EntscheidHEGradBerechnungForm"]').then(form =>{
          cy.wrap(form).find('[akid="EntscheidHEGradBerechnungForm-beginnhebez"]').should('contain', 'Leicht')
          cy.wrap(form).get('[akid="EntscheidHEGradBerechnungForm-beginn_dat"]').find('input').then(input => {
            cy.wrap(input).invoke('prop', 'value').should('contain', Ende)  
          })
               
      })           
    }
       HEGradVerlauf(Beginn, Ende, HEGrad){
        cy.get('[akid="HeGradQueryGrid"]').find('[class="objbox"]').find('table').find('tbody').contains('tr', 'Leicht')
           .then(row =>{
               cy.wrap(row).find('td').eq(0).should('contain', Beginn)
               cy.wrap(row).find('td').eq(1).should('contain', Ende)
               cy.wrap(row).find('td').eq(2).should('contain', HEGrad)
           })
         }
}
  export const compareValuesOf = new AssertValues()