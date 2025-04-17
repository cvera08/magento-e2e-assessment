// This page is the one related to https://magento.softwaretestingboard.com/sales/guest/view/
// It's visible after a success order information query on sales/guest/form/

import { Page, Locator } from "@playwright/test";

export const orderTitleLabel = (page: Page): Locator =>
    page.locator('[data-ui-id=page-title-wrapper]');