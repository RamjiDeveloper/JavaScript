


// var c = 30

let a = 300
if(true){
    let a =10
    const b = 30
    // console.log("inner", a);
}

// console.log(a)
// console.log(b)
// console.log(c)

function one (){
    const username = "Ramji"

    function two(){
        const website = 'Youtube'
        console.log(username);
        
    }

    // console.log(website);
    
    two()
}
// one()

if(true){
    const username = "Ramji"
    if(username === "Ramji"){
        const website = "Youtube"
        // console.log(username + website)
    }

    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++++Interesting=========================/

console.log(addone(4))
function addone(num){
    return num + 1
}


addTwo(4)
const addTwo =  function(num){
    return num + 2
}

