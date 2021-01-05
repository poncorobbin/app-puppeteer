/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://idcomm.kanvasindonesia.com",
    //URL: "http://localhost",
  },
  testMatch: ["**/__tests__/**/*.test.js"],
  verbose: true,
  testTimeout: 60000,
  collectCoverage: true,
  coverageReporters: ["text-summary", "html"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};
