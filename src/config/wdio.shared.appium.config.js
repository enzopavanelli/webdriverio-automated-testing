import { config as baseConfig } from "./wdio.shared.config.js";

export const config = {
  ...baseConfig,

  services: [
    ...(baseConfig.services || []),
    [
      "appium",
      {
        args: {
          relaxedSecurity: true,
          log: "./logs/appium.log",
        },
      },
    ],
  ],
  before: async () => {
    if (driver.isAndroid) {
      await driver.updateSettings({
        waitForSelectorTimeout: 3 * 1000,
      });
    }
  },
};
