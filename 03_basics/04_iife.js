// Immediately Invoke Function Expressions(IIFE)


function chai() {
    console.log(`DB`);
}
//chai()



//we used iife to reduce from globle varable problem
(function chai() {// iife
    console.log(`DB CONNECTRED`);
})();

(function aurcode() {
    console.log(`DB CONNECTRED Two`);
})();


( (name) => { // without name

    console.log(`DB CONNECTRED Two  ${name}`);
})(`Abhijeet`)
