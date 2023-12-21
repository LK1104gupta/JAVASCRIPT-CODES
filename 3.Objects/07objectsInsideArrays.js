// Objects inside arrays
// It is very useful in real world applications

const users = [
    {userId : 1, firstName : "Lalit", status : "Berozgar"},
    {userId : 2, firstName : "Monu", status : "Virgin"},
    {userId : 3, firstName : "Krishna", status : "DropOut"}
]
 for(let user of users){
    console.log(user)
    // console.log(users)
 }
 console.log(users[0].firstName)