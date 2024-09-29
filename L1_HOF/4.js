// Q: 4 Capitalize First Lette
let arr = ["apple","banana","cherry"];

let capitalisedArr = arr.map((word)=>{
  return word.charAt(0).toUpperCase()+word.slice(1);
})

console.log(capitalisedArr);