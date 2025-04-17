import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';

/**
 * Orders and Returns Form — field validation (Happy and Negative Path).
 */

// Global order data for the tests
const orderData = {
    orderId: '000050375',
    lastName: '86909',
    email: 'roral86909@cotigz.com'
};

/**
 * Test Case 2A - Happy Path: Validate that the form fields work as expected.
 * This test ensures that the user can fill the form fields correctly and submit them.
 */
test('Test Case 2A - Happy Path: validate that the form fields work as expected 🧪', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Fill in the Order ID field and verify it's filled correctly
    const orderIdField = await ordersReturnsFormPage.orderIdField(page);
    await orderIdField.fill(orderData.orderId);
    await expect(orderIdField).toHaveValue(orderData.orderId); // Ensure the value is filled correctly

    // Fill in the Billing Last Name field and verify it's filled correctly
    const lastNameField = await ordersReturnsFormPage.lastNameField(page);
    await lastNameField.fill(orderData.lastName);
    await expect(lastNameField).toHaveValue(orderData.lastName); // Ensure the value is filled correctly

    // Fill in the Email field and verify it's filled correctly
    const emailField = await ordersReturnsFormPage.emailInput(page);
    await emailField.fill(orderData.email);
    await expect(emailField).toHaveValue(orderData.email); // Ensure the value is filled correctly

    // Select "Email" from the "Find Order By" dropdown and verify selection
    const findOrderSelect = await ordersReturnsFormPage.findOrderSelect(page);
    await findOrderSelect.selectOption({ label: 'Email' });
    await expect(findOrderSelect).toHaveValue('email');
});

/**
 * Test Case 2B - Negative Path: Validate error messages when mandatory fields are not filled.
 * This test ensures that the form displays appropriate error messages when mandatory fields are left empty.
 */
test('Test Case 2B - Negative Path: validate error messages when mandatory fields are not filled 🧪', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Try to submit the form without filling the required fields
    await ordersReturnsFormPage.continueButton(page).click();

    // Verify error messages for missing "Order ID", "Last Name", and "Email"
    await expect(ordersReturnsFormPage.orderIdError(page)).toBeVisible(); // Error for missing Order ID
    await expect(ordersReturnsFormPage.lastNameError(page)).toBeVisible(); // Error for missing Last Name
    await expect(ordersReturnsFormPage.emailError(page)).toBeVisible(); // Error for missing Email
});

/**
 * Orders and Returns Form — iterative validation for mandatory fields.
 * This test iteratively fills each mandatory field one by one and validates errors for the other fields.
 */
test('Test Case 2C - Iterative Validation: fill each mandatory field one by one and validate errors for the others 🧪', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // 1. Fill in the Order ID field and submit (check errors for Last Name and Email)
    await ordersReturnsFormPage.orderIdField(page).fill(orderData.orderId);
    const continueButton = await ordersReturnsFormPage.continueButton(page);
    await continueButton.click();
    await expect(ordersReturnsFormPage.lastNameError(page)).toBeVisible(); // Error for missing Last Name
    await expect(ordersReturnsFormPage.emailError(page)).toBeVisible(); // Error for missing Email

    // 2. Fill in the Billing Last Name field and submit (check error for Email)
    await ordersReturnsFormPage.lastNameField(page).fill(orderData.lastName);
    await continueButton.click();
    await expect(ordersReturnsFormPage.emailError(page)).toBeVisible(); // Error for missing Email
});
