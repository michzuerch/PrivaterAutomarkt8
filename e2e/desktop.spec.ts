import { test, expect } from '@playwright/test';

const url = 'http://localhost:3000';

test.describe('Basics', () => {
  test('Page title is correct', async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle('Privater Automarkt Radolfzell');
    await page.close();
  });
});

test.describe('Back to home', () => {
  test('Go to location and test link to home', async ({ page }) => {
    await page.goto(url);
    await page.getByRole('link', { name: 'Standort' }).click();
    await page.getByRole('link', { name: 'Privater Automarkt' }).click();
    await expect(page).toHaveURL(url);
    await page.close();
  });
});

test.describe('Links from index', () => {
  test('gallery', async ({ page }) => {
    await page.goto(url);
    await expect(page.getByRole('link', { name: /Galerie/ })).toHaveAttribute('href', '/gallery');
    await page.getByRole('link', { name: /Galerie/ }).click();
    await expect(page).toHaveURL(/.*gallery/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
    await page.close();
  });

  test('location', async ({ page }) => {
    await page.goto(url);
    await expect(page.getByRole('link', { name: /Standort/ })).toHaveAttribute('href', '/location');
    await page.getByRole('link', { name: /Standort/ }).click();
    await expect(page).toHaveURL(/.*location/);
    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
      maxDiffPixelRatio: 0.2,
    });
    await page.close();
  });

  test('impressum', async ({ page }) => {
    await page.goto(url);
    await expect(page.getByRole('link', { name: /Impressum/ })).toHaveAttribute('href', '/impressum');
    await page.getByRole('link', { name: /Impressum/ }).click();
    await expect(page).toHaveURL(/.*impressum/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
    await page.close();
  });
});
