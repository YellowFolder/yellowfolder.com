/**
 * Generate Open Graph Image for YellowFolder
 *
 * This script uses Playwright to generate a 1200x630px Open Graph image
 * from the og-image-template.html file.
 *
 * Usage:
 *   node generate-og-image.js
 *
 * Output:
 *   public/static/images/yf-og-image.png
 */

const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
	console.log('🎨 Generating Open Graph image for YellowFolder...\n');

	// Launch browser
	const browser = await chromium.launch();
	const context = await browser.newContext({
		viewport: { width: 1200, height: 630 },
		deviceScaleFactor: 1, // Standard resolution for exact 1200x630 output
	});
	const page = await context.newPage();

	try {
		// Load the template HTML file
		const templatePath = path.join(__dirname, 'og-image-template.html');
		const templateUrl = `file://${templatePath}`;

		console.log('📄 Loading template:', templatePath);
		await page.goto(templateUrl, { waitUntil: 'networkidle' });

		// Wait for fonts to load
		await page.waitForTimeout(1000);

		// Take screenshot of the OG image container
		const element = await page.$('.og-image-container');
		if (!element) {
			throw new Error('Could not find .og-image-container element');
		}

		// Ensure output directory exists
		const outputDir = path.join(__dirname, 'public', 'static', 'images');
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		// Get bounding box to verify dimensions
		const box = await element.boundingBox();
		console.log(
			`📐 Element dimensions: ${Math.round(box.width)}x${Math.round(
				box.height
			)}px`
		);

		// Generate the image
		const outputPath = path.join(outputDir, 'yf-og-image.png');
		await element.screenshot({
			path: outputPath,
			type: 'png',
		});

		console.log('✅ Open Graph image generated successfully!');
		console.log('📍 Location:', outputPath);

		// Get file size
		const stats = fs.statSync(outputPath);
		const fileSizeKB = Math.round(stats.size / 1024);
		console.log('📦 File size:', fileSizeKB, 'KB');

		if (fileSizeKB > 300) {
			console.log(
				'\n⚠️  Warning: File size is over 300KB. Consider optimizing.'
			);
			console.log(
				'   You can use tools like TinyPNG or ImageOptim to reduce size.'
			);
		}

		// Also create a logo reference copy if it doesn't exist
		const logoPath = path.join(outputDir, 'yf-logo.png');
		if (!fs.existsSync(logoPath)) {
			const existingLogos = [
				path.join(outputDir, 'logo.png'),
				path.join(outputDir, 'yellowfolder.png'),
				path.join(outputDir, 'logo@3x.png'),
			];

			for (const logo of existingLogos) {
				if (fs.existsSync(logo)) {
					fs.copyFileSync(logo, logoPath);
					console.log('✅ Logo reference created:', logoPath);
					break;
				}
			}
		}

		console.log('\n🎉 All done! Your Open Graph image is ready to use.');
		console.log('\nNext steps:');
		console.log('1. Verify the image looks good by opening:', outputPath);
		console.log('2. Commit and deploy to production');
		console.log(
			'3. Test social sharing with Facebook Debugger and Twitter Card Validator'
		);
		console.log('\n📚 Documentation: SEO_IMPLEMENTATION_COMPLETE.md');
	} catch (error) {
		console.error('❌ Error generating Open Graph image:', error.message);
		process.exit(1);
	} finally {
		await browser.close();
	}
}

// Run the generator
generateOGImage().catch(console.error);
