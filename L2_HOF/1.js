// Q.1 Find Squre of Numbers Greater than 5
let arr = [2,4,6,8];
let GreterFive = arr.filter((element)=>{
  return element>5;
})

let Squre = GreterFive.map((element)=>{
  return element**2;
})
console.log(Squre)