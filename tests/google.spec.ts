import { test, expect } from '@playwright/test'

test('Page demo', async ({ page }) => {
    // arrange
    await page.goto('https://google.com')
    await page.getByRole('button', { name: 'Alles afwijzen' }).click()
    // act
    const input = page.locator('[title="Zoeken"]')
    await input.fill('playwright')
    await input.press('Enter')
    // assert
    await expect(page).toHaveTitle('playwright - Google Zoeken')
})
