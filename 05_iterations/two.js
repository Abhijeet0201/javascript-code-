// for of loop
// for Object we mainly use for-in loop
// for Array we used for of loop.

//[" ", " ", " "] //array of string
//[{ },{ },{ }] array of object

//for (const iterator of object) { syntax for of
    
//}
/*const arr =[ 1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}*/

/*const greeting ="Hello world"

for (const greet of greeting) {
    if (greet == " ") {
        console.log("Each of char is space");
       continue 
    }
    console.log(`Each of char is ${greet}`);
}

for (const iterator of object) {
    
}*/

// Maps

const map = new Map()
map.set(`IN`,"India")
map.set("USA",`united states of America`)
map.set(`Fa`,"France")
map.set(`IN`,"India")
map.set(`CA`,"India")

//console.log(map);
// for (const key of map) { // value get in array form
  //  console.log(key);
// }

/*for (const [key, value] of map) { // there we destruring it by using [ ]
    console.log(key, `:-` , value);
}*/

const myObject = {  //in obj we not able to used for of loop
     "game": `NFS` ,
     "game2" : "Spiderman"
}
// for (const [key ,value] of myObject) {
  //  console.log(key, ":-", value);
 //}

