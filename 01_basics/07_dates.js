let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toDateString());
//console.log(typeof myDate);


// for new declear the create date by you and months start from zero(0);
//let myCreatedDate = new Date(2023,0,25)
//let myCreatedDate = new Date(2023, 0, 25, 8, 1)
//let myCreatedDate = new Date("2023-12-25")
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("12-25-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// for the use make making quiz,poling Q/A,hotel app booking ;

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);// div time by 1000 for get time in sec.
//console.log(Math.floor(Date.now()/1000));// we using math.floor for get ans without decimal value.

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
console.log(newDate.getDay());

//'${newDate.getDay()} and the time'
newDate.toLocaleString('default',{ weekday: "long"})