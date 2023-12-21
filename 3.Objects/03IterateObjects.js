// How to iterate object
const student ={
    name: "Lalit",
    id: 20041165,
    phone: 9968074444,
    email: "lkg2548@gmail.com",
    department: "CSE-AIDS",
    "student skills": ["html", "css", "js"] 
}

// There are two of iterating objects
// 1.for in loop
// 2.object.keys


// 1st method
// for(let key in student){
//     console.log(key)
    // This only gives key output  we also want key value pair output
// }

// for(let key in student){
    // console.log(student.key)
    // Now this will define key with the name of key and we heven't defined any key with name of key
// }

// for(let key in student){
//     console.log(student[key])
//     // this will change it to student["name"]
// }
//But the problem is that with this it will only print the value not key name and
// we want key value pair

// So we can do this by using template string
for(let tea in student){
    console.log(`${tea} : ${student[tea]}`)
    // Now we can enjoy the output
}



// 2nd method
Object.keys(student) //This code will return an array with key name as array elements
console.log(Object.keys(student))
// Let's perform some checks
console.log(typeof Object.keys(student)) //Okay array is an object
const val = Array.isArray(Object.keys(student))
console.log(val) //this is true

// now lets use loop to print this
for(let key of Object.keys(student)){
    // console.log(key) //THis will print key output
    // console.log(student[key])  //This will give value output
    // to get key value pair output:-
    console.log(key, " :   " ,student[key])
}
