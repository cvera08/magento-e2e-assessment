import { Page, Locator } from "@playwright/test";

export const ordersReturnsForm = (page: Page): Locator =>
    page.locator('form#oar-widget-orders-and-returns-form');

export const emailInput = (page: Page): Locator =>
    page.locator('input#oar_email');