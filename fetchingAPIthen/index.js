fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
        .then(data => {
        const imageElement = document.createElement('img')
        imageElement.src = data.message
        imageElement.alt = 'random dog picture'
        document.getElementById('img-container').appendChild(imageElement)
    })
//    .then(data => console.log(data))

/*
Challenge:
    1. Make a fetch request to the "Bored" API: 
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion 
       to the console.
    🛟 hint.md for help!
*/

fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => console.log(data))