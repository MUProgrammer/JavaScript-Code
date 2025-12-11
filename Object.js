// singleton
// Object.create()

// Object literal
const mySym = Symbol("Key1");
const user = {
  // key values pair huty hai
  name: "Umar",
  fullName: "Muhammad Umar",
  age: 21,
  [mySym]: "myKey",
  email: "umar@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "tuesday", "wednesday"],
};
// console.log(user.email);
// console.log(user['email']);
// console.log(user.fullName);
// console.log(user['fullName']);

user.email = "umar2gmail.com";
// console.log(user.email);
// console.log(user);
//Object.freeze(user); // => freeze the object it can not be changed
user.email = "umar3gmail.com";
// console.log(user);

// console.log(typeof user.mySym);

// function in user
user.greeting = function () {
  console.log("Hello Users");
};
user.greeting2 = function () {
  console.log(`Hello ${user.fullName}`);
};
// console.log(user.greeting());
// console.log(user.greeting2());

// Object.keys()
// Object.values()
// Object.entries()

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

//
const JSuser = {
  social: {
    github: "umarfaisal",
    linkedin: "umarfaisal",
  },

  lastLoginDays: ["monday", "tuesday", "wednesday"],
};
console.log(JSuser.social);
console.log(JSuser.social.github);
console.log(JSuser.lastLoginDays[2]);

