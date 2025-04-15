import { test, expect } from '@playwright/test'
import * as searchPage from '../../modules/home.page'

test('Test Case 1 - search android', async ({ page }) => {    
    await page.goto('/');

    // TODO [cvera]: Codegen selectors – replace with reusable Page Object methods
    await searchPage.searchWithDuckDuckGo(page, 'android');
    
    const titles = await page.getByTestId('result-title-a').allTextContents();
    for (const title of titles) {
        expect(title.toLowerCase()).toContain('android');
    }
});
