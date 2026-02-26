const myNum = [1, 2, 3, 4, 5]

const total = myNum.reduce( (acc, currVal) => {
    // console.log(`Accumlater:  ${acc} and CurrentValue: ${currVal}`);
    
    return acc + currVal
}, 0)

// console.log(total);



const shopingCart = [
    {
        itemName: 'Js Course',
        price: 2999
    },
    {
        itemName: 'Python',
        price: 2899
    },
    {
        itemName: 'Mobile data',
        price: 5000
    },
];

const priceToPay = shopingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);

