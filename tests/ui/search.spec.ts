import { test, expect } from '@playwright/test'

test('Test Case 1 - search android', async ({ page }) => {
    await page.goto('/');

    // TODO [cvera]: Codegen selectors – replace with reusable Page Object methods
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('android');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Android | Do More With Google' }).click();
});
