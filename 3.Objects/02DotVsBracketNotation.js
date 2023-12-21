// Difference between dot and bracket notation

// Suppose you want to name the "skills" key as "student skills" but the problem is that
// you can't add space between the names see from line 11

const student = {
    name: "Ashu Sagar",
    id: 80203327,
    phone: 8925642578,
    email: "Ashugndit@gmail.com",
 // student skills: ["html","Css","js"]  This will pass an error
 // so we can write it like this
    "student skills": ["html","Css","js"] 
 //but read line no17   
}

// Let's try to access student skills
// console.log(student.student skills)
// now it is throwing error because of spaces
console.log(student["student skills"])  //This will run


// Now let's create a key rollno outside the object
const key = "rollno"
// Now what we want is that when we initialise key with 28 then it will give output like
// rollno = 28
console.log(student.rollno)
// Key name not changed to rollno
// student["key"] =28
console.log(student["rollno"])
// Still doesn't work
student[key] =28
console.log(student.rollno)
console.log(student["rollno"])
console.log(student)
// Both of the declaration in line 26 and 29 created a new key value pair with the name of key