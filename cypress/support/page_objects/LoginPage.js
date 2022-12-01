export class LoginPage{
   open(url){
     cy.visit(url)
   }

   userName(){
    return cy.get('[name="login_name"]')
   }

   password(){
    return cy.get('[name="login_password"]')
   }

   okButton(){
    return cy.get('[class="dhxform_btn"]')
   }
}

export const loginPage = new LoginPage()