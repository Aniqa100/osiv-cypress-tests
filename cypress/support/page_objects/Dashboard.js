//import {dashboard} from "../support/page_objects/Dashboard";
export class Dashboard{
    UserInfo() {
        return cy.get('[class="akUserInfo"]')
    }
    HomeBtn(){
        return cy.get('[class="dhx_toolbar_btn dhxtoolbar_btn_pres"]')
    }
}
export const dashboard = new Dashboard()