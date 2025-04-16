import { test, expect } from "@playwright/test";
import * as searchPage from '../../modules/home.page';
import * as regionFilter from '../../modules/region-filter.component';

test('Test Case 2 - validate region options > 10', async ({ page }) => {
    await page.goto('/');
    await searchPage.searchWithDuckDuckGo(page, 'android');
  
    await regionFilter.openRegionModal(page);
    //const regions = await regionFilter.getRegionOptionCount(page);
    //expect(regions.length).toBeGreaterThan(10);
    const count = await regionFilter.getRegionOptionCount(page);
    expect(count).toBeGreaterThan(10);
  });
  