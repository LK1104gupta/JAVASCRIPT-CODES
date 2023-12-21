"use strict";
// Rules for naming the variable

// You cannot start with number
// For e.g 1value(Invalid)
//         value1(Valid)
var value1 = 27;
console.log(value1);

// You can only use underscore(_) or dollar($) symbol
// _firstname(Valid)
// first_name(Valid)
// $firstname(Valid)
// first$name(Valid)
var first$name = "John"
console.log(first$name);

// You cannot use spaces
// var first name(Invalid)
// var first_name = "Lalit" (snake case writing)
// var firstName = "Sagar"  (camel case writing)
var LastName = "Cena"
console.log(LastName);

// Convention:- Always start with small letter and use camelcase(Not compulsary)