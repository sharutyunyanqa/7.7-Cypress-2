const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eftf84",
  e2e: {
   baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
