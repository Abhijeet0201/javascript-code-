class User {
    constructor(username){
        this.username = username 
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    // static used for stop method  from accessing it
    static createId(){
        return `123`
    }
}
const abhijeet = new User("abhijeet")
console.log(abhijeet.createId())

class Teacher extends User {
    constructor (username,email){
        super(username)
        this.email = email
    }
}
const androidPhone = new Teacher("onePlus","onePlus@mail.com ")
console.log(androidPhone.createId());