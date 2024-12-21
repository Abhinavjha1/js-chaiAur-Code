// why conversion => knowing exact datatype of value 

let value = false

let valueNumber = Number(value)
//console.table([valueNumber , typeof(valueNumber)])

/*  value => typeof // valueNumber
    "33" => number // 33
    "33abc" => number // NaN
    null => number // 0
    undefined => number // NaN
    true/false => number // 1/0
*/

let isLoggedIn = 4

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.table([typeof(booleanIsLoggedIn) , booleanIsLoggedIn])

/*  isLoggedIn => typeof // booleanIsLoggedIn
    anyPosVal => boolean // true
    0 => boolean // false
    "" => boolean // false
    "abc" => boolean // true
    null => boolean // false
    undefined => number // false
*/

let someNumber = ""

let stringNumber = String(someNumber)
// console.table([typeof(stringNumber) , stringNumber])

/*  someNumber => typeof // stringNumber
    anyNumber => string // "anyNumber"
    null => string // "null"
    undefined => string // "undefined"
    true/false => string // "true"/"false"
*/

//***************OPERATIONS**********************

let val = 3
// console.log(-val);

// console.table([2+2 , 2-2 , 2*2 , 2**3 , 2/2 , 2%2])

let str1 = "Hello"
let str2 = " Abhinav"

// console.log(str1+str2);

// console.log("1" + 2 + 3);
// let value1 = 1
// value1 += "2"
// console.log(typeof(value1)); // always return string

// console.log(1 + 2 + "3")  // first add numbers 1 & 2 then concatenate

console.log(+true) // return 1
console.log(+""); // return 0






