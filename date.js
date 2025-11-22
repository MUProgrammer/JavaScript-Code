const date=new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTimezoneOffset());
console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toISOString());
let myDate=new Date("11-16-2004");
console.log(myDate.toDateString());

console.log(Date.now());

console.log(myDate.toLocaleString('default', {
    weekday: 'long',
}));
