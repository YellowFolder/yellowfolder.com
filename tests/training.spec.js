const { test, expect } = require('@playwright/test');

test.describe('Training Page', () => {
	test('should load training page', async ({ page }) => {
		await page.goto('/weekly-training');
		await expect(page).toHaveURL('/weekly-training');
	});

	test('should display training schedule sections', async ({ page }) => {
		await page.goto('/weekly-training');

		// Check for section headings from trainingSchedule.js
		await expect(page.locator('text=General')).toBeVisible();
		await expect(page.locator('text=Upload Tools')).toBeVisible();
		await expect(page.locator('text=Searching')).toBeVisible();
		await expect(page.locator('text=Features')).toBeVisible();
	});

	test('should display training classes', async ({ page }) => {
		await page.goto('/weekly-training');

		// Check for some specific class names from the schedule
		await expect(page.locator('text=initial training 101')).toBeVisible();
		await expect(
			page.locator('text=using yellowfolder like a pro')
		).toBeVisible();
	});

	test('should have GoToWebinar registration links', async ({ page }) => {
		await page.goto('/weekly-training');

		// Check for GoToWebinar links
		const gotoWebinarLinks = page.locator(
			'a[href*="attendee.gotowebinar.com"]'
		);
		const count = await gotoWebinarLinks.count();
		expect(count).toBeGreaterThan(0);
	});

	test('registration links should open in new tab', async ({ page }) => {
		await page.goto('/weekly-training');

		// Find a registration link
		const registrationLink = page
			.locator('a[href*="attendee.gotowebinar.com"]')
			.first();

		if ((await registrationLink.count()) > 0) {
			// Check that it has target="_blank"
			await expect(registrationLink).toHaveAttribute('target', '_blank');
		}
	});

	test('should display class times and days', async ({ page }) => {
		await page.goto('/weekly-training');

		// Check for day/time information
		await expect(page.locator('text=tuesday')).toBeVisible();
		await expect(page.locator('text=wednesday')).toBeVisible();

		// Check for time format (e.g., "8:30 - 9:30 am")
		const timePattern = /\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}\s*(am|pm)/i;
		const pageContent = await page.content();
		expect(pageContent).toMatch(timePattern);
	});

	test('should display non-customer section', async ({ page }) => {
		await page.goto('/weekly-training');

		// Check for the "Why YellowFolder?" section
		await expect(page.locator('text=Why YellowFolder?')).toBeVisible();
		await expect(
			page.locator('text=Tailored to Non-YellowFolder Customers')
		).toBeVisible();
	});
});

test.describe('Training Page - Mobile', () => {
	test.use({ viewport: { width: 375, height: 667 } });

	test('should display training schedule on mobile', async ({ page }) => {
		await page.goto('/weekly-training');

		// Check sections are still visible
		await expect(page.locator('text=General')).toBeVisible();

		// Check classes are visible
		await expect(page.locator('text=initial training 101')).toBeVisible();
	});

	test('should have tappable registration links on mobile', async ({
		page,
	}) => {
		await page.goto('/weekly-training');

		const registrationLink = page
			.locator('a[href*="attendee.gotowebinar.com"]')
			.first();
		if ((await registrationLink.count()) > 0) {
			await expect(registrationLink).toBeVisible();
		}
	});
});
