//  write a function to calculate th total amount of moneey earned bythe restaurant from the all orders?


const foodPrices = {
    burger: 50,
    fries: 30,
    soda: 8,
    pizza: 60,
    salad: 10,
    water: 2,
    sandwich: 30,
    soup: 10,
    coffee: 100
}


const orders = [
    {
        tableNumber: 1,
        items: ['burger', 'fries', 'soda', 'fries']
    },
    {
        tableNumber: 2,
        items: ['pizza', 'salad', 'water', 'soda', 'salad']
    },
    {
        tableNumber: 3,
        items: ['sandwich', 'soup', 'coffee', 'soda', 'salad']
    },
]


// const { burger } = foodPrices
// console.log(burger, "burger")

// const item = 'burger'

// console.log(foodPrices[item], "zahid")

// for(let x in foodPrices){}


const calculateOrderPrice = (order) => {
    const { items } = order;
    let amount = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        amount += foodPrices[item]
    }
    // console.log(amount, "amount")
    return amount;
}

// 
const calculateAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        totalAmount += calculateOrderPrice(order)
    }
    console.log(totalAmount, "total amount")

}

// console.log(calculateAmount())


// console.log(calculateOrderPrice(orders[0]))



// function getTotal(prices, orders) {
//     let totalAmount = 0;
//     let totalOrder = {};

//     for (let ele of orders) {
//         for (item of ele.items) {
//             totalOrder[item] = (totalOrder[item] || 0) + 1
//         }
//     }

//     for (let ele in totalOrder) {
//         totalAmount += prices[ele] + totalOrder[ele]
//     }
//     return totalAmount
// }
// console.log(getTotal(foodPrices, orders), "getTotal")