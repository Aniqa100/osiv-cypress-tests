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
    //baseUrl: 'https://demo.osiv.ch',
    //baseUrl: 'https://osiv-nrtest.ivnet.ch',
    baseUrl: 'https://osiv-frtest.ivnet.ch',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    //requestTimeout : 30000,
    //numTestsKeptInMemory: 0,
    //responseTimeout : 50000,
    pageLoadTimeout: 100000,
    hideXHR: true,
    chromeWebSecurity: false
  
  }
});
