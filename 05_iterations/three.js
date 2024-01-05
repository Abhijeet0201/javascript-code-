//for in loop
// for Object we mainly use for-in loop
// for Array we used for of loop.

const myObject = {
    js : "Javascript",
    cpp : `c++`,
    rb :"ruby",
    swift: "swift by apple"
}

/*for (const key in myObject) {
    //console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`  );
}*/

const programming = ["js", "rb", "java", `cpp`]

for (const key in programming) {
    console.log(programming[key]);
}


/*const map = new Map() // map par iteration nahi hoyta hai
map.set(`IN`,"India")
map.set("USA",`united states of America`)
map.set(`Fa`,"France")
map.set(`IN`,"India")

for (const key in map) {
   console.log(key);
}*/
