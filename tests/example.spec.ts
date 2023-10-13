import { test, expect } from '@playwright/test'
import { headingText, counterId } from '../src/copy'
test.beforeEach(async ({ page }) => {
    await page.goto('/')
})
test('Heading should be visible', async ({ page }) => {
    const heading = page.locator('h1', { hasText: headingText })
    await expect(heading).toBeVisible()
})
test.describe.skip('Counter', () => {
    test('should be visible', async ({ page }) => {
        const counterButton = page.locator('#' + counterId)
        await expect(counterButton).toBeVisible()
    })
    test('should increment', async ({ page }) => {
        const counterButton = page.locator('#' + counterId)
        await expect(counterButton).toHaveText('count is 0')
        await counterButton.click()
        await expect(counterButton).toHaveText('count is 1')
    })
})

