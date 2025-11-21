const score=100
console.log(score);
// new method for number
const newNumber=new Number(100) // aghr new keyword use kro ga tu number object ban jata hai
console.log(newNumber);
// console.log(newNumber.toString().length);// convert into string

console.log(typeof score);
console.log(typeof newNumber);
const second=123.234
/*************    *************/
// fixed() method returns a string with a specified number of decimals. It can be used to round a number to a specific number of decimal places.
console.log(second.toFixed(2));
const third=10000000
console.log(third.toLocaleString('en-pk'));

