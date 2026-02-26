const userEmail = "ramji@ai.com"

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have usser email");
}

// falsey value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nulish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15
val1 = null ?? undefined ?? 15

console.log(val1);


