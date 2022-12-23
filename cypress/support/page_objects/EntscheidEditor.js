// @TODO check if deprecated
export class EntscheidEditor {
  Leistungsgruppe() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-leistungsgruppe"]' );
  }

  Leistungscode() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-leistungtext"]' );
  }

  Gesuch() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-gesuchtext"]' );
  }

  Ereignis() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-ereignistext"]' );
  }

  Bereich() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-bereich"]' );
  }

  Bearbeiter() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-bearbeiter"]' ).find( "input" );
  }

  Arbeitsliste() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-arbeitslistevalue"]' ).find( "input" );
  }

  Notizen() {
    return cy.get( '[akid="EntscheidDetailBasisDatenForm-bem"]' ).find( "textarea" );
  }

  DurchführungsstellenTab() {
    return cy.get( '[akid="EntscheidDetailBasisFrameTabbar-Durchführungsstellen"]' );
  }
}

export const entscheidEditor = new EntscheidEditor();
