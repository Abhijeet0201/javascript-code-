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
    return user.username, user.password
})
.then((username)=>{
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log("The promises is resolve or rejected"))
 



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username :'javaScript',password : "123"})
        }else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})
async function consumePromisesFive(params) {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

    // yaha bas ye v likh sakate hai
    //const response = await promiseFive
    //console.log(response);
}
consumePromisesFive()


/*async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("error", error);
    }
}
getAllUsers()*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))