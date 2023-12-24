const score = 400

//console.log(score);
const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1))
//console.log(balance.toFixed(2));//output ->100.00, if there is toFixed(1) -> 100.0 like that.

const otherNumber =123.8966
//console.log(otherNumber.toPrecision(3));
const newNumber =1123.8966
//console.log(newNumber.toPrecision(4));// to.precision method means roundoff 123.8966 -> 124
const hundred = 100000
//console.log(hundred.toLocaleString('en-IN'));

//*************Maths *************++++++++++
//console.log(Math.abs(-5));
//console.log(Math.sqrt(25));
//console.log(Math);
//console.log(Math.round(4.5));
//console.log(Math.max(5,4,9,1));
//console.log(Math.min(5,4,9,1));

console.log(Math.random());
// in Math.random when used get value b/t ->0 and 1.
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min);