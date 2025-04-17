
# 🧪 Magento E2E Assessment

Automated end-to-end test suite for Magento using [Playwright](https://playwright.dev/), written in [TypeScript](https://www.typescriptlang.org/). This project includes UI test cases for the "Orders and Returns" form as part of a technical assessment.

---

## ✨ Features

- ✅ End-to-end tests with [Playwright Test](https://playwright.dev/test)
- ✅ Page Object Model structure
- ✅ UI Testing in Chromium, Firefox, and WebKit
- ✅ API Testing support without browser
- ✅ Reusable modules and locators
- ✅ Modern test scripts with typed support
- ✅ GitHub Actions ready
- ✅ HTML report generation

---

## 📁 Project Structure

```bash
├── modules/                    # Page and component objects
│   └── orders-returns-form.page.ts  # Orders and Returns form selectors and actions
│
├── tests/
│   └── ui/
│       └── orders_and_returns/
│           ├── orders-returns-form.accessibility.spec.ts
│           ├── orders-returns-form.validation.spec.ts
│           └── orders-returns-form.submit.spec.ts
│
├── playwright.config.ts       # Playwright config with project separation
├── package.json               # Project metadata and scripts
└── README.md
```

---

## ✅ Test Coverage

| Test Case | Description |
|-----------|-------------|
| 1 | **Verify form accessibility**: Ensures that the Orders and Returns form is visible and all key fields are accessible. |
| 2 | **Validate form fields**: Ensures that the required fields (Order ID, Last Name, Email) are filled and work as expected. |
| 3 | **Submit form and check behavior**: Ensures that after submitting the form, the user is redirected to the order view page, and the order title is visible. |

---

## 🛠️ Installation

To get started with this project, please follow the steps below to set up the environment:

1. **Install Node.js**:
   - Download and install [Node.js](https://nodejs.org/). This project uses the LTS (Long Term Support) version.
   
2. **Install Visual Studio Code** (optional but recommended for editing):
   - Download [Visual Studio Code](https://code.visualstudio.com/).

3. **Install project dependencies**:
   - Once you have Node.js installed, run the following command to install the necessary dependencies:

   ```bash
   npm ci
   ```

4. **Verify your installation**:
   - To make sure everything is set up correctly, you can run the Playwright tests after installing the dependencies (see below).

---

## 🧪 Run Tests

```bash
# Run all tests
npm run test

# UI tests only
npm run test:ui

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

<a href="https://github.com/user-attachments/assets/c820f1e8-ada6-4fc2-b573-a12a08d65388" target="_blank">
  <img src="https://i.ibb.co/RT2YSdkP/magento-thumbnail.png"
       alt="Watch the Demo"
       width="480" />
</a>

*Shows the test running in headed mode:*
- Navigates to Magento Orders and Returns form
- Verifies form accessibility
- Validates form fields
- Submits the form and checks the response
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
- ✅ Generate HTML + JUnit reports

You can find the workflow under:  
- [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)

---

## 🧭 Next Steps (Ideas)

- [ ] Add negative or edge test scenarios (e.g., empty search)
- [ ] Add `data-testid` to form elements (collaboration with frontend devs)
- [ ] Parameterize test data with `test.describe.each`
- [ ] Enable screenshot or video capture for flaky tests
- [ ] Add Changelog section if project continues to evolve
- [ ] Add Contribution Guidelines (forking, submitting PRs, etc.)

---

## 👨‍💻 Author

Carlos Vera – [LinkedIn](https://www.linkedin.com/in/carlos-vera-automation-qa/) · [GitHub](https://github.com/cvera08)

---

## 📄 License

This project is licensed under the **ISC License**.

For more information, refer to the [ISC License Documentation](https://opensource.org/licenses/ISC).
