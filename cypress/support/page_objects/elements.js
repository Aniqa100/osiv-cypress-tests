export class elements{
    UserName(){
        cy.get('[class="akUserInfo"]')
    }
     
  }
  
  export const userInfor = new elements()