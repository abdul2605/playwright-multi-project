import { defineConfig, devices } from "@playwright/test";
import demo from "./env/demo.env";
import preprod from "./env/preprod.env";
import * as dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
   // baseURL: process.env.PREPROD_URL || demo.baseURL,

    /* Run tests with browser UI visible. */
    headless: false,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "demo",
      use: { ...devices["Desktop Chrome"], baseURL: demo.baseURL },
      metadata: {
        username: demo.username,
        password: demo.password
      }
    },

    {
      name: "preprod",
      use: { ...devices["Desktop Firefox"], baseURL: preprod.baseURL },
    },

    {
      name: "env_variable",
      use: { ...devices["Desktop Chrome"], baseURL: process.env.PREPROD_URL },
    },

    
  ],

});
