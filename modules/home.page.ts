import { Page } from "@playwright/test";


export const searchWithDuckDuckGoDDL = (page: Page) => page.getByRole('combobox', { name: 'Search with DuckDuckGo' })