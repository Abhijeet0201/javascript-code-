// Object Literal 
const user = { 
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function (params) {
      console.log("got user details from database");
      //console.log(`Username: ${this.username}`);
      console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);

//const date = new date()
//const promiseOne = new Promise()

function User (username, loginCount, isloggedIn ) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn
    
    this.geeting = function(){
       console.log(`welcome ${this.username}`); 
    }
    return this
}

const userOne = new User("Abhi" , 12, true)
const userTwo = new User("sonu" , 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//  important notes -> For new Keyword used then 
//step1: empty object created
//step2: constructor function called 
//step3: this new keyword enjected init.
//step4: then it got implenment
//constructor method is basically reference to its self  