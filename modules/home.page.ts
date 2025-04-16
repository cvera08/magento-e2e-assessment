/**
 * Home Page module — encapsulates logic for performing searches from the DuckDuckGo homepage.
 */

import { Page, Locator } from "@playwright/test";

const searchInput = (page: Page): Locator =>
    page.getByRole('combobox', { name: 'Search with DuckDuckGo' });

const searchBtn = (page: Page): Locator =>
    page.getByRole('button', { name: 'Search', exact: true });

export const searchWithDuckDuckGo = async (page: Page, term: string): Promise<void> => {
    await searchInput(page).click();
    await searchInput(page).fill(term);
    await searchBtn(page).press('Enter'); // 🐞 Using 'press("Enter")' instead of 'click()' avoids false negatives in headless mode
};
