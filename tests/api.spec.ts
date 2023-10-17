import { expect, test } from '@playwright/test'

test('should be able to clear al the items', async ({ request }) => {
    const erase = await request.patch('/todos/erase')
    expect(erase).toBeTruthy()
    expect(erase.status()).toBe(200)
    expect(await erase.json()).toEqual({ message: 'erased' })

    const get = await request.get('/todos')
    expect(get).toBeTruthy()
    expect(get.status()).toBe(200)
    expect(await get.json()).toEqual({ todos: [] })
})
