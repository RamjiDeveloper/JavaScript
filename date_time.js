const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let anotherDate = new Date(2027, 3, 4)
// console.log(anotherDate.toDateString());

let myCreated = Date.now()
// console.log(myCreated);
// console.log(myDate.getTime());
if(myCreated === myDate.getTime()){
    return true
}else{
    return false
}






