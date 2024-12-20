"use strict"; //treats all js code in new version

// alert("hello") // we are using node.js not browser 
// there is another way of defining alert in node.js

console.log(3
    +
    3)  // code readability should be high

/*
    mdn -- mozilla 
    tc39-es -- ECMA used for references

*/


let name = "Abhinav"
let age = 18
let  isLoggedIn = false

let value
// here value type is undefined

let value1 = null
// here value1 type is object


/*
PRIMITIVE DATATAYPE
// string -> ""
// number -> 2 to power 53 -1
// bigInt 
// null -> standalone value // empty value not 0 // it is of object type

    suppose you request to server to access current temperature
    and if server did not respond that doesnot means 
    server will send 0 in place of temp as 0 is a valid temp
    server will send null at that situation.
    again null means a value that i don't know at this particular time

// undefined -> declared but value not asingned
// symbol -> to define uniqueness
*/

// object -> special datatype

console.table([typeof null , typeof undefined])
// null is a object datatpype
// undefined is undefined datatype
