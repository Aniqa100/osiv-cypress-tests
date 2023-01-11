import * as commonButtons from "./CommonButtons.js";
export default {

    ...commonButtons,
     
    DiskussionStartenBtn() {
        return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidDiskutierenSpezifischeFunktionenBlock"]' )
        .find( '[title="Diskussion starten"]' )
    },
    DiskussionbeendenBtn() {
        return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidDiskutierenSpezifischeFunktionenBlock"]' )
        .find( '[title="Diskussion beenden"]' )
    },

    SelectArztValue( value ) {
        cy.get( '[akid="DiskutierenForm-arztbearbeiter"]' ).click();
        cy.get( '[class="select2-results__options"]' ).contains( value ).click(); 
    },
    
    DiskussionfürübrigeTeilnehmerabbrechen() {
        return cy.get( '[akid="DiskutierenForm-EndDiskutierenFuerAlleToggle"] .chbx0' );
    },

    Meldung( value ) {
        cy.get( '[akid="DiskutierenForm-EndDiskutierenMeldung"] textarea' ).type( value )
    }

  };
  