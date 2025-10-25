const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
	const pages = [
		{ name: 'Homepage', url: '/', linkText: null },
		{ name: 'About Us', url: '/about-us', linkText: 'about us' },
		{ name: 'Services', url: '/services', linkText: 'services' },
		{ name: 'Contact', url: '/contact', linkText: 'contact' },
		{ name: 'Training', url: '/weekly-training', linkText: 'training' },
		{ name: 'Pricing', url: '/pricing', linkText: 'pricing' },
		{ name: 'Privacy Policy', url: '/privacy-policy', linkText: null },
	];

	test('should navigate to all main pages', async ({ page }) => {
		for (const pageInfo of pages) {
			if (pageInfo.linkText) {
				await page.goto('/');
				await page.click(`text=${pageInfo.linkText}`);
				await expect(page).toHaveURL(pageInfo.url);
			} else {
				// For pages without direct nav link, test direct navigation
				await page.goto(pageInfo.url);
				await expect(page).toHaveURL(pageInfo.url);
			}
		}
	});

	test('should have consistent header across all pages', async ({ page }) => {
		for (const pageInfo of pages) {
			await page.goto(pageInfo.url);

			// Check logo is present
			await expect(page.locator('img[alt="YellowFolder"]')).toBeVisible();

			// Check navigation links are present
			await expect(page.locator('text=about us')).toBeVisible();
			await expect(page.locator('text=services')).toBeVisible();
			await expect(page.locator('text=contact')).toBeVisible();
		}
	});

	test('should have consistent footer across all pages', async ({ page }) => {
		for (const pageInfo of pages) {
			await page.goto(pageInfo.url);

			// Check footer is present (adjust selector based on actual footer content)
			const footer = page.locator('footer');
			await expect(footer).toBeVisible();
		}
	});

	test('logo should navigate to homepage', async ({ page }) => {
		await page.goto('/about-us');
		await page.click('img[alt="YellowFolder"]');
		await expect(page).toHaveURL('/');
	});

	test('should have external login link', async ({ page }) => {
		await page.goto('/');
		const loginLink = page.locator('a[href="https://login.yellowfolder.com/"]');
		await expect(loginLink).toBeVisible();
		await expect(loginLink).toHaveAttribute('target', '_blank');
		await expect(loginLink).toHaveAttribute('rel', 'noopener noreferrer');
	});
});

test.describe('Navigation - Accessibility', () => {
	test('should have proper ARIA labels', async ({ page }) => {
		await page.goto('/');

		// Check for main navigation role
		const nav = page.locator('[role="navigation"]');
		await expect(nav).toBeVisible();

		// Check for main role
		const main = page.locator('main[role="main"]');
		await expect(main).toBeVisible();

		// Check for banner role (header)
		const banner = page.locator('[role="banner"]');
		await expect(banner).toBeVisible();
	});

	test('should be keyboard navigable', async ({ page }) => {
		await page.goto('/');

		// Tab through navigation
		await page.keyboard.press('Tab');
		await page.keyboard.press('Tab');

		// Should be able to activate links with Enter
		const focusedElement = page.locator(':focus');
		await expect(focusedElement).toBeVisible();
	});
});
