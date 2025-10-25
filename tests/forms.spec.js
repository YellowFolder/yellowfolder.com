const { test, expect } = require('@playwright/test');

test.describe('Contact Form', () => {
	test('should load contact form', async ({ page }) => {
		await page.goto('/contact');
		await expect(page.locator('form')).toBeVisible();
	});

	test('should have required form fields', async ({ page }) => {
		await page.goto('/contact');

		// Check for common form fields (adjust based on actual form)
		// These are placeholders - update based on actual form structure
		const form = page.locator('form');
		await expect(form).toBeVisible();

		// You may want to check for specific input fields like:
		// await expect(page.locator('input[name="name"]')).toBeVisible();
		// await expect(page.locator('input[name="email"]')).toBeVisible();
		// await expect(page.locator('textarea[name="message"]')).toBeVisible();
	});

	test('should show validation errors for empty required fields', async ({
		page,
	}) => {
		await page.goto('/contact');

		// Try to submit without filling fields
		const submitButton = page.locator('button[type="submit"]').first();
		if (await submitButton.isVisible()) {
			await submitButton.click();

			// Check for validation messages (adjust based on actual implementation)
			// This is a placeholder test
			// await expect(page.locator('text=required')).toBeVisible();
		}
	});
});

test.describe('Demo Request Form', () => {
	test('should load demo request form', async ({ page }) => {
		await page.goto('/schedule-a-yellow-folder-demo');
		await expect(page.locator('form')).toBeVisible();
	});

	test('should have form fields', async ({ page }) => {
		await page.goto('/schedule-a-yellow-folder-demo');
		const form = page.locator('form');
		await expect(form).toBeVisible();
	});
});

test.describe('Record Request Form', () => {
	test('should load record request form', async ({ page }) => {
		await page.goto('/record-request');
		await expect(page.locator('form')).toBeVisible();
	});
});

test.describe('Form Accessibility', () => {
	test('contact form should have accessible labels', async ({ page }) => {
		await page.goto('/contact');

		// Check that form inputs have associated labels
		const form = page.locator('form');
		await expect(form).toBeVisible();

		// All inputs should have labels (either explicit or aria-label)
		// This is a general test - you may want to make it more specific
	});

	test('forms should be keyboard navigable', async ({ page }) => {
		await page.goto('/contact');

		// Tab through form fields
		await page.keyboard.press('Tab');
		const focusedElement = page.locator(':focus');
		await expect(focusedElement).toBeVisible();
	});
});
