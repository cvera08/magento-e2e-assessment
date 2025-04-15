import { test, expect } from '@playwright/test';
import * as searchPage from '../../modules/home.page';
import { assertAllResultsContain } from '../../modules/search-results.page';

test('Test Case 1 - search android', async ({ page }) => {   
    const searchTerm = 'android';

    await page.goto('/');
    await searchPage.searchWithDuckDuckGo(page, searchTerm);
    await assertAllResultsContain(page, 'android'); 
});
