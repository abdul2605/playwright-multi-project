## Don't forget to give a :star: to make the project popular.

## :question: What is this repository about?

This repository contains a Playwright + TypeScript automation framework for UI testing. It includes example tests, page object models, fixtures, and environment-based configuration for running browser tests against demo and preprod setups.

## Current project highlights

- Playwright test runner with TypeScript
- Page object pattern under the Pages folder
- Reusable fixtures in the fixture folder
- Environment configuration stored in the env folder
- HTML test reporting enabled in Playwright

## Prerequisites

Make sure the following are installed on your machine:

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

3. Optional: create a root `.env` file for the `env_variable` project:

```env
PREPROD_URL=https://example.com
```

## Project structure

- `tests/` — test specifications such as `tests/orange.spec.ts`
- `Pages/` — page object classes
- `fixture/` — shared fixtures and setup helpers
- `modal/` — supporting model or helper classes
- `test-data/` — test input data
- `env/` — environment configuration files
- `playwright.config.ts` — Playwright configuration and project definitions

## Environment configuration

The project currently supports three Playwright projects:

- `demo` — uses `env/demo.env.ts`
- `preprod` — uses `env/preprod.env.ts`
- `env_variable` — uses `process.env.PREPROD_URL` from a root `.env` file

## Run tests

Run the available npm scripts:

```bash
npm test
npm run test:headed
npm run test:debug
npm run test:report
```

Run a specific project or spec directly:

```bash
npx playwright test --project=demo
npx playwright test --project=preprod
npx playwright test --project=env_variable
npx playwright test tests/orange.spec.ts --project=demo
```

Debug tests interactively:

```bash
PWDEBUG=1 npx playwright test --project=demo
# or
npx playwright test --project=demo --debug
```

## Notes

- The `demo` environment includes a base URL, username, and password.
- The `preprod` environment uses its own base URL.
- The `env_variable` project reads `PREPROD_URL` from `.env` and sets it as the Playwright base URL.
