import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';

/**
 * Orders and Returns Form — field validation (Happy and Negative Path).
 */

test('Test Case 2A - Happy Path: validate that the form fields work as expected', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Fill in the Order ID field
    const orderIdField = await ordersReturnsFormPage.ordersReturnsForm(page).locator('input#oar-order-id');
    await orderIdField.fill('12345');
    await expect(orderIdField).toHaveValue('12345'); // Ensure the value is filled correctly

    // Fill in the Billing Last Name field
    const lastNameField = await ordersReturnsFormPage.ordersReturnsForm(page).locator('input#oar-billing-lastname');
    await lastNameField.fill('Doe');
    await expect(lastNameField).toHaveValue('Doe');

    // Fill in the Email field
    const emailField = await ordersReturnsFormPage.ordersReturnsForm(page).locator('input#oar_email');
    await emailField.fill('test@example.com');
    await expect(emailField).toHaveValue('test@example.com');

    // Select "Email" from the "Find Order By" dropdown
    const findOrderSelect = await ordersReturnsFormPage.ordersReturnsForm(page).locator('select#quick-search-type-id');
    await findOrderSelect.selectOption({ label: 'Email' });
    await expect(findOrderSelect).toHaveValue('email');
});

test('Test Case 2B - Negative Path: validate error messages when mandatory fields are not filled', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Try to submit the form without filling the required fields
    const continueButton = await ordersReturnsFormPage.ordersReturnsForm(page).locator('button.action.submit.primary');
    await continueButton.click();

    const orderIdError = await page.locator('div#oar-order-id-error');
    await expect(orderIdError).toBeVisible(); // Check if an error message appears for the required "Order ID" field

    const lastNameError = await page.locator('div#oar-billing-lastname-error');
    await expect(lastNameError).toBeVisible(); // Verify error for Last Name field

    const emailError = await page.locator('div#oar_email-error');
    await expect(emailError).toBeVisible(); // Verify error for Email field
});
