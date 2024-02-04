//let myName ="Abhijeet     "
//let myNaam ="Sonu     "
//console.log(myName.length);
//console.log(myName.length);
//console.log(myName.trim().length);

let myHero = ["thoe", "ironman"]


let heroPower ={
    thor : "hammer",
    ironman: "fly",


    getThorPower:function () {
      console.log(`Thor power is ${this.thor}`);
    }
}
Object.prototype.abhi =function (){
    console.log(`abhijeet is present in all 
    object`);
}
Array.prototype.heyAbhijeet= function (params) {
    console.log("Abhijeet says Hello");
}
//heroPower.abhi()
//myHero.abhi()
//heroPower.heyAbhijeet()
//myHero.heyAbhijeet()


//inheritance


const user ={
    userName: "Abhi",
    work: "Abc"
}
const teacher ={
    makeVideo:'video'
}
const teacherSupport ={
    isAvailable:false
}
const TASupport ={
    makeAssignment: "Note",
    fullTime: true,
    __proto__:teacherSupport // this interlink the to object
}
teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teacherSupport,teacher)

let anotherUsename ="ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is${this.trim().length}`);
}

anotherUsename.trueLength()
"Abhijeet".trueLength()
"iceTea".trueLength()