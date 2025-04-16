# 🧪 DuckDuckGo E2E Assessment

Automated end-to-end test suite for DuckDuckGo using [Playwright](https://playwright.dev/), written in [TypeScript](https://www.typescriptlang.org/). This project includes UI and API test cases as part of a technical assessment.

---

## ✨ Features

- ✅ End-to-end tests with [Playwright Test](https://playwright.dev/test)
- ✅ Page Object Model structure
- ✅ UI Testing in Chromium, Firefox, and WebKit
- ✅ API Testing without browser
- ✅ Reusable modules and locators
- ✅ Modern test scripts with typed support
- ✅ GitHub Actions ready
- ✅ HTML report generation

---

## 📁 Project Structure

```bash
├── modules/                    # Page and component objects
│   ├── home.page.ts            # Home page selectors and actions
│   ├── search-results.page.ts  # Search results page validations
│   └── region-filter.component.ts # Region dropdown logic
│
├── tests/
│   ├── ui/
│   │   ├── search.spec.ts      # Test Case 1 – DuckDuckGo Search
│   │   └── region-filter.spec.ts # Test Case 2 – Validate Region Modal
│   └── api/
│       └── icon-url.spec.ts    # Test Case 3 – Handle JSON response
│
├── playwright.config.ts       # Playwright config with project separation
├── package.json               # Project metadata and scripts
└── README.md
```

---

## ✅ Test Coverage

| Test Case | Description |
|-----------|-------------|
| 1 | Search for `android` and assert that each result title contains the term |
| 2 | Validate that clicking "All regions" reveals a dropdown with more than 10 region options |
| 3 | Make a request to the DuckDuckGo API and log all non-null `Icon.URL` values |

---

## 🧪 Run Tests

```bash
# Run all tests
npm run test

# UI tests only
npm run test:ui

# API tests (no browser)
npm run test:api

# Run tests in Chrome
npm run test:chrome

# Run Chrome tests in headed mode
npm run test:chrome:headed

# Show HTML report
npm run report
```

---

## 🎥 Demo

> Click the thumbnail below to watch the video walkthrough _(opens in a new tab)_:

<a href="https://github.com/user-attachments/assets/5a423e3a-5d9a-4e82-9ba1-33e7ec6fd447" target="_blank">
  <img src="https://i.ibb.co/LD6PdzNj/Play-demo-thumbnail.png"
       alt="Watch the Demo"
       width="480" />
</a>

*Shows the test running in headed mode:*
- Navigates to DuckDuckGo
- Searches for “android”
- Opens “All regions” dropdown
- Logs API Icon URLs
- Final pass status in Playwright Report

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) + [TypeScript](https://www.typescriptlang.org/)
- Playwright's [Codegen](https://playwright.dev/docs/codegen) to speed up test creation 
- [Node.js](https://nodejs.org/)
- Modular structure with Page Object Model (POM)
- JSDoc comments + Typed returns for clarity

---

## 🚀 CI/CD Integration

This project is GitHub Actions ready. On every push or PR:

- ✅ Install deps via `npm ci`
- ✅ Run tests in Chromium, Firefox, and WebKit
- ✅ Run API tests (headless)
- ✅ Generate HTML + JUnit reports

You can find the workflow under:  
- [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)

---

## 🧭 Next Steps (Ideas)

- [ ] Add negative or edge test scenarios (e.g., empty search)
- [ ] Add `data-testid` to region options (collaboration with frontend devs)
- [ ] Parameterize test data with `test.describe.each`
- [ ] Enable screenshot or video capture for flaky tests
- [ ] Add Changelog section if project continues to evolve

---

## 👨‍💻 Author

Carlos Vera – [LinkedIn](https://www.linkedin.com/in/carlos-vera-automation-qa/) · [GitHub](https://github.com/cvera08)

---

## 📄 License

This project is licensed under the **ISC License**.

---

