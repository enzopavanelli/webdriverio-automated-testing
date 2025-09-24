import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.appium.config.js";

export const config = {
  ...baseConfig,

  specs: ["../tests/specs/**/app*.spec.js"],

  capabilities: [
    {
      platformName: "Android",
      "wdio:maxInstances": 1,
      "appium:deviceName": "Pixel_8_Pro_Android_15_API_35",
      "appium:platformVersion": "15.0",
      "appium:orientation": "PORTRAIT",
      "appium:automationName": "UiAutomator2",
      "appium:app": join(
        process.cwd(),
        "apps",
        "android.wdio.native.app.v1.0.8.apk"
      ),
      "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
      "appium:newCommandTimeout": 240,
    },
  ],
};
