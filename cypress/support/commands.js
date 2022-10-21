import 'cypress-file-upload';
import 'Moment';
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

Cypress.Commands.add('typeLogin', (user) => {
  cy.get('[name="login_name"]').type(user.email)
  cy.get('[name="login_password"]').type(user.password)
  
})

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
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


  // Hide all fetch/XHR requests in Cy console, toggle via cypress.json

if (Cypress.config('hideXHR')) {
  const app = window.top;

  if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML =
      '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
  }
}

