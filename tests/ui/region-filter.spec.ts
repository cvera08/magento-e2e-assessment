import { test, expect } from "@playwright/test";
import * as searchPage from '../../modules/home.page';
import * as regionFilter from '../../modules/region-filter.component';

// 🐞 DuckDuckGo triggers a bot protection error in headless mode.
// For this test, we force headed mode to ensure consistent behavior in CI and local runs.
test.use({ headless: false });

test('Test Case 2 - validate region options > 10', async ({ page }) => {
    await page.goto('/');
    await searchPage.searchWithDuckDuckGo(page, 'android');

    await regionFilter.openRegionModal(page);
    const count = await regionFilter.getRegionOptionCount(page);
    expect(count).toBeGreaterThan(10);
});
