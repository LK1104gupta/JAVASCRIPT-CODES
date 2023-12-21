// Block scope vs Function scope

// let and const are block scope
// var is a function scope

{
    //This is a block, a block is defined by curly braces
    const myname = "Lalit"
    let listenCarefully =
    "If you access me out of this block, I'll give you an error"
    console.log(myname);
}
// console.log(listenCarefully) :- Error as listencarefully not defined

{
    const myname = "monu"
    console.log(myname);
}

const myname = "Krishna"  //THis is a global scope
console.log(myname);
