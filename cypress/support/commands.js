import "cypress-file-upload";
import "Moment";
import "cypress-wait-until";
import { getBaseUrl } from "./utility";
import { UserInfo } from "./utility";
import dashboard from "../support/page_objects/Dashboard";
import loginPage from "../support/page_objects/LoginPage";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

//Call getBaseUrl() to get environment specific url value
const url = getBaseUrl();
const user = UserInfo();

Cypress.Commands.add( "UILogin", ( username, password ) => {
  loginPage.open( url );

  // cy.get('[name="login_name"]').should('be.visible').type(user.email) - if I use this chain of command,
  // cypress might miss the several first characters because of typing too fast, or there is another reason
  cy.waitUntil( () => loginPage.userName().should( "be.visible" ) );
  loginPage.userName().wait( 0 ).focus().clear().type( username );
  loginPage.password().type( `${password  }{enter}` );
} );


Cypress.Commands.add( "UILoginWithSession", ( username, password ) => {
  cy.session( [username, password], () => {
    loginPage.open( url );
    cy.waitUntil( () => loginPage.userName().should( "be.visible" ) );
    loginPage.userName().wait( 0 ).focus().clear().type( username );
    loginPage.password().type( `${password  }{enter}` );
    dashboard.UserInfo().invoke( "text" ).then( text => {
      //expect( text ).to.equal( Cypress.env ( user ) );
      expect( text ).not.empty;
    } );
  } );
} );

/* Cypress.Commands.add("loginViaAPI", (uname, pwd) => {
         cy.request({
          method: "POST",
          url: Cypress.env("POSTMAN_MOCK_SERVER_URL") + "static/auth/j_spring_security_check?_ts=166849602-3054964117-1",
          body: {
            username: uname,
            password: pwd
          }
         })
  })
   */


/* Cypress.Commands.add('text', {prevSubject: true}, (subject, text) => {
  subject.val(text)
  return cy.wrap(subject)
}) */

/* Cypress.on('scrolled', $el => {
  $el.get(0).scrollIntoView({
    block: 'center',
    inline: 'center'
  });
}); */
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on( "uncaught:exception", ( err, runnable ) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
} );


// Hide all fetch/XHR requests in Cy console, toggle via cypress.json

if ( Cypress.config( "hideXHR" ) ) {
  const app = window.top;

  if ( !app.document.head.querySelector( "[data-hide-command-log-request]" ) ) {
    const style = app.document.createElement( "style" );
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute( "data-hide-command-log-request", "" );

    app.document.head.appendChild( style );
  }
}

