// Note :- The reduce method in JavaScript is used to iterate over the elements of an array and accumulate a single result. It applies a callback function to each element of the array, and this function has two parameters: an accumulator and the current element. The reduce method can be used for various purposes, such as summing up values, finding the maximum or minimum element, concatenating strings, and more.


const myNum = [1,2,3]

/*const myTotal =myNum.reduce(function (acc , currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)

console.log(myTotal);
*/
const myTotal = myNum.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [ 
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "java book",
        price : 1500
    },
    {
        itemName : " mobile dev course",
        price : 4999
    },
    {
        itemName : "data science course",
        price : 9999
    }
]
const priceToPay = shoppingCart.reduce((acc, iteam) => acc + iteam.price , 0)
console.log(priceToPay);