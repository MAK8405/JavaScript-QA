// Practical:
// Create an object person with properties firstName, lastName, and age. Then, write a method greet() that outputs a greeting message like:

// "Hello, my name is John Doe, and I am 30 years old."
// Use this to refer to the object's properties within the method. Example:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     greet: function() {
//          Output greeting using `this`
//     }
// };

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`
    );
  },
};

person.greet();
