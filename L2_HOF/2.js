// Q .2 = Count Occurrences of Words
let arr = ["apple", "banana", "apple", "orange", "banana", "banana"]
let count = arr.reduce((count,word)=>{
  count[word] = (count[word] || 0)+1;
  return count
},{})
console.log(count)