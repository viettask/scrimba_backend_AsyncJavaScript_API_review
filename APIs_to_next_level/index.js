/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}