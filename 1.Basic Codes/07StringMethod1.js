// Some Useful String Methods:-
// 1. trim()
// 2. toUpperCase()
// 3. toLowerCase()
// 4. slice()

let firstName = "   Dharmndar    ";
console.log(firstName.length)
firstName =  firstName.trim();
//  All side spaces are removed
console.log(firstName)
console.log(firstName.length);


firstName = firstName.toUpperCase();
console.log(firstName)


let lastName = "SHArMa"
lastName = lastName.toLowerCase()
console.log(lastName)


firstName = firstName.slice(0,5)
console.log(firstName) 