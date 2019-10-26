// // if(something){
// //   do something
// // } else {
// //   do something else
// // }

// const id = 100;

// // // EQUAL TO
// // if(id == 100){
// //   console.log('CORRECT');
// // } else {
// //   console.log('INCORRECT');
// // }

// // // NOT EQUAL TO
// // if(id != 101){
// //   console.log('CORRECT');
// // } else {
// //   console.log('INCORRECT');
// // }

// // // EQUAL TO VALUE & TYPE
// // if(id === 100){
// //   console.log('CORRECT');
// // } else {
// //   console.log('INCORRECT');
// // }

// // // EQUAL TO VALUE & TYPE
// // if(id !== 100){
// //   console.log('CORRECT');
// // } else {
// //   console.log('INCORRECT');
// // }

// // Test if undefined
// // if(typeof id !== 'undefined'){
// //   console.log(`The ID is ${id}`);
// // } else {
// //   console.log('NO ID');
// // }

// // GREATER OR LESS THAN
// // if(id <= 100){
// //   console.log('CORRECT');
// // } else {
// //   console.log('INCORRECT');
// // }

// // IF ELSE

// const color = 'yellow';

// // if(color === 'red'){
// //   console.log('Color is red');
// // } else if(color === 'blue'){
// //   console.log('Color is blue');
// // } else {
// //   console.log('Color is not red or blue');
// // }

// // LOGICAL OPERATORS

// const name = 'Steve';
// const age = 70;

// // AND &&
// if(age > 0 && age < 12){
//   console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if(age < 16 || age > 65){
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if(id === 100)
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');

// if(id === 100)
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');
// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

// const todo = {
//   add: function(){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// Global scope
var a = 1;
let b = 2;
const c = 3;

console.log("global scope", a , b , c);

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("function scope", a , b , c);
// }
// test();


// if(true){
//   // block scope
// var a = 4;
// let b = 5;
// const c = 6;
// console.log("if scope scope", a , b , c);
// }

for(let a = 0 ; a < 10 ; a++){
  console.log(`Loop: ${a}`)
}