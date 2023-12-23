const myName = "Abhijeet"
const accountId = 50

//console.log(myName + accountId + "value");

console.log(`Hello my name is ${myName} and my account id is ${accountId }`); // its written in backtick method is sting interpolation

const gameName = new String('Abhijeet')
// given below is the methods used in Strings.
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,3)
// in slice methode when we negitive value it print in reverse order. like this ^
console.log(anotherString);

const newStringOne = "  Abhijeet  "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim() has also 2 type .trimStart and trimEnd

const url = "https://abhiheet.com/abhijeet%25singh"
console.log(url.replace('%25','_'));
// Replace methode is use to replace wrong letter or no from url. output-> https://abhiheet.com/abhijeet_singh
console.log(url.includes('sonu'));
console.log(gameName.split('_'))