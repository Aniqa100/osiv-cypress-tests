export default {
  UserInfo() {
    return cy.get( '[class="akUserInfo"]' );
  },

  HomeBtn() {
    return cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_pres"]' );
  },

  HomeBtndef() {
    return cy.get( '[class="dhx_toolbar_btn dhxtoolbar_btn_def"]' );
  }

};
