import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe.parallel('Field', () => {
  test.describe('light mode', () => {
    test.describe('base', () => {
      test('triggers axe on the document', async ({ page }) => {
        await page.goto('/iframe.html?id=design-system-components-field--base&viewMode=story');
        await injectAxe(page);
        await checkA11y(page);
      });
    });

    test.describe('with description', () => {
      test('triggers axe on the document', async ({ page }) => {
        await page.goto('/iframe.html?id=design-system-components-field--with-description&viewMode=story');
        await injectAxe(page);
        await checkA11y(page);
      });
    });

    test.describe('with error', () => {
      test('triggers axe on the document', async ({ page }) => {
        await page.goto('/iframe.html?id=design-system-components-field--with-error&viewMode=story');
        await injectAxe(page);
        await checkA11y(page);
      });
    });

    test.describe('adding actions', () => {
      test('triggers axe on the document', async ({ page }) => {
        await page.goto('/iframe.html?id=design-system-components-field--adding-actions&viewMode=story');
        await injectAxe(page);
        await checkA11y(page);
      });
    });
  });

  test.describe('dark mode', () => {
    test('complex input A11y', async ({ page }) => {
      await page.goto('/iframe.html?id=design-system-components-field--adding-actions&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });
});
