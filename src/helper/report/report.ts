const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright Automation Report",
  pageTitle: "FreeCRM Application Test Report",
  displayDudation: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "126",
    },
    device: "JahnaviShivaraj",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "FreeCrm Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
    ],
  },
});