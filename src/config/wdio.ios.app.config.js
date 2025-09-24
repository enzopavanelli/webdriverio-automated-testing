import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.appium.config.js";
import allureReporter from "@wdio/allure-reporter";

const isGhActions = process.env.GITHUB_ACTION;

export const config = {
  ...baseConfig,

  specs: ["../tests/specs/**/app*.spec.js"],

  capabilities: [
    {
      platformName: "iOS",
      "wdio:maxInstances": 1,
      "appium:fullReset": false,
      "appium:deviceName": "iPhone 16 Pro",
      "appium:platformVersion": "18.6",
      "appium:orientation": "PORTRAIT",
      "appium:automationName": "XCUITest",
      "appium:app": join(
        process.cwd(),
        "apps",
        "ios.simulator.wdio.native.app.v1.0.8.zip"
      ),
      "appium:newCommandTimeout": 240,
      "appium:webviewConnectTimeout": 5000,
    },
  ],
};
