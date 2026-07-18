import { expect, test } from '@playwright/test'

test('home page exposes primary courier actions', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: 'Ship, quote, and track with confidence.' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Book shipment' })).toBeVisible()
  await page.getByRole('button', { name: 'Ship' }).hover()
  await expect(page.getByRole('heading', { name: 'Start shipping' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Request account support' })).toBeVisible()
})
