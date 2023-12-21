// CallBack Function

const myfunc2 = name => console.log(`haa bhai ${name}`);

function myfunc(CallBack){
    // we named a callback function as callback
    console.log("inside myfunc");
    CallBack("lalit") //Now myfunc called myfunc2
}
myfunc(myfunc2) //Passed myfunc to myfunc2