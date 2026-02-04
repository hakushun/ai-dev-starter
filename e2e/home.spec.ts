import { test, expect } from "@playwright/test";

test("home page shows title and counter", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();
  await expect(page.getByText("Counter (Jotai)")).toBeVisible();
  await expect(page.getByText("0")).toBeVisible();
});

test("navigates to about", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "About" }).click();
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
});
