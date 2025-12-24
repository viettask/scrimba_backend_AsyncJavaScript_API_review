const promise = new Promise((resolve, reject)=> {
    const success = Math.random() > 0.5
    if (success) { 
        //We dont have to pass anthing we want, could be an array, an HTML, an image, a function 
        resolve('Operation successful') 
    } else {
        //We dont have to pass anthing we want, could be an array, an HTML, an image, a function 
        reject('Operation failed')
    }
})

try {
    const response = await promise
    console.log(response)
}
catch(err) {
    console.log(err)
}