//Code snippet from the JSON
// fetch('https://jsonplaceholder.typicole.com/posts,{
//     method: 'POST',
//     body: JSON.stringify({
//     title:'foo'
//     body: 'bar',
//     userId: 1
//     })

/*
Challenge:
1. Using the code snippet in the slide, add a body 
   property to the object we are passing with the 
   fetch request. I want you to create a new post 
   with the title “Holiday Nightmares” and the body 
   “When I was kidnapped in Scotland…” 
   
   In the console, you should see and object with an 
   ID, for example: {id: 101}
*/

try {
    const response = await fetch('https://jsonplaceholder.typicole.com/posts', 
        {
        method: 'POST',
        body: JSON.stringify({
            title: 'Holiday Nightmares',
            body: 'When I was kidnapped in Scotland..',
            userId: 100
        })
    })
    if(!response.ok)
        throw new Error("There was a problem with the API")

    const data = await response.json()
    console.log(data)
}
catch(err)
    {
        console.log(err)
    }


    /*
Challenge:
1. Add a headers object, setting the "Content-Type" to "application/json".
*/

try {
    const response = await fetch('https://jsonplaceholder.typicole.com/posts', 
        {
        method: 'POST',
        body: JSON.stringify({
            title: 'Holiday Nightmares',
            body: 'When I was kidnapped in Scotland..',
            userId: 100
        }),
        headers: {
            'Content-Type': 'appliation/json'
        }
    })
    if(!response.ok)
        throw new Error("There was a problem with the API")

    const data = await response.json()
    console.log(data)
}
catch(err)
    {
        console.log(err)
    }