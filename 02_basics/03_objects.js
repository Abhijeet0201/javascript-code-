// singleton ->koi v const se banate hai to singleton banta hai.
// Object.create -> ye hai singleton ,aise v object banta hai or ise constrution method hai.

//object literals

const mySym  = Symbol("mykey1")// symole ek primative datatype hai.


const jsUser= {
    name:"Abhijeet",
    fullName:"Abhijeet Kumar",
    [mySym]: "mykey1", // symbole use karne kele ham [] used karte hai. nahi to ye symbole nahi lega.
    age:21,
    location: "Pagwara",
    email:"sonu@gmail.com",
    isLoggedIn:false,
    lastLogingDay: ["monday" , "Thrusday"]
}
//console.log(jsUser.email); //yaha ye String kude le ta hai yaha .
//console.log(jsUser);
//console.log(jsUser["email"]);// ya par nahi leta to " " to yea use karte hai.
//console.log(jsUser.mySym);// line 6 wala lea raha hai hai yaha srting ke thra print kar raha hai.
//console.log(typeof jsUser.mySym);
//console.log(jsUser[mySym]);// ye line 12 ko print kar waraha hai or ye symbol me  print karte hai  

jsUser.email = "sonukumar@gmail.com"// use for changing
//Object.freeze(jsUser);// ye used karne baad kab koi change nahi hoga.
jsUser.email = "sonukumar@gmail.com"// example-> ke lea yea ab change nahi hoga.freeze ke baad
// console.log(jsUser); 

jsUser.greeting = function(){
    console.log("Jai Shree Ram");
}

jsUser.greetingTwo = function(){
    console.log(`sonu, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log(jsUser.fullName);