class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        //Note:- in setter we don't have to return the  value
        this._email = value.toUpperCase()
    }
    get password(){
        return `${this._password}Abhijeet`
        //return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const abhi = new User("abhijeet@.mail", "AbcdsE")
console.log(abhi.password);