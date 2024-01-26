const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // DB calls,cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(function name(params) {
    console.log("promises consumed");
})


// second promises
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function () {
    console.log("Async 2 resolve");
})




const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Abhi", email:"abhikumar@gmail.com"})
    }, 1000);
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve , reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username :'Abhijeet',password : "123"})
        }else {
            reject('ERROR: Somethingh went wrong')
        }
    }, 1000);
})
promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function (error) {
    console.log(error);
})
 
