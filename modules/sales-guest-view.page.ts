/**
 * Page Object Model (POM) for the Order Confirmation page.
 * 
 * This file contains the selectors and actions related to the order confirmation page, 
 * located at: https://magento.softwaretestingboard.com/sales/guest/view/.
 * This page is displayed after a successful order information query on the 
 * "Orders and Returns" form (sales/guest/form/).
 * 
 * The main purpose of this file is to provide a clean and reusable interface 
 * for interacting with elements on the order confirmation page.
 * 
 * Functions in this file:
 * - Locate and interact with the order title on the confirmation page.
 * 
 * This Page Object is part of the Playwright-based end-to-end testing framework, 
 * and it helps automate the validation of the Order Confirmation page.
 */

import { Page, Locator } from "@playwright/test";

/**
 * Retrieves the locator for the Order Title label on the order confirmation page.
 * 
 * This element is used to verify that the correct order title is displayed after 
 * the successful form submission, confirming that the user has reached the 
 * order confirmation page.
 * 
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the order title label element.
 */
export const orderTitleLabel = (page: Page): Locator =>
    page.locator('[data-ui-id=page-title-wrapper]');
