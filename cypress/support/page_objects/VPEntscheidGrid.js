export default {
  findTableRowbyText( text ) {
    return cy.get( "#active-panel .objbox" ).find( "tbody" ).contains( "td", text );
  },

  CopyBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]' )
      .find( '[title="Kopieren"]' );
  },

  NewBtn() {
    return cy.get( '[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBlock"]' )
      .find( '[title="Neu"]' );
  }
}
