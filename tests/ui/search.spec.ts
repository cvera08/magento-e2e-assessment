import { test, expect } from '@playwright/test';
import * as searchPage from '../../modules/home.page';
import { assertAllResultsContain } from '../../modules/search-results.page';

// 🐞 DuckDuckGo triggers a bot protection error in headless mode.
// For this test, we force headed mode to ensure consistent behavior in CI and local runs.
test.use({ headless: false });

test('Test Case 1 - search android', async ({ page }) => {   
    const searchTerm = 'android';

    await page.goto('/', { waitUntil: 'load' }); // 🐞 Ensures full page load before interacting – required to avoid intermittent failures in headless mode
    await searchPage.searchWithDuckDuckGo(page, searchTerm);
    await assertAllResultsContain(page, 'android'); 
});
