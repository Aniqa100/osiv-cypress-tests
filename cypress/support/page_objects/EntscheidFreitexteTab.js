export class EntscheidFreitexteTab{
    TextForm(text){
        cy.get('[akid="BegruendungHTMLTextForm"]').find('.cke_wysiwyg_div').type(text);
    }
    BegründungSpeichernBtn(){
        return cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidBegruendungBlock"]')
        .find('[title="Begründung speichern"]')
    }
    
    ValidateTextFormValue(value){
        cy.get('[akid="BegruendungHTMLTextForm"]').find('.cke_wysiwyg_div').find('p').invoke('text').then(text =>{
          expect(text).to.equal(value)
        })
    }
    VerfügungBeiblattAK(){
        return cy.get('[akid="EntscheidFreitextTabbar-Verfügung / Beiblatt AK"]')
     }
    FreitextgenerierenBtn() {
        cy.get('[class="dhxrb_block_base ribbonBlock"],[class="dhxrb_block_base ribbonBlock_EntscheidVerfuegungBeiblattAKBlock"]')
        .find('[title="Freitext generieren"]')
    }
}
export const entscheidFreitexteTab = new EntscheidFreitexteTab()