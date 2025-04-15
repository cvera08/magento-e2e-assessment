
import { Page, expect } from '@playwright/test';

const resultsTitle = (page: Page) => page.getByTestId('result-title-a');

/**
 * Validates that all result titles from the DuckDuckGo search results
 * contain the expected search term (case-insensitive).
 *
 * @param page - Playwright Page instance
 * @param searchTerm - Value to be matched in each result title
 *
 * @example
 * await assertAllResultsContain(page, 'android');
 * await assertAllResultsContain(page, 'Android');
 */
export const assertAllResultsContain = async (page: Page, search: string) => {
    const results = resultsTitle(page);
    await expect(results.first()).toBeVisible(); // 🐞 Avoid racing the UI: make sure at least one result is visible before asserting

    const titles = await results.allTextContents();
    expect(titles.length).toBeGreaterThan(0); // ✅ Ensure at least one result exists before iterating

    for (const title of titles) {
        expect(title.toLowerCase()).toContain(search.toLowerCase());
    }
};