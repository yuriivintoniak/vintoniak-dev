import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('home page has navigation buttons', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('link', { name: 'Contact me' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'View my work' })).toBeVisible();
});

test('navigate to contacts page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Contact me' }).click();

  await expect(page).toHaveURL(/contacts/);
});

test('navigate to projects page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'View my work' }).click();

  await expect(page).toHaveURL(/projects/);
});
