// Object destructuring
const student = {
    name : "Swami",
    rollno :  58913,
    college : "GNDIT",
    sem : "6th"
}
//  let{name, rollno} = student
//  console.log(name, rollno)

let{name : naam , rollno: anukarmank,...rest }= student
console.log(naam, anukarmank)
console.log(rest)