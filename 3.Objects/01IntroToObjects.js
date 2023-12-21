// Intro to Objects

// Objects are reference type
// arrays are good but not sufficient for real world data
// Objects store key value pair
// Objects don't have index

// How to create objects
//              Key    Value
//                \       \
// const person = {name: "Chulbul", Age: 28, Hobbies: ["Dancing","Singing","Coding"]}
// we use curly braces to create objects
// Key is also known as it's properties

const Kohli = {
    name: "Virat Kohli",
    Runs: 10000 ,
    Teammate: ["Dhawan", "Rohit", "Dhoni"]
    // By default all keys are in string
}
console.log(Kohli)

// How to access data from objects
console.log(Kohli.name)  //by dot notation
console.log(Kohli["Runs"]) //by bracket notation
// By default all keys are string that's why we have to use "" in []brackets

// How to access key value pair to objects
Kohli.gender = "Female"
console.log(Kohli.gender)
// Added key value using dot . operator
Kohli["followers"] = "100m"
console.log(Kohli["followers"])
// Added key value using braces

