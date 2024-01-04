// for

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element); 
}


/*for (let i = 0; i <= 5 ; i++) {
    console.log(`Outer loop values : ${i}`);
    for (let j = 0; j <= 5; j++) {
      console.log(`Inner loop value ${j} and Outer loop value: ${i}`);        
        
    }
}*/
 //for Printing table
for (let i = 0; i <= 10 ; i++) {
    //console.log(`Outer loop values : ${i}`);
    for (let j = 0; j <= 10; j++) {
      //console.log(`Inner loop value ${j} and Outer loop value: ${i}`);        
       //console.log( i +'*' + j + ' =' + i*j); 
    }
}
let myArray = ["hii" , "Hello" , "Bye"]
//console.log(myArray.length);
for (index= 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
} 


// break keyword and continue keyword

/*for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is : ${i}`);
}*/

/*for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is : ${i}`);
}*/

// while loop

let i =0;
while (i <=15) {
    console.log(`value of index is : ${i}`);
    i = i+3
    
}
let Hero = ["Antman", "Superman" , "ironMan"]
let arr = 0
while (arr < Hero.length) {
    console.log(`value of ${Hero[arr]}`);
    arr++
}

// do while loop

let score = 10
do {
    console.log(`Score id ${score}`);
    score++
} while (score <= 10);