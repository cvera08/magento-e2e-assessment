/**
 * Page Object Model (POM) for the Orders and Returns Form page.
 * 
 * This file encapsulates all the selectors and actions related to the "Orders and Returns" form 
 * located at: https://magento.softwaretestingboard.com/sales/guest/form/.
 * 
 * It includes locators for the form fields, error messages, and the continue button. Functions are 
 * designed to interact with the form, fill in required fields, and handle form submission.
 * 
 * The goal of this file is to provide a clean and reusable interface for interacting with the 
 * Orders and Returns form within the Playwright tests.
 * 
 * Functions in this file:
 * - Locate and interact with the Order ID, Last Name, and Email fields.
 * - Handle form submission by clicking the continue button.
 * - Retrieve error messages for invalid form inputs.
 * 
 * This Page Object is part of the Playwright-based end-to-end testing framework used for automating 
 * and validating the functionality of the Orders and Returns page.
 */

import { Page, Locator } from "@playwright/test";

/**
 * Retrieves the locator for the Orders and Returns form.
 * 
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the Orders and Returns form element.
 */
export const ordersReturnsForm = (page: Page): Locator =>
    page.locator('form#oar-widget-orders-and-returns-form');

/**
 * Retrieves the locator for the Email input field in the Orders and Returns form.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the Email input field.
 */
export const emailInput = (page: Page): Locator =>
    ordersReturnsForm(page).locator('input#oar_email');

/**
 * Retrieves the locator for the "Continue" button in the Orders and Returns form.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Continue" button.
 */
export const continueButton = (page: Page): Locator => 
    ordersReturnsForm(page).locator('button.action.submit.primary');

/**
 * Retrieves the locator for the error message of the "Order ID" field.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Order ID" error message.
 */
export const orderIdError = (page: Page): Locator => 
    ordersReturnsForm(page).locator('div#oar-order-id-error');

/**
 * Retrieves the locator for the error message of the "Last Name" field.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Last Name" error message.
 */
export const lastNameError = (page: Page): Locator => 
    ordersReturnsForm(page).locator('div#oar-billing-lastname-error');

/**
 * Retrieves the locator for the error message of the "Email" field.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Email" error message.
 */
export const emailError = (page: Page): Locator => 
    ordersReturnsForm(page).locator('div#oar_email-error');

/**
 * Retrieves the locator for the "Order ID" input field in the Orders and Returns form.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Order ID" input field.
 */
export const orderIdField = (page: Page): Locator => 
    ordersReturnsForm(page).locator('input#oar-order-id');

/**
 * Retrieves the locator for the "Last Name" input field in the Orders and Returns form.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Last Name" input field.
 */
export const lastNameField = (page: Page): Locator => 
    ordersReturnsForm(page).locator('input#oar-billing-lastname');

/**
 * Retrieves the locator for the "Find Order By" dropdown in the Orders and Returns form.
 *
 * @param {Page} page - The Playwright Page object to interact with.
 * @returns {Locator} - The locator for the "Find Order By" select dropdown.
 */
export const findOrderSelect = (page: Page): Locator =>
    ordersReturnsForm(page).locator('select#quick-search-type-id');

/**
 * Navigate to the Orders and Returns form page and wait for it to be fully loaded.
 * This function will be reused across tests to reduce duplication.
 * 
 * @param {Page} page - The Playwright Page object to interact with.
 */
export const navigateToOrdersReturnsForm = async (page: Page): Promise<void> => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });
    await page.waitForTimeout(1000); // Wait for 1 second to ensure the page has fully loaded (otherwise Random False Failures in CICD) // TODO [cvera]: Replace with a more reliable wait, such as waitForSelector, or response.status() === 200, to ensure the page is fully loaded

};