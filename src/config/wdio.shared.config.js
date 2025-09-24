export const config = {
  specs: [],

  async afterTest(_test, _context, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
        reportedEnvironmentVars: {
          "Node.js": process.version,
          "SO Host": process.platform,
        },
      },
    ],
  ],

  capabilities: [],
  logLevel: "debug",
  bail: 0,
  waitforTimeout: 45000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 3 * 60 * 1000,
  },
};
