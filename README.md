# Web Automation Playwright TS

This repository is a Playwright + TypeScript UI automation framework for browser-based testing.

## What is included

- Playwright test runner with TypeScript
- Page object pattern in `Pages/`
- Custom fixtures in `fixture/`
- Environment configuration in `env/`
- Test data definitions in `test-data/`
- HTML report output via Playwright

## Prerequisites

- Node.js
- npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

3. (Optional) create a root `.env` file if you want to use the `env_variable` project:

```env
PREPROD_URL=https://example.com
```

## Project structure

- `tests/` — test spec files like `orange.spec.ts`
- `Pages/` — page object classes for UI actions
- `fixture/` — shared Playwright fixtures and custom test setup
- `modal/` — data models such as `LoginUser`
- `test-data/` — reusable test data values
- `env/` — environment-specific configuration data
- `playwright.config.ts` — Playwright configuration and project definitions

## Key files

- `playwright.config.ts` — defines test directory, reporter, browser projects, and common settings
- `fixture/app.fixture.ts` — creates `homePage` and `dashBoard` fixtures for tests
- `Pages/home-page.ts` — page object for login/navigation actions
- `Pages/dash-board.ts` — page object for dashboard interactions
- `tests/orange.spec.ts` — example test using the custom fixtures

## Environment configuration

- `env/demo.env.ts` — demo environment settings:
  - `baseURL`: https://opensource-demo.orangehrmlive.com
  - `username`: Admin
  - `password`: admin123
- `env/preprod.env.ts` — preprod environment settings:
  - `baseURL`: https://www.amazon.com

## Playwright projects

Defined projects in `playwright.config.ts`:

- `demo`
  - Desktop Chrome
  - Uses `env/demo.env.ts`
  - Uses saved auth state from `playwright/.auth/auth.json`
- `preprod`
  - Desktop Firefox
  - Uses `env/preprod.env.ts`
- `env_variable`
  - Desktop Chrome
  - Uses `PREPROD_URL` from root `.env`
- `setup`
  - A setup project used to create or refresh authentication state
- `storageState`
  - Desktop Chrome
  - Reuses the saved auth state file `playwright/.auth/auth.json`

## Running tests

Run all tests:

```bash
npm test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Run Playwright debug mode:

```bash
npm run test:debug
```

View the generated HTML report:

```bash
npm run test:report
```

Run a single project:

```bash
npx playwright test --project=demo
```

Run a single spec:

```bash
npx playwright test tests/orange.spec.ts --project=demo
```

## Notes

- The sample test `tests/orange.spec.ts` uses the custom fixture `test` from `fixture/app.fixture.ts`.
- `Pages/home-page.ts` has helper methods for login and navigation.
- `Pages/dash-board.ts` contains dashboard interaction methods like `clickAdmin()`.
- If you use the `env_variable` project, make sure `PREPROD_URL` is set in a root `.env`.
- The project currently runs with `headless: false` by default in config.
