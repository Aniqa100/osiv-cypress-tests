const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
    projectId: "sdkvf4",
    viewportWidth: 2560,
    viewportHeight: 1240,
    reporter: "cypress-multi-reporters",
      reporterOptions: {
        configFile: "reporter-config.json",
      },
    e2e: {
      setupNodeEvents(on, config) {
        let EntscheidIdNM;
        on("task", {
          setEntscheidIdNM: (val) => {
            return (EntscheidIdNM = val);
          },

          getEntscheidIdNM: () => {
            return EntscheidIdNM;
          },
        });

        /* module.exports = (on, config) => {
        on('before:browser:launch', (browser = {}, args) => {
          if (browser.name === 'chrome') {
            args.push('--disable-dev-shm-usage')
          } else if (browser.name === "edge") {
            args["disable-dev-shm-usage"] = true;
          }
      
          return args
        })
      } */
        // implement node event listeners here
      },
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
      excludeSpecPattern: [
        "**/1-getting-started/*",
        "**/2-advanced-examples/*",
      ],
      requestTimeout: 50000,
      numTestsKeptInMemory: 0,
      responseTimeout: 50000,
      pageLoadTimeout: 50_000,
      defaultCommandTimeout: 50_000,
      hideXHR: true,
      chromeWebSecurity: false,
      video: false,
      retries: {
        runMode: 1,
        openMode: 0,
      },
    },
  }

);
