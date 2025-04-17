import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';

/**
 * Orders and Returns Form — accessibility validation.
 */
test('Test Case 1 - verify form is accessible', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' }); // 🐞 Ensures full page load before interacting

    const form = await ordersReturnsFormPage.ordersReturnsForm(page);
    await expect(form).toBeVisible(); // Verify form visibility

    const emailField = await ordersReturnsFormPage.emailInput(page);
    await expect(emailField).toBeVisible(); // Optional. Ensure required fields, like email, is visible and accessible
});
