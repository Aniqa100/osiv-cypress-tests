var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

export class DatePicker{
forBegin(){

    cy.get('[akid="EntscheidDetailBasisDatenForm-beginn_dat"]').find('input').type(today).click();

}

forBegin(){

    cy.get('[akid="EntscheidDetailBasisDatenForm-beginn_dat"]').find('input').type(today).click();

}
AnAuskleiden(){
    cy.get('[akid="EntscheidHilflosigkeitForm-aakvondat"]').find('input').type(today).click();
}

AufstehenAbsitzen(){
    cy.get('[akid="EntscheidHilflosigkeitForm-aaavondat"]').find('input').type(today).click();
}
Essen(){
    cy.get('[akid="EntscheidHilflosigkeitForm-essvondat"]').find('input').type(today).click();
}

}

export const selectDate = new DatePicker()