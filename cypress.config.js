import { defineConfig } from "cypress";

export default defineConfig({
  // video: true,
  // screenshotOnRunFailure: true,
  // defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: 'http://localhost:5173',
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
