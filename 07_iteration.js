// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let index = 0; index < 10; index++) {
    // console.log(`Outer loop ${index}`);
    
    for (let j = 0; j < 10; j++) {  
        // console.log(`Inner loop ${j} and outer loop ${index}`);
        //  console.log(index + "*" + j + " = " + index*j);
         
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected five ${i}`);
        break
    }
    console.log(`Value of i is ${i}`);
}

for (let s = 0; s < 20; s++) {

    if(s == 7){
        console.log(`Detected ${s}`);
        continue
    }
    const element = s;
    // console.log(element);
    
}



// for of

const arr = [1,2,3,4,5,6,7]

for (const val of arr) {
    // console.log(val);
}

const greeting = "Hello World"
for (const greet of greeting) {
    if(greet == " "){
        // console.log(`space Deteacted ${greet}`);
        continue
    }
    // console.log(greet);
}


// map

const map = new Map()
map.set("In", "India")
map.set("USA", "United State Of America")
map.set("Fr", "France")

console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
}




//  object is not iterable in for of loop
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }