// Question 3: Extract Names of Adults. Description: Given an array of objects representing people, write a function that returns a new array containing the names of people who are 18 years old or older. Use the filter() and map() functions.
  
//   Example: Input: [ { name: "John", age: 16 }, { name: "Jane", age: 22}, (name: "Mark", age: 18),]
// Output: "Jane", "Mark"] 

let arr = [
  { name: "John", age: 16 },
  { name: "Jane", age: 22},
  {name: "Mark", age: 18},
]
let adult = arr.filter((element)=>{
  return element.age>=18;
})
let name = adult.map((element)=>{
  return element.name;
})
console.log(name)