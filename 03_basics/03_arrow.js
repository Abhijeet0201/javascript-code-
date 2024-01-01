// this keyword is  define current contest 
const user = {
    username: "Abhijeet",
    price: 199,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

//function chai (){
  //  let username ="hitesh"
    //console.log(this.username);
//}
//chai()

//const chai = function (){// this show undefined
  //  let username ="hitesh"
    //console.log(this.username);
//}
//chai()

const chai =  () => { // this arrow function
   let username ="hitesh"
   //console.log(this.username);
}
//chai()




//this is basic arrow function that called explict method because we using return.
//const addTwo = (num1 , num2) =>{
    // return num1 + num2
//}

//console.log(addTwo(3,4)); 





//this also a arrow function that called implict method
//const addTwo = (num1 , num2) =>  num1 + num2
// no need to write return method
//console.log(addTwo(3,4))


//const addTwo = (num1 , num2) => (num1 + num2)
// no need to write return method and techniek is used in reacts
//console.log(addTwo(3,4))


const addTwo = (num1 , num2) => ({username:"Abhijeet"})// usin object

//console.log(addTwo(3,4))

const myArray =[2,3,5,6,7]
myArray.forEach()
