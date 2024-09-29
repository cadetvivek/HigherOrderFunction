// Question 4: Flatten an Array Description: Write a function that takes an array of arrays and flattens it into a single array using the reduce() function. Example: 
// Input: [[1, 2], [3, 4], [5, 6]] Output: [1, 2, 3, 4, 5, 6]

let arr  =[[1, 2],
           [3, 4],
           [5, 6]]
let flattenArray = arr.reduce((acc,val)=>{
  return acc.concat(val)
})
console.log(flattenArray)