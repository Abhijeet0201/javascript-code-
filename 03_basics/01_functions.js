//console.log("S");
//console.log("O");
//console.log("N");
//console.log("U");

function sayMyName() {
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("U"); 
}
//sayMyName()

//function addTwoNumber(number1, number2) {
    // number1 and number2 are parameters 
//   console.log( number1+number2);
//}
//addTwoNumber(5,6)
// 5 and 6 are arguments
//addTwoNumber(5,"a")
//addTwoNumber(5,null)
//addTwoNumber(5,null)

function addTwoNumber(number1, number2) {

   //let result = number1+number2 
   //return result

   //result = number1 +number2 
}

const result = addTwoNumber(5,3)

//console.log("result : ", result);

function loginUserMessage (username) {
    if(username === undefined){ 
        //(username === undefined) or ye(!usename) same hai  
        //console.log("Please enter a username");
        return // reture use karne ke baad niche ka koi line kam nahi karta hai
    }
    return `${username} just logged in `
}
//console.log(loginUserMessage("sonu"));
//console.log(loginUserMessage());
//function loginUserMessage (username ="sam") { ye jo "sam" ye default value hojaye ga ye print hoga jab ham value nahi le ge like in line 45 mea.

function calculateCartPrice(...num1){ // ... is called rest operatror that print all no ,we don't use it only first no is printed only.
    return num1
}
console.log(calculateCartPrice(200,400,500));
const user ={
    username:"hitesh",
    price: 199
}
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handelObject(user)
handelObject({
    username: "sam",
    price:299
})

const myNewArray =[200,400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));