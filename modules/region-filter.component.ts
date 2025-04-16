/**
 * Region Filter component — encapsulates the logic for interacting with
 * the "All regions" dropdown within the Search Results page.
 */

import { Page, Locator, expect } from '@playwright/test';

const allRegionsLink = (page: Page): Locator =>
    page.getByTestId('region-filter-label');

/**
 * ⚠️ Warning: `getByTestId('dropdown-options')` matches 4 elements on the page.
 * To avoid flaky tests, we use a more precise locator by targeting the one that contains the input field.
 * Alternatively, you could use `.first()` — but be mindful of stability across page updates.
 */
const regionOptionsModal = (page: Page): Locator =>
    page.locator('[data-testid="dropdown-options"]', {
        has: page.locator('input[placeholder="Search"]')
    });

/**
 * TODO [cvera]:
 * This selector currently relies on an auto-generated CSS class, which is brittle
 * and may break with future style or DOM changes.
 * 
 * Suggestion: Work with frontend developers to add a stable `data-testid`
 * to each region option item. Once available, update this locator accordingly.
 */
const regionOptionItems = (page: Page): Locator =>
    regionOptionsModal(page).locator('[class*="BDI1KtNF8HUPBZ4Cw_nK"]');

export const openRegionModal = async (page: Page): Promise<void> => {
    await allRegionsLink(page).click();
    await expect(regionOptionsModal(page)).toBeVisible(); // ✅ ensure modal opened
};

export const getRegionOptionCount = async (page: Page): Promise<number> => {
    return await regionOptionItems(page).count();
};