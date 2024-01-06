// note:-The map method in JavaScript is used to create a new array by applying a function to each element of an existing array. It transforms each element based on the provided function and returns a new array without modifying the original one.

const myNum = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNum.filter((num) =>  num %2 !==0)

//let newNums = myNum.map((num) => { 
   // return num+ 10
//})

// Using chaining Method
const newNums = myNum
                  .map((num) => num * 10)
                  .map((num) => num + 10)
                  .filter((num) => num >= 40)
console.log(newNums);