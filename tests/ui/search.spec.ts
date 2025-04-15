import { test, expect } from '@playwright/test'
import { searchWithDuckDuckGoDDL } from '../../modules/home.page'

test('Test Case 1 - search android', async ({ page }) => {
    await page.goto('/');

    // TODO [cvera]: Codegen selectors – replace with reusable Page Object methods
    await searchWithDuckDuckGoDDL(page).click();
    await searchWithDuckDuckGoDDL(page).fill('android');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Android | Do More With Google' }).click();
});
