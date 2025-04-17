import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';
import { orderTitleLabel } from '../../../modules/sales-guest-view.page';

/**
 * Orders and Returns Form — submit and verify expected behavior.
 */
test('Test Case 3 - Ensure that submitting the form triggers the expected behavior 🧪', async ({ page }) => {
    const orderData = {
        orderId: '000050375',
        lastName: '86909',
        email: 'roral86909@cotigz.com'
    };

    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Fill in all the required fields
    await ordersReturnsFormPage.orderIdField(page).fill(orderData.orderId);
    await ordersReturnsFormPage.lastNameField(page).fill(orderData.lastName);
    await ordersReturnsFormPage.emailInput(page).fill(orderData.email);

    // Submit the form
    await ordersReturnsFormPage.continueButton(page).click();

    // Expect
    await expect(page).toHaveURL(/view/); // Order page has "view" in the URL after submission

    await expect(orderTitleLabel(page)).toBeVisible(); // Optional. Check if some success element is displayed on the new page. Like the Order Title
});
