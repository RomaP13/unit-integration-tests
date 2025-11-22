const { test, expect } = require("@playwright/test");

// --- E2E ТЕСТИ ---
test("Індивідуальний: Сторінка Про нас", async ({ page }) => {
  await page.goto("http://localhost:3000/about.html");
  await expect(page).toHaveTitle("Про нас");
  await expect(page.locator("h1")).toHaveText("Наша команда");
});

// --- SCREENSHOT ТЕСТИ ---
test("Індивідуальний: Скріншот блоку", async ({ page }) => {
  await page.goto("http://localhost:3000/about.html");
  const content = page.locator(".content");
  await expect(content).toHaveScreenshot("about-content.png");
});
