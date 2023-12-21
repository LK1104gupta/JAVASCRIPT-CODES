// Param Destructuring :- It is widely used in object and react

const person = {
    name: "Lalit",
    gender: "Alphamale"
}
// function printdetail(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }
printdetail(person)

function printdetail({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}
