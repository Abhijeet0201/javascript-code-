//const tinderUser = new Object()// both same this one singletone
const tinderUser ={} // this one non-singleton

tinderUser.id = "125abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullName: {
            firstname: "Abhijeet",
            lastname: "Singh"
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userfullName);

const obj1 ={1:"a",2: "b"}
const obj2 ={3:"c",4: "d"}
const obj4 ={3:"c",4: "d"}

//const obj3 ={obj1, obj2}
//const obj3=Object.assign({}, obj1, obj2)
const obj3 ={...obj1, ...obj2}//this is spred method is used 90% in code. above line done same thing
//console.log(obj3);

const user =[
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id :1,
        email:"abs@gmail.com"
    },
    {
        id :1,
        email:"abs@gmail.com"
    },
    {
        id :1,
        email:"abs@gmail.com"
    }
]
user[1].email
console.log(user);
console.log(tinderUser);
// these are some method
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
