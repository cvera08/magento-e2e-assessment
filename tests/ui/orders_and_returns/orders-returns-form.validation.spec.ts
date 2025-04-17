import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';

/**
 * Orders and Returns Form — field validation.
 */
test('Test Case 2 - validate that the form fields work as expected', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    const orderIdField = await ordersReturnsFormPage.ordersReturnsForm(page).locator('input#oar-order-id');
    await orderIdField.fill('12345');
    await expect(orderIdField).toHaveValue('12345'); // Ensure the value is filled correctly

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
