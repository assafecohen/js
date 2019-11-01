// Person constructor

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob)

  this.calcAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('brad', 30);
// const john = new Person('John', 45);

// console.log(brad);
// console.log(john);

const brad = new Person('brad', '9-10-1981');


console.log(brad.calcAge());