import { test, expect } from '@playwright/test'
import * as searchPage from '../../modules/home.page'

test('Test Case 1 - search android', async ({ page }) => {   
    const searchTerm = 'android';

    await page.goto('/');

    // TODO [cvera]: Codegen selectors – replace with reusable Page Object methods
    await searchPage.searchWithDuckDuckGo(page, searchTerm);
    
    const titles = await page.getByTestId('result-title-a').allTextContents();
    for (const title of titles) {
        expect(title.toLowerCase()).toContain(searchTerm);
    }
});
