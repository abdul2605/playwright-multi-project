## Don't forget to give a :star: to make the project popular.

## :question: What is this Repository about?

- This repo has example code for running Web Automation Tests using Playwright with TypeScript.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

3. (Optional) Create a root `.env` file for the `env_variable` project:

```env
PREPROD_URL=https://example.com
```

## Environment configuration

This project supports three Playwright projects with environment configuration:

- `demo` — uses `env/demo.env.ts`
- `preprod` — uses `env/preprod.env.ts`
- `env_variable` — uses `process.env.PREPROD_URL` from a root `.env` file

`playwright.config.ts` loads environment variables with `dotenv.config()` so create a `.env` file in the repository root when using `env_variable`.

Example `.env` contents:

```env
PREPROD_URL=https://example.com
```

## Run tests

Use Playwright test commands and choose the project:

```bash
npx playwright test --project=demo
npx playwright test --project=preprod
npx playwright test --project=env_variable
Specific Test
npx playwright test tests/orange.spec.ts --project=demo
```

To keep the browser open for debugging, run with Playwright debug mode:

```bash
PWDEBUG=1 npx playwright test --project=demo
# or
npx playwright test --project=demo --debug
```

## Notes

- `env/demo.env.ts` provides `baseURL`, `username`, and `password` for the `demo` project.
- `env/preprod.env.ts` provides `baseURL` for the `preprod` project.
- `env_variable` reads `PREPROD_URL` from `.env` and sets it as the Playwright `baseURL`.
