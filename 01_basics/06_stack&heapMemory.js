// Stack (primitive datatype), Heap (Non-Primitive)

//  primitive => copy is passed
//  non-primitive => same memory location is given

let name = "Abhinav"
let anotherName = name
anotherName = "Anand"

// console.log(name);  // no change in name as only copy is passed to anotherName
// console.log(anotherName);

let userOne = {
    email: "abc@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "xyz@google.com"

console.table([userOne, userTwo]); // here userOne email also got changed



