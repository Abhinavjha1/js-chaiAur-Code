//2 types

// PRIMITIVE call by value(copy is given not memory add.)

// 7 types : String, Number(int or float), Boolean, null, undefined, Symbol, BigInt

// JS is dyanamically typed
// as here we don't have to specify the datatype
// it assume on its own

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId); // both are uniquely defined

const bigNumber = 3765234890679342547487697077667463n
// console.log(typeof bigNumber);


// Reference(Non Primitive)  //directly reference(add) is given

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"] //object datatype

let myObj ={
    name: "abhinav",
    age: 24
}

const myFunction = function(){
    console.log("hello World");
    
}
myFunction() // datatype: function object 




