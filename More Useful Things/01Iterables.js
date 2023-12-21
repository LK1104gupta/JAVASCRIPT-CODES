// Iterables
// are those on which we use  with for of loop 
// String, array are iterables

// String output with for of loop
const username = "lkgupta1014"
for(let name of username){
    console.log(name)
}

// Array output with for of loop
const currency = ["Rupee", "Ruble", "Yen", "Dollar", "Dinar"]
for(let curren of currency){
    console.log(curren);
}

// Let's try with object
// const detail = {name : "Savita" , Ocuupation : "Bhabhi"}
// for(let det of detail){
    // console.log(det);
// }
// Uncaught typeError : detail is not iterable


// Array like objects
// who have lenght property
// whose elements can be accessed by indexes
// Example :- String

console.log((username.length));
console.log(username[3]);