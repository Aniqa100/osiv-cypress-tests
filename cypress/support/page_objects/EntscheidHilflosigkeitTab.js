export class EntscheidHilflosigkeitTab{

    SpeichernBtn(){
        return cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidHilflosigkeitBlock"]')
        .find('[title="Speichern"]')
    }

    ConfirmBtn(){
        return cy.get('[class="swal-modal warningModal"]')
        .find('[class="swal-button swal-button--replyok"]').contains('Ok')
    }

    SelectArtderInvaliditätValue(value){
        cy.get('[akid="EntscheidHilflosigkeitForm-verfahrenbez"]').click()
        cy.get('[class="select2-results__options"]').contains(value).click()
      }

    SelectAusgleichskasseValue(value){
        cy.get('[akid="EntscheidHilflosigkeitForm-akbez"]').click()
        cy.get('[class="select2-results__options"]').contains(value).click()
         
      } 
      
    SelectAufenthaltbezValue(value){
        cy.get('[akid="EntscheidHilflosigkeitForm-aufenthaltbez"]').click()
        cy.get('[class="select2-results__options"]').contains(value).click()
      }
    SelectAnAuskleidenDate(today){
        cy.get('[akid="EntscheidHilflosigkeitForm-aakvondat"] input').type(today).click();
    }
    SelectAufstehenAbsitzenDate(today){
        cy.get('[akid="EntscheidHilflosigkeitForm-aaavondat"] input').type(today).click();
    }
    SelectEssenDate(today){
        cy.get('[akid="EntscheidHilflosigkeitForm-essvondat"] input').type(today).click();
    }
    ValidateAblaufWartefristValue(date){
        cy.get('[akid="EntscheidHilflosigkeitForm-re_ablauf_wf"] input').invoke('prop', 'value').should('contain', date)
    }
    ValidateWFGradValue(value){
        cy.get('[akid="EntscheidWartefristForm-augradds"] input').invoke('prop', 'value').should('contain', value)
    }
    ValidateTageValue(value){
        cy.get('[akid="EntscheidWartefristForm-audauer"] input').invoke('prop', 'value').should('contain', value)
    }
    ValidateGrenzgradValue(value){
        cy.get('[akid="EntscheidWartefristForm-re_au_grenzgrad"] input').invoke('prop', 'value').should('contain', value)
    }
    ValidateBeginnDate(Beginn){
        cy.get('[akid="WartefristQueryGrid"]').find('[class="objbox"] td').eq(0).should('contain', Beginn)
    }
    ValidateEndeDate(Ende){
        cy.get('[akid="WartefristQueryGrid"]').find('[class="objbox"] td').eq(1).should('contain', Ende)
    }
    ValidateAnzahlTageValue(AnzahlTage){
        cy.get('[akid="WartefristQueryGrid"]').find('[class="objbox"] td').eq(2).should('contain', AnzahlTage)
    }
    ValidateHEGradinValue(HEGradin){
        cy.get('[akid="WartefristQueryGrid"]').find('[class="objbox"] td').eq(3).should('contain', HEGradin)
    }
    ValidateHEGradValue(value){
        cy.get('[akid="EntscheidHEGradBerechnungForm-beginnhebez"]').should('contain', value)
    }
    ValidateHEGradBeginnDate(Beginn){
        cy.get('[akid="EntscheidHEGradBerechnungForm-beginn_dat"] input').invoke('prop', 'value').should('contain', Beginn)  
    }
    ValidateHeGradabDate(Beginn){
        cy.get('[akid="HeGradQueryGrid"]').find('[class="objbox"] td').eq(0).should('contain', Beginn)
    }
    ValidateHEabDate(Beginn){
        cy.get('[akid="HeGradQueryGrid"]').find('[class="objbox"] td').eq(1).should('contain', Beginn)
    }
    ValidateHEGradVerlaufValue(value){
        cy.get('[akid="HeGradQueryGrid"]').find('[class="objbox"] td').eq(2).contains(value)
          
         }
    ValidateTextOfWarningmeg(value){
        cy.get('[class="swal-modal warningModal"]').find('[class="swal-content"]').contains(value)
    }
}
export const entHilflosigkeitTab = new EntscheidHilflosigkeitTab()