const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
  projectId: 'sdkvf4',
  viewportWidth: 2560,
  viewportHeight: 1240,
   e2e: {
    setupNodeEvents(on, config) {
      module.exports = (on, config) => {
        on('before:browser:launch', (browser = {}, args) => {
          if (browser.name === 'chrome') {
            args.push('--disable-dev-shm-usage')
          } else if (browser.name === "edge") {
            args["disable-dev-shm-usage"] = true;
          }
      
          return args
        })
      }
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*','**/DemoProtocolwithoutsession.js', '**/testWithPageObjects.js', '**/InvGradEK_Test.js'],
    requestTimeout : 50000,
    //numTestsKeptInMemory: 0,
    responseTimeout : 50000,
    pageLoadTimeout: 50_000,
    defaultCommandTimeout: 50_000,
    hideXHR: true,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true, 
    video: true,
    retries: {
      runMode: 2,
      openMode: 0

    },

  
  }
});
