
export class DropdownSelection{

  //Adress dropdowns
    adressTypeValue(){

    cy.get('[class="dhxwin_active"][modalwindow="true"]')
      .find('[akid="sAdresseDetailOverviewForm-adresstyp"]').click().type('024').wait(500)
      .get('[class="select2-results__options"]').click();
    }

    languageTypeValue(){

    cy.get('[class="dhxwin_active"][modalwindow="true"]')
      .find('[akid="sAdresseDetailOverviewForm-sprache_bez"]').click().type('Deutsch').wait(500)
      .get('[class="select2-results__options"]').click();
    }

    salutationValue(){
     
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-anredeartbez"]')
      .click('top').get('[class="select2-search select2-search--dropdown"]').type('Frau')
      .get('[class="select2-results"]').click();
    
 }

    titleValue(){
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-titel_adresstitel"]')
      .click('top').get('[class="select2-search select2-search--dropdown"]').type('Dr')
      .get('[class="select2-results__options"]').click();
    }

    postalcodeValue(){

    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-postleitzahl"]').click()
      .get('[class="select2-search select2-search--dropdown"]').type('1000')
      .get('[class="select2-results__options"]').find('[akid="postleitzahl-A52:ce043a166bb566939c1497ce242b3e34"]').click();

    }
    //Entscheid dropdowns

    verfahrenbezVaue(value){
      cy.get('[akid="EntscheidHilflosigkeitForm-verfahrenbez"]').click()
       .get('[class="select2-search select2-search--dropdown"]').type(value).wait(500)
       .get('[class="select2-results__options"]').click();
    }

    akbezValue(value){
      cy.get('[akid="EntscheidHilflosigkeitForm-akbez"]').click()
        .get('[class="select2-search select2-search--dropdown"]').type(value).wait(500)
        .get('[class="select2-results__options"]').click();
       
    }

    aufenthaltbezValue(value){
      cy.get('[akid="EntscheidHilflosigkeitForm-aufenthaltbez"]').click()
        .get('[class="select2-search select2-search--dropdown"]').type(value).wait(500)
        .get('[class="select2-results__options"]').click();
    }

    DruckerAuswählen(value){
      cy.get('[akid="DruckauftragDetailForm-drucker_benutzer"]').click()
        .get('[class="select2-search select2-search--dropdown"]').type(value).wait(500)
        .get('[class="select2-results__options"]').click();
    }

    // Protocol dropdowns
    NewProtocoltype(type){
      cy.waitUntil(() => cy.get('[class="dhxwin_active"][modalwindow="true"]').should('be.visible'))
      cy.get('[akid="sProtokollDetailOverviewForm"]').find('[akid="sProtokollDetailOverviewForm-protokolltypbez"]').click()
        .type(type).wait(500).get('[class="select2-results__options"]').click()   
         
    }
    InPapierkorbForm(value){
      cy.get('[akid="sProtokollInPapierkorbForm-geloeschtgrund"]').click()
      cy.get('[class="select2-results__options"]').contains(value).click()
    }
    
  
}

export const dropdownValue = new DropdownSelection()



