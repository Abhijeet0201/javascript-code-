
if(true){
    let a =10;
    const b= 20
    var c =30
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="Abhijeet"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

if(true){
    const username= "Abhijeet"
    if(username === "Abhijeet") {
        const website = "facebook"
        console.log(username +" "+ website);
    }
    // console.log(wesite);
}
// console.log(username);
//************** interesting ************/

console.log(addone(5))
function addone(num){
    return num+1
    
}
// yaha  decleration plele horaha initilization se to error show kare ga addtwo se waja se kuki wo var hai.
//console.log(addTwo(5));
addTwo(5)
const addTwo = function (num) {
    return num+2
}