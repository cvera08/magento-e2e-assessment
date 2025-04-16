import { test, expect } from "@playwright/test";
import * as searchPage from '../../modules/home.page';
import * as regionFilter from '../../modules/region-filter.component';

test('Test Case 2 - validate region options > 10', async ({ page }) => {
    await page.goto('/');
    await searchPage.searchWithDuckDuckGo(page, 'android');

    await regionFilter.openRegionModal(page);

    const itemsLocator = page.locator('[data-testid="dropdown-options"] [class*="BDI1KtNF8HUPBZ4Cw_nK"]');

    // 🔍 we wait at least for one element (corte de seguridad) - otherwise it runs faster than we need and prints 0
    const count = await itemsLocator.count();
    expect(count).toBeGreaterThan(10);

    // 🧪 get the text of the items (debug only)
    const regions = await itemsLocator.allTextContents();

    console.log(`🧪 Total regions: ${regions.length}`);
    console.log('🌍 Regions list:');
    regions.forEach((region, i) => console.log(`  ${i + 1}. ${region}`));

    expect(regions.length).toBeGreaterThan(10);

    await page.pause(); // only local debug
});
