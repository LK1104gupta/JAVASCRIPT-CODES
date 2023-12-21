// Find method
// Take input as callback functions
// returns the first true element
// Pass element of the array as arguments to the callback function

const username = ["lalit", "MOnu", "Krishna", "ashu"]
function isLenght4(string){
    return string.length===4
}
console.log(username.find(isLenght4))


// Some real shit
const users = [
    {userID :1, uname : "Lalit"},
    {userID :2, uname : "Monu"},
    {userID :3, uname : "Krishna"},
    {userID :4, uname : "ashu"},
]
const search = users.find(user => user.userID===2)
console.log(search)