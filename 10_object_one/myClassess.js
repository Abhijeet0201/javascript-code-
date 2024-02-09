//ES6
/*class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password =password  
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }   
    }
const chai = new User("abhi","abcfd22@gmail.com","1365335")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/
// behind the scene both above and down code are same.

function User(username,email,password) {
    this.username = username
    this.email = email
    this.password =password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("abhi","abcfd22@gmail.com","1365335")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());