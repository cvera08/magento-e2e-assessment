import { test, expect } from '@playwright/test'

test('Test Case 1 - search android', async ({ page }) => {
    await page.goto('/');

    // TODO [cvera]:: Codegen selectors – replace with reusable Page Object methods
    //await page.goto('https://start.duckduckgo.com/');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('android');
    //await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Android | Do More With Google' }).click();
    //await page.goto('https://duckduckgo.com/?t=h_&hps=1&start=1&q=android&ia=web');
});
