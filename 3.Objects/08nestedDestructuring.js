// Nested Destructuring

const users = [
    {userId : 1, firstName : "Lalit", status : "Berozgar"},
    {userId : 2, firstName : "Monu", status : "Virgin"},
    {userId : 3, firstName : "Krishna", status : "DropOut"}
]
// const [user1, user2, user3] = users
// console.log(user1, user2, user3);
// const[{firstName},,{status}] = users
// console.log(firstName, status);

const[{firstName :naam, userId:id},, {status:aukaat}] = users
console.log(naam);
console.log(id);
console.log(aukaat);