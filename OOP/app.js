// // Person constructor

// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob)

//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // const brad = new Person('brad', 30);
// // const john = new Person('John', 45);

// // console.log(brad);
// // console.log(john);

// const brad = new Person('brad', '9-10-1981');


// console.log(brad.calcAge());

//Object.prototype
//Person.prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob)

//   // this.calcAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }
// //calculate age 
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
// // get full name
// Person.prototype.getFullName = function (){
//   return `${this.firstName} ${this.lastName}`;
// }
// // gets married
// Person.prototype.getMarried = function (newLastName){
//   this.LastName = newLastName;
// }
// const john = new Person('John','Cohen','8-12-90');
// const mary = new Person('Mary','bolt','8-11-80');

// console.log(mary);
// console.log(john.calculateAge());
// console.log(john.getFullName());

// mary.getMarried("smith");

// console.log(mary);

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

//Person contrsuctor

function Person(firstName, LastName) {
  this.firstName = firstName;
  this.LastName = LastName;
}

//Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.LastName}`;
}

const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}
// inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
//make customer.prototype return customer
Customer.prototype.cunstructor = Customer;
//Create customer
 const customer1 = new Customer('Tom', 'Smite', '5555-555-55', 'vip');

 console.log(customer1);

 // Override greeting
 Customer.prototype.greeting = function() {
  return `Hello there the  ${this.firstName} ${this.LastName} welcome to our company
  `;
 }

 console.log(customer1.greeting())
 console.log(person1.greeting());