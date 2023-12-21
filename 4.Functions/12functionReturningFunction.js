// Function returning Function
// when a function accept or returns a function they known as High ordered function

function myfunc(){
    // return function hellow(){
    //     console.log("Hello World");
    // }
    function hellow(){
        console.log('hello world');
    }
    return hellow
}
const jack = myfunc()
console.log(jack);
