import { test, expect } from '@playwright/test';
import * as ordersReturnsFormPage from '../../../modules/orders-returns-form.page';
import { orderTitleLabel } from '../../../modules/sales-guest-view.page';

/**
 * Orders and Returns Form — submit and verify expected behavior.
 */
test('Test Case 3 - Ensure that submitting the form triggers the expected behavior 🧪', async ({ page }) => {
    await page.goto('/sales/guest/form/', { waitUntil: 'load' });

    // Fill in all the required fields
    await ordersReturnsFormPage.orderIdField(page).fill('000050375');
    await ordersReturnsFormPage.lastNameField(page).fill('86909');
    await ordersReturnsFormPage.emailInput(page).fill('roral86909@cotigz.com');

    // Submit the form
    await ordersReturnsFormPage.continueButton(page).click();

    // Verify redirection to the order view page or confirmation page (update URL if necessary)
    await expect(page).toHaveURL(/view/); // Assuming the order page has "view" in the URL after submission

    await expect(orderTitleLabel(page)).toBeVisible(); // Optional. Check if some success element is displayed on the new page. Like the Order Title
});
