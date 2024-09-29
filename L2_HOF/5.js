// Question 5: Multiply and Filter Even Numbers Description: Write a function that multiplies each element of an array by 3 and then filters out the even numbers using map() and filter().
// Example: Input: [1, 2, 3, 4, 5] Output [6, 12]

let arr = [1, 2, 3, 4, 5];
let filterEven = arr.filter((element)=>{
  return element%2==0;
})
let multiply = filterEven.map((element)=>{
  return element*3
})
console.log(multiply)