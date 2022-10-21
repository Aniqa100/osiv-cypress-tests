import { type } from "os";

export class DropdownSelection{
    adressTypeValue(){

    cy.get('[class="dhxwin_active"][modalwindow="true"]')
    .find('[akid="sAdresseDetailOverviewForm-adresstyp"]').click().type('024').wait(500)
    .get('[class="select2-results__options"]').find('[akid="adresstyp-A05:111:000000238504"]').click();
    
    }

    languageTypeValue(){

    cy.get('[class="dhxwin_active"][modalwindow="true"]')
    .find('[akid="sAdresseDetailOverviewForm-sprache_bez"]').click().type('D').wait(500)
    .get('[class="select2-results__options"]').find('[akid="sprache_bez-A5E:000:090015857114"]').click();

    }

    salutationValue(){
     
    cy.get('[class="dhxwin_active"][modalwindow="true"]').find('[akid="sAdresseDetailOverviewForm-anredeartbez"]')
    .click('top').get('[class="select2-search select2-search--dropdown"]').type('Fr')
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
    
}

export const dropdownValue = new DropdownSelection()



