import { test, expect } from '@playwright/test'
import * as searchPage from '../../modules/home.page'

test('Test Case 1 - search android', async ({ page }) => {
    await page.goto('/');

    // TODO [cvera]: Codegen selectors – replace with reusable Page Object methods
    await searchPage.searchWithDuckDuckGo(page, 'android');
    await page.getByRole('link', { name: 'Android | Do More With Google' }).click();
});
