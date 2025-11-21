const name = "umar"; // we use single qutes or doble qutes
console.log(name);
// new method for s  tring
const name2 = new String("umarfaisal"); // yh key value pair hai
// or string eik object ban jata hai
console.log(name2);
// is main different functions hote hai jysy length() or prototypes() or methods() bi hai
// console.log(name.length);
// console.log(name2._proto__);
// console.log(name2[0]);
// console.log(name2.toUpperCase());
// console.log(name2.toLowerCase());

/*************    *************/
// substring() method extracts a section of a string and returns it as a new string,
// without modifying the original string. It takes two parameters: the index of the first character
// to be extracted (inclusive), and the index of the last character to be extracted (exclusive).
// If the second parameter is omitted, the substring from the first parameter to the end of the string
// is returned.
console.log(name2.substring(0,3));
   
console.log(name2.slice(0,3));// same as substring but we use negative value in slice
const anotherName="umar faisal   ";
console.log(anotherName);

console.log(anotherName.trim());// remove space
// console.log(anotherName.trimStart());
// console.log(anotherName.trimEnd());

console.log(anotherName.includes("umar")); // true or false
console.log(anotherName.startsWith("umar")); // true or false
console.log(anotherName.endsWith("umar")); // true or false
console.log(anotherName.charAt(3));
console.log(anotherName.indexOf('r'));




