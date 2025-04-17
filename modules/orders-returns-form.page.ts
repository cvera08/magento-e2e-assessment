//https://magento.softwaretestingboard.com/sales/guest/form/

import { Page, Locator } from "@playwright/test";

export const ordersReturnsForm = (page: Page): Locator =>
    page.locator('form#oar-widget-orders-and-returns-form');

export const emailInput = (page: Page): Locator =>
    page.locator('input#oar_email');

export const continueButton = (page: Page): Locator => ordersReturnsForm(page).
    locator('button.action.submit.primary');

export const orderIdError = (page: Page): Locator => page.locator('div#oar-order-id-error');

export const lastNameError = (page: Page): Locator => page.locator('div#oar-billing-lastname-error');

export const emailError = (page: Page): Locator => page.locator('div#oar_email-error');

export const orderIdField = (page: Page): Locator => page.locator('input#oar-order-id');

export const lastNameField = (page: Page): Locator => page.locator('input#oar-billing-lastname');