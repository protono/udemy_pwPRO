import { expect, test } from '@playwright/test'

test('should be able to delete a comment', async ({ request }) => {

    const postResponse = await request.post('/comments', {
        data: {
            body: "body",
            postId: 1
        }
    })
    expect(postResponse.status()).toBe(201)
    var response = await postResponse.json()
    const commentId = response['id']
    // expect(response['id'] == 2)

    console.log('PUT /comments/' + commentId)
    const putResponse = await request.put(`/comments/${commentId}`, {
        data: {
            body: 'new body ' + commentId,
            postId: 1
        }
    })
    expect(putResponse.status()).toBe(200)
    response = await putResponse.json()
    expect(response['body'] == 'new body' + commentId)

    console.log('DELETE /comments/' + commentId)
    const deleteResponse = await request.delete(`/comments/${commentId}`)
    expect(deleteResponse.status()).toBe(200)

    const getResponse = await request.get('/comments')
    expect(getResponse.status()).toBe(200)
    response = await getResponse.json()
    expect(response.length == 1)

})
