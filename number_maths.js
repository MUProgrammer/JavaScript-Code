const score=100
// console.log(score);
// new method for number
const newNumber=new Number(100) // aghr new keyword use kro ga tu number object ban jata hai
// console.log(newNumber);
// console.log(newNumber.toString().length);// convert into string

// console.log(typeof score);
// console.log(typeof newNumber);
const second=123.234
/*************    *************/
// fixed() method returns a string with a specified number of decimals. It can be used to round a number to a specific number of decimal places.
// console.log(second.toFixed(2));
const third=10000000
// console.log(third.toLocaleString('en-pk'));

// ************* Maths *************
/*************    *************/
// Math is a built-in object in JavaScript that contains properties and methods for mathematical constants and functions.
/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));



