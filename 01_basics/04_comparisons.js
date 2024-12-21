// basic comparisons(having same datatypes) are same 

// console.log(2 < 1);
// console.log(2 >= 2);
// console.log(2 == 2);
// console.log(2 > 3);

// comparison of different datatype is done by converting to same datatype

// console.log("12" > 3);
// console.log("012" >= 3);
// console.log("12" == 3);
// console.log("12" <= 3);

//in case of null

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); // this gives true

/* 
    an equality check and comparison works diffently
    comparisoion convert null to 0
    that's why 3rd returns true 

*/

// in case of undefined all returns false

//  ===     // strict check
// its checks values as well as their datatype also

console.log("2" === 2); //return false
console.log("2" == 2);  // returns true



