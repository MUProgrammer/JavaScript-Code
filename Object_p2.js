// Singleton object
// const tinder=new Object();
const tinder = {};
tinder.id = "123abc";
tinder.name = "Umar";
tinder.isLoggedIn = false;
// console.log(tinder);

// object ky andher object
const user1 = {
  email: "umar@google.com",
  fullname: {
    username: {
      first: "Umar",
      last: "Faisal",
    },
  },
};
// console.log(user1);
// console.log(user1.fullname.username.first);

// combine the object

// const user2=Object.create(user1);
// console.log(user2);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// this is used to combine the object and there are
// two things target and

const obj3 = { ...obj1, ...obj2 }; // mainly used syntax in development
// console.log(obj3);

console.log(tinder);
console.log(Object.keys(tinder)); // retrun an array
console.log(Object.values(tinder)); // retrun an array
console.log(Object.entries(tinder)); // retrun an array

console.log(tinder.hasOwnProperty("isLoggedIn"));
// database
const user = [
  {
    id: 1,
    email: "umar@google.com",
    password: "123456",
    username: "umar",
  },
  {
    id: 2,
    email: "umar2@google.com",
    password: "123456",
    username: "umar2",
  },
  {
    id: 3,
    email: "umar3@google.com",
    password: "123456",
    username: "umar3",
  },
];
console.log((user[1].email = "umar2gmail.com"));
// console.log(user);
