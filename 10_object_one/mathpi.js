const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descriptor);

const chai ={
    name: 'masala chai',
    price: 100,
    isAvailable: true,

    orderChai :function () {
        console.log("chai nahi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//Object.defineProperty(chai,'name',{
    //writable: false,
    //enumerable: false
//})
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of object.entries(chai) ) {
    if (typeof value !== 'function') {
        console.log(`${key} :${value}`);
    }
}