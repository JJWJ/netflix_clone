import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // The start page should have our h1 with hi
  await expect(page.locator('h1')).toContainText('Unlimited movies, TV shows, and more.')
})

test('Page title correct',async ({ page }) => {
  await page.goto('/')

  // Expect the title "to contain" the substring
  await expect(page).toHaveTitle(/Netflix Clone/)

})