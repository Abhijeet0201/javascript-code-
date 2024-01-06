// note :-The filter method is used in JavaScript to create a new array containing only the elements that satisfy a specified condition. It does not modify the original array but returns a new one.


//const coding = ["js", "ruby","java",`cpp`,"python"]

 //coding.forEach(function (val ) {
   // console.log(val);
 //})

//const value = coding.forEach((iteam) => {
   // console.log(iteam);
   // return iteam; 
 //})  
 //console.log(value); 


const myNums = [1, 2 , 3, 4 , 5, 6, 7 , 8, 9 , 10]

//const newNums = myNums.filter((num) => (num >4))
//const newNums = myNums.filter((num) => { // here we using {} that mean we using scope so we have to use return here if not that give empty array[]
   // return num >4
//})
/*const newNums = []
myNums.forEach( (num)=>{
    if(num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);
*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk)=> bk.genre === `History`)
//userBooks = books.filter((bk)=> bk.publish >=2000)
userBooks = books.filter((bk)=>{ return bk.publish >=2000})
console.log(userBooks);

  /*userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})*/

