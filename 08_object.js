
const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    rb: 'rubi',
    swift: 'swift in apple',
}

for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);   
}




// const map = new Map()
// map.set("In", "India")
// map.set("USA", "United State Of America")
// map.set("Fr", "France")

// // console.log(map);

// for (const key in map) {
//     console.log(key);
// }



// for Each

const coding = ["js", "ruby", "java", "python"]
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})