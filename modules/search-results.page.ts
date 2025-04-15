
import {Page, expect} from '@playwright/test'

const resultsTitle = (page: Page) => page.getByTestId('result-title-a');

export const assertAllResultsContain = async (page: Page, search : string) => {
    const titles = await resultsTitle(page).allTextContents();
    for (const title of titles) {
        expect(title.toLowerCase()).toContain(search);
    }
}