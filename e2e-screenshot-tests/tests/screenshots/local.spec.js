const { test, expect } = require("@playwright/test");

test("Перевірка змін сторінки за скриншотом", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // Порівнює з еталоном (якщо еталону немає, створить його при першому запуску)
  await expect(page).toHaveScreenshot("index-page.png");
});

test("Порівняння скриншота елемента", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const element = await page.locator("h1");
  await expect(element).toHaveScreenshot("index-page-element-h1.png");
});
