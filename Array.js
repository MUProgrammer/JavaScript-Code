// Arrays 
// store multiple values in one variable
const myArr=[0,1,2,3,4,5];
console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);

// ********** Mehtods ************
// 1: push or pop
myArr.push(6);// add value in last
// console.log(myArr);
myArr.pop(); // remove last value no parameter required
// console.log(myArr);

// 2: shift or unshift
myArr.shift(); // remove first value no parameter required
// console.log(myArr)
myArr.unshift(0); // add value in first
// console.log(myArr);

// 3: concat
const myArr2=[7,8,9];
const myArr3=myArr.concat(myArr2);
// console.log(myArr3);

// includes
// console.log(myArr3.includes(20));// if value present return true otherwise false

// indexOf
// console.log(myArr3.indexOf(8));

// Join
const myA1=myArr.join() // convert into string
// console.log(myA1);

// slice or splice
/*************    *************/
// slice - returns a shallow copy of a portion of an array into a new array object.
// Does not modify the original array.
// slice 
/*******    *******/    
const myArr4=myArr3.slice(0,3);
// console.log(myArr4);
// splice 
const myArr5=myArr3.splice(0,3);
// console.log(myArr5);
// console.log(myArr3);

// spread operator

const marval_Heros=['Ironman','Thor','Hulk'];
const dc_Heros=['Superman','Batman','Flash'];
/*************   *************/
// spread operator (...) is used to take an array or an object and expand it into a number of separate arguments in a function call, or to merge multiple arrays into a single array.
const allHeros=[...marval_Heros,...dc_Heros];

console.log(allHeros);

// flat 
const anotherArr=[[0,1,2],[3,4,5],[6,7,8]];
console.log(anotherArr);
const anotherArr3=anotherArr.flat(Infinity);
console.log(anotherArr3);

console.log(Array.isArray("Umar"));
console.log(Array.from("Umar"));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
