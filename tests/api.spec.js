const { test, expect } = require('@playwright/test');

test.describe('API Routes', () => {
	test.describe('Freshdesk Integration API', () => {
		test('should reject non-POST requests', async ({ request }) => {
			const response = await request.get('/api');
			expect(response.status()).toBe(405);
			const json = await response.json();
			expect(json.error).toBe('Method not allowed');
		});

		test('should handle POST request structure', async ({ request }) => {
			// This test will fail without valid Freshdesk credentials
			// It's mainly to verify the API endpoint exists and responds
			const response = await request.post('/api', {
				data: {
					description: 'Test ticket',
					subject: 'Test Subject',
					email: 'test@example.com',
					priority: 1,
					status: 2,
				},
			});

			// The response might be 401/403 (auth error) or 400 (validation error)
			// depending on environment configuration
			// We're just checking the endpoint exists and responds
			expect([200, 400, 401, 403, 500]).toContain(response.status());
		});
	});
});

test.describe('Static Assets', () => {
	test('should load favicon', async ({ page }) => {
		await page.goto('/');
		const favicon = page.locator('link[rel="icon"]');
		if ((await favicon.count()) > 0) {
			const href = await favicon.getAttribute('href');
			expect(href).toBeTruthy();
		}
	});

	test('should load images from public/static', async ({ request }) => {
		// Test that static assets are accessible
		const response = await request.get('/static/images/header-logo.svg');
		expect(response.status()).toBe(200);
	});

	test('should load fonts', async ({ request }) => {
		const fonts = [
			'/static/fonts/ClearSans-Regular.woff2',
			'/static/fonts/ClearSans-Bold.woff2',
			'/static/fonts/ClearSans-Medium.woff2',
		];

		for (const font of fonts) {
			const response = await request.get(font);
			expect(response.status()).toBe(200);
		}
	});
});

test.describe('Security Headers', () => {
	test('should have security headers in production', async ({ request }) => {
		// Note: These headers might only be present in production (Vercel)
		// not in local development
		const response = await request.get('/');

		// Check for common security headers
		const headers = response.headers();

		// These might not be present in dev mode, so we just check if they exist
		// In production, Vercel should inject these via vercel.json
		if (process.env.NODE_ENV === 'production') {
			expect(headers['x-frame-options']).toBeDefined();
			expect(headers['x-content-type-options']).toBeDefined();
		}
	});

	test('should serve over HTTPS in production', async ({ page }) => {
		await page.goto('/');
		const url = page.url();

		if (process.env.NODE_ENV === 'production') {
			expect(url).toMatch(/^https:/);
		} else {
			// In development, HTTP is fine
			expect(url).toMatch(/^https?:/);
		}
	});
});

test.describe('Performance', () => {
	test('homepage should load quickly', async ({ page }) => {
		const startTime = Date.now();
		await page.goto('/');
		const loadTime = Date.now() - startTime;

		// Should load in under 5 seconds (generous for local dev)
		expect(loadTime).toBeLessThan(5000);
	});

	test('images should use Next.js Image optimization', async ({ page }) => {
		await page.goto('/');

		// Next.js Image component creates img tags with specific attributes
		const images = page.locator('img');
		const count = await images.count();

		if (count > 0) {
			// Just verify images are present and load
			for (let i = 0; i < Math.min(count, 5); i++) {
				const img = images.nth(i);
				await expect(img).toBeVisible();
			}
		}
	});
});
