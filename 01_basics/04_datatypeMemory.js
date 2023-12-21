//JavaScript consists of two types of memory spaces, i.e., Stack and Heap, to store variables. The difference between them is what variables get stored in which type of storage. Let's take a closer look at stacks and heaps.
// Stack(Primitive type), Heap(Non-Primitive)

let myName = "Abhijeet kumar singh"
let anotherName = myName
anotherName = "Sonu Kumar singh"
console.log(myName);
console.log(anotherName);

let userOne = {
    email : "userOne@gmail.com",
    upi : "userOne@ybl"

}
let userTwo = userOne

userTwo.email ="abhijeet@gmail.com"
console.log(userOne);
console.log(userTwo);
