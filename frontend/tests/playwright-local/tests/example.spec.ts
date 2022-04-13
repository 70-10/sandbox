import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4173');
});

test("Title is 'Hello Vite!'", async ({ page }) => {
  await expect(page.locator(".title")).toHaveText("Hello Vite!")
})