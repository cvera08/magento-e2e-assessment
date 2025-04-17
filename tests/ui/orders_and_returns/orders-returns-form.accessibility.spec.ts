import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';

/**
 * Orders and Returns Form — accessibility validation.
 * 
 * This test ensures that the Orders and Returns form is accessible by verifying that
 * the form and key fields (like the email field) are visible on the page.
 */
test('Test Case 1 - verify form is accessible 🧪', async ({ page }) => {
    // Navigate to the Orders and Returns form page and wait for it to fully load
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Verify that the form is visible and accessible
    await expect(ordersReturnsFormPage.ordersReturnsForm(page)).toBeVisible(); 

    // Verify that the email field is visible and accessible
    const emailField = await ordersReturnsFormPage.emailInput(page);
    await expect(emailField).toBeVisible(); //Optional. Ensure the email field is visible as it is required for submission
});
