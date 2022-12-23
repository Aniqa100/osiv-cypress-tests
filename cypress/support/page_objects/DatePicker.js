// @TODO check if deprecated
export class DatePicker {
  forBegin() {
    cy.get( '[akid="EntscheidDetailBasisDatenForm-beginn_dat"]' ).find( "input" ).type( today ).click();
  }

  AnAuskleiden() {
    cy.get( '[akid="EntscheidHilflosigkeitForm-aakvondat"]' ).find( "input" ).type( today ).click();
  }

  AufstehenAbsitzen() {
    cy.get( '[akid="EntscheidHilflosigkeitForm-aaavondat"]' ).find( "input" ).type( today ).click();
  }

  Essen() {
    cy.get( '[akid="EntscheidHilflosigkeitForm-essvondat"]' ).find( "input" ).type( today ).click();
  }

}

export const selectDate = new DatePicker();
