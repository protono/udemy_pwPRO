import { expect, test } from '@playwright/test'

test('should be able to delete a comment', async ({ request }) => {

    const postResponse = await request.post('/comments', {
        data: {
            body: "body",
            postId: 1
        }
    })
    expect(postResponse.status()).toBe(201)
    var response: string = await postResponse.json()
    expect(response['id'] == 2)

    const putResponse = await request.put('/comments/2', {
        data: {
            body: "new body",
            postId: 1
        }
    })
    expect(putResponse.status()).toBe(200)
    response = await putResponse.json()
    expect(response['body'] == 'new body')

    const deleteResponse = await request.delete('/comments/2')
    expect(deleteResponse.status()).toBe(200)

    const getResponse = await request.get('/comments')
    expect(getResponse.status()).toBe(200)
    response = await getResponse.json()
    expect(response.length == 1)

})
