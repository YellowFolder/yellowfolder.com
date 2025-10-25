const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
	test('should load successfully', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/YellowFolder/i);
	});

	test('should display main heading', async ({ page }) => {
		await page.goto('/');
		const heading = page.locator('h1').first();
		await expect(heading).toContainText('Files at your fingertips');
	});

	test('should display hero section with Elizabeth Collins quote', async ({
		page,
	}) => {
		await page.goto('/');
		await expect(page.locator('text=Elizabeth Collins')).toBeVisible();
		await expect(
			page.locator('text=Director of Student Services')
		).toBeVisible();
	});

	test('should display Cabinet to Cloud section', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('text=Cabinet to Cloud')).toBeVisible();
	});

	test('should have functional navigation menu', async ({ page }) => {
		await page.goto('/');

		// Check that nav links exist
		await expect(page.locator('text=about us')).toBeVisible();
		await expect(page.locator('text=services')).toBeVisible();
		await expect(page.locator('text=contact')).toBeVisible();
		await expect(page.locator('text=training')).toBeVisible();
		await expect(page.locator('text=pricing')).toBeVisible();
	});

	test('should navigate to about us page', async ({ page }) => {
		await page.goto('/');
		await page.click('text=about us');
		await expect(page).toHaveURL('/about-us');
	});

	test('should have privacy badge on homepage only', async ({ page }) => {
		// Should be visible on homepage
		await page.goto('/');
		await expect(
			page.locator('img[alt="Student Privacy Pledge Official Signatory"]')
		).toBeVisible();

		// Should not be visible on other pages
		await page.goto('/about-us');
		await expect(
			page.locator('img[alt="Student Privacy Pledge Official Signatory"]')
		).not.toBeVisible();
	});
});

test.describe('Homepage - Mobile', () => {
	test.use({ viewport: { width: 375, height: 667 } });

	test('should display mobile menu', async ({ page }) => {
		await page.goto('/');

		// Check if mobile menu toggle is present
		const menuToggle = page.locator('label[for="toggle"]');
		await expect(menuToggle).toBeVisible();
	});

	test('should open and close mobile menu', async ({ page }) => {
		await page.goto('/');

		// Open menu
		await page.click('label[for="toggle"]');

		// Menu items should be visible
		await expect(page.locator('text=about us')).toBeVisible();

		// Close menu by clicking a link
		await page.click('text=about us');

		// Should navigate
		await expect(page).toHaveURL('/about-us');
	});
});
