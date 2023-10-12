import { test, expect } from '@playwright/test'

test.skip('Math works', async ({ page }) => {
  // arrange
  const a = 1
  const b = 2
  // act
  const sum = a + b
  // assert
  expect(sum).toBe(3)
})
