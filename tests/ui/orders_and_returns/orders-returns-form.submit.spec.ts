import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';
import { orderTitleLabel } from '../../../modules/sales-guest-view.page';

/**
 * Orders and Returns Form — submit and verify expected behavior.
 * 
 * This test verifies that after submitting the Orders and Returns form, 
 * the user is redirected to the order view page and the order title is visible.
 */
test('Test Case 3 - Ensure that submitting the form triggers the expected behavior 🧪', async ({ page }) => {
    const orderData = {
        orderId: '000050375',
        lastName: '86909',
        email: 'roral86909@cotigz.com'
    };

    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Fill in all the required fields with dynamic orderData
    await ordersReturnsFormPage.orderIdField(page).fill(orderData.orderId);
    await ordersReturnsFormPage.lastNameField(page).fill(orderData.lastName);
    await ordersReturnsFormPage.emailInput(page).fill(orderData.email);

    // Submit the form
    await ordersReturnsFormPage.continueButton(page).click();

    // Verify redirection to the order view page (URL should contain "view")
    await expect(page).toHaveURL(/view/);
    await expect(orderTitleLabel(page)).toBeVisible(); // Optional. Check if the order title is visible, confirming successful form submission
});
