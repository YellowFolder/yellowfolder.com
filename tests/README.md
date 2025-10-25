# Playwright Tests for YellowFolder.com

This directory contains end-to-end tests for the YellowFolder.com website using Playwright.

## Test Files

- **homepage.spec.js** - Tests for homepage functionality, hero section, and mobile responsiveness
- **navigation.spec.js** - Tests for site navigation, header/footer consistency, and accessibility
- **forms.spec.js** - Tests for contact form, demo request, and record request forms
- **training.spec.js** - Tests for training schedule page and GoToWebinar integration
- **api.spec.js** - Tests for API routes, static assets, security headers, and performance

## Running Tests

### Run all tests (headless)
```bash
npm test
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### View test report
```bash
npm run test:report
```

### Run specific test file
```bash
npx playwright test tests/homepage.spec.js
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests for mobile
```bash
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

## Test Configuration

Configuration is in `playwright.config.js` at the root of the project.

### Key Settings:
- **Base URL**: http://localhost:3000 (configurable via `PLAYWRIGHT_TEST_BASE_URL`)
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Parallel Execution**: Enabled by default
- **Retries**: 2 on CI, 0 locally
- **Dev Server**: Automatically starts `npm run dev` before tests
- **Screenshots**: Captured on failure
- **Traces**: Captured on first retry

## Writing New Tests

### Test Structure
```javascript
const { test, expect } = require('@playwright/test');

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });
});
```

### Common Patterns

#### Navigation
```javascript
await page.goto('/about-us');
await expect(page).toHaveURL('/about-us');
```

#### Finding Elements
```javascript
// By text
await page.locator('text=About Us');

// By selector
await page.locator('button[type="submit"]');

// By role
await page.locator('role=button[name="Submit"]');
```

#### Interactions
```javascript
await page.click('button');
await page.fill('input[name="email"]', 'test@example.com');
await page.selectOption('select', 'option-value');
await page.check('input[type="checkbox"]');
```

#### Assertions
```javascript
await expect(page).toHaveTitle(/Title/);
await expect(element).toBeVisible();
await expect(element).toContainText('Expected text');
await expect(element).toHaveAttribute('href', '/path');
```

### Mobile Testing
```javascript
test.describe('Mobile Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should work on mobile', async ({ page }) => {
    // Test implementation
  });
});
```

## Best Practices

1. **Use Descriptive Test Names**: Clearly state what is being tested
2. **Keep Tests Independent**: Each test should be able to run in isolation
3. **Use Page Object Model**: For complex pages, consider extracting selectors
4. **Test User Flows**: Focus on what users actually do
5. **Test Accessibility**: Include keyboard navigation and ARIA tests
6. **Test Mobile**: Include mobile-specific tests for responsive features
7. **Avoid Hard-Coded Waits**: Use Playwright's auto-waiting features
8. **Test Edge Cases**: Empty forms, validation errors, error states

## Debugging Tests

### Run with Playwright Inspector
```bash
npx playwright test --debug
```

### Run with headed browser and slow motion
```bash
npx playwright test --headed --slow-mo=1000
```

### View traces
```bash
npx playwright show-trace trace.zip
```

### Generate tests by recording
```bash
npx playwright codegen http://localhost:3000
```

## CI/CD Integration

Tests are configured to run in CI environments with:
- `forbidOnly: true` - Prevents accidental test.only
- `retries: 2` - Retries flaky tests
- `workers: 1` - Runs tests serially on CI

### GitHub Actions Example
```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright Browsers
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npm test

- name: Upload test report
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Environment Variables

- `PLAYWRIGHT_TEST_BASE_URL` - Base URL for tests (default: http://localhost:3000)
- `CI` - Set to enable CI-specific settings

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Test Assertions](https://playwright.dev/docs/test-assertions)
