// const sayHello = function (){
//   console.log('hello')
// }

// const sayHello = () => {
//   console.log('hello')
// }

// one line function does not need braces
// const sayHello = () => console.log('hello')
 
// one line return
// const  sayHello = () => 'Hello';

// return object
// const  sayHello = () => ({msg : 'Hello'})

//mul params need parenthesis
// const sayHello = (fistName, lastName) => console.log(`hello ${fistName} ${lastName}`);

// sayHello('brad','cohen')

const users = ['Nat', 'Johsn', 'Will']

// const nameLengths = users.map(function(name){
//     return name.length;
// })

const nameLengths = users.map((name) =>  name.length)

console.log(nameLengths);