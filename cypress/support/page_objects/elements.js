export class elements{
    UserName(){
        cy.get('[class="akUserInfo"]').invoke('text').then( text => {
            expect(text).to.equal('Hulk1')
    })
     
  }
}
  export const userInfor = new elements()