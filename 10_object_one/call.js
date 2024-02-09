function SetUsername(username) {
    //complex DB call
    this.username = username
    console.log("called");
}
function createUser(username,email,password) {
    SetUsername.call(username)
    this.username = username
    this.email = email
    this.password = password
}
const chai = new createUser("abhi", "chai2@gamil.com", "11234")
console.log(chai);