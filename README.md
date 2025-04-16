# DuckDuckGo E2E Assessment 🥷

End-to-end test suite for DuckDuckGo using **Playwright** and **TypeScript**.

This project was developed as part of a technical assessment and showcases modern testing practices, API handling, and UI validation with proper structure, reusability, and debugging strategy.

---

## ✅ Test Coverage

| Test Case | Description |
|-----------|-------------|
| 1 | Search for `android` and assert that each result title contains the term |
| 2 | Validate that clicking "All regions" reveals a dropdown with more than 10 region options |
| 3 | Make a request to the DuckDuckGo API and log all non-null `Icon.URL` values |

---

## 🧠 Design & Architecture

- **Playwright** test runner
- **TypeScript**-first approach with proper return types and async handling
- **Page Object Model** with modular file structure:
  - `.page.ts` → Pages with dedicated routes
  - `.component.ts` → Visual components within a page
- Consistent **locator strategy** using `data-testid` when available
- All tests are headless by default, with the option to force headed mode for flaky or visually-driven flows
- API tests are run in a **browserless context**

---

## � folder structure

```
.
├── modules/                  # Page and component helpers
│   ├── home.page.ts
│   ├── search-results.page.ts
│   └── region-filter.component.ts
├── tests/
│   ├── ui/
│   │   ├── search.spec.ts            # Test Case 1
│   │   └── region-filter.spec.ts     # Test Case 2
│   └── api/
│       └── icon-url.spec.ts          # Test Case 3
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 📊 Run Locally

First, install dependencies:

```bash
npm ci
```

### UI tests
```bash
npm run test:ui
```

### API tests
```bash
npm run test:api
```

### Chrome (headed)
```bash
npm run test:chrome:headed
```

### Full suite
```bash
npm run test
```

---

## 🔄 Code Generation
To speed up test creation, use Playwright's [codegen](https://playwright.dev/docs/codegen):
```bash
npm run codegen
```

---

## 🔄 Reports
To view the last test run report:
```bash
npm run report
```

---

## 🚀 CI/CD Ready
This project is compatible with GitHub Actions or any other CI runner.
Sample workflow steps:

- Install deps via `npm ci`
- Run `npm run test`
- Publish Playwright HTML reports

---

## 🔧 TODO / Improvements

- [ ] Add `data-testid` to region options (collaboration with frontend devs)
- [ ] Add negative test scenarios (e.g., empty search)
- [ ] Parameterize test data with `test.describe.each`
- [ ] Enable screenshot or video capture for flaky tests

---

## 👤 Author

**Carlos Vera**  
Senior QA Engineer | Automation | AI Testing Enthusiast  
[LinkedIn](https://www.linkedin.com/in/carlos-vera-automation-qa/)

---

## 📄 License

ISC License

