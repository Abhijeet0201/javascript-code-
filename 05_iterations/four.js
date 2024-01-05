 // foreach loop  ** important loop for array used **

 const coding = ["js", "ruby","java",`cpp`,"python"]

 //coding.forEach(function (val ) {
   // console.log(val);
 //})

 /*coding.forEach((iteam) => {
    console.log(iteam);    
 });

 function printMe(iteam){
  console.log(iteam);
 }
 coding.forEach(printMe)
 */

//coding.forEach((item, index, arr) => {
  //console.log(item, index, arr);
//})

const myCoding= [
  {
    languageName : "javascript",
    languageFile :"js"
  },
  {
    languageName : "python",
    languageFile : "Py"
  },
  {
    languageName : "Java",
    LanguageFile : "java"
  }

]
function printMe(iteam,value) {
  console.log(iteam,value);
}
myCoding.forEach(printMe);
//myCoding.forEach((iteam) =>{
 // console.log(iteam.languageName);
//})