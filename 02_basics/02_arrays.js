const marval_hero = ["ironman","thor","antman" ]
const Dc_hero = ["superman","batman","flash" ]
//console.log(marval_hero +" ," + Dc_hero );

//marval_hero.push(Dc_hero)
//console.log(marval_hero);
//console.log(marval_hero[3][1]);

const allHero= marval_hero.concat(Dc_hero)
//console.log(allHero);

// spered operater/method
const allNewHero = [...marval_hero,...Dc_hero]
//console.log(allNewHero);

const newArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_array = newArr.flat(Infinity)
console.log(newArr);
console.log(another_array);



console.log(Array.isArray("Abhijeet"));
console.log(Array.from("Abhijeet"));
console.log(Array.from({name:"Abhijeet"}));// interesting case because not able convert into arrays

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));