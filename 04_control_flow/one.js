// if

//const isUserloggedIn = true
//const temperture = 41
//if (temperture <= 51) {
 //   console.log("less than 50");
//}else{
    //console.log(" temperture more than 50");
//}
// < , > <=, >= , ==, != ,===, !==

//const score = 200

//if (score > 100) {
   // let power ="fly"
    //console.log(`user score:  ${power}`);
//} 

//console.log(`user power:  ${power}`);

/*const balance =800
if (balance <= 500) {
    console.log("less than 500");
}else if (balance< 750) {
    console.log("less than 750");
}
else if (balance< 900) {
    console.log("less than 900");
}else {
    console.log("less than 1200");
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to shopped");
}
if (userLoggedIn && debitCard && 2 == 3) { // AND operator
    console.log("Allow to shopped");
}

if (loggedInFromEmail|| loggedInFromGoogle) { // OR operator
    console.log("Use logged in");
}