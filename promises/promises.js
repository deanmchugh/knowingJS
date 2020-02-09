//promise constructor
let promise = new Promise((resolve, reject) => {
    //do something 
})

//examples
let grades = 50
let funds = 80

let minGrade = 40
let minFund = 70

let promiseBike = new Promise((resolve, reject) => {
    if (grades > minGrade) {
        if (funds > minFund) {
            resolve('resolved')
        } else {
            reject('rejected')
        }
    } else {
        reject('rejected')
    }
})

//than can handle res and rej while catch only handles rej
//handle resolve and reject with then
promiseBike.then( success => {
    console.log(success)
}, failed => {
    console.log(failed)
})
//handle resolve with then and reject with catch
promiseBike.then( success => {
    console.log(success)
}).catch( failed => {
    console.log(failed)
})

//promise chain
promiseBike
    .then(promiseBike)
    .then( success => {
        console.log(success)
    })
    .catch( failed => {
        console.log(failed)
    })