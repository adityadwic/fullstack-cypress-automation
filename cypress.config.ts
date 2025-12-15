import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://automationexercise.com',
    setupNodeEvents(on, config) {
      // Register mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Automation Exercise - Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
