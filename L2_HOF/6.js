// Question 6: Calculate Total Price of Items Description: Given an array of objects representing items in a shopping cart, write a function that calculates the total price of all items using the reduce() function.
  
// Example: Input: [ { iten: "Book", price: 10 }, {iten: "Per", price: 2}, {iten: "Notebook", price: 5},]

let arr =  [ { iten: "Book", price: 10 }, 
            {iten: "Per", price: 2}, 
            {iten: "Notebook", price: 5},]
let totalPrice = arr.reduce((total,item)=>total+item.price,0
 )
console.log(totalPrice)