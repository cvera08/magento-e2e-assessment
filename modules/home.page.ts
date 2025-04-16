import { Page } from "@playwright/test";


const searchInput = (page: Page) => page.getByRole('combobox', { name: 'Search with DuckDuckGo' });

const searchBtn = (page: Page) => page.getByRole('button', { name: 'Search', exact: true });

export const searchWithDuckDuckGo = async (page: Page, term: string) => {
    await searchInput(page).click();
    await searchInput(page).fill(term);
    
    await searchBtn(page).press('Enter');  // 🐞 Using 'press("Enter")' instead of 'click()' avoids false negatives in headless mode
};