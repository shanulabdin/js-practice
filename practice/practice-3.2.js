// 1. Functions
// Declaration
function greet(name){
  console.log('Hello', name);
}
greet('Shanu');

// Expression
const greeting = function(name){
  console.log('Greetings', name);
}
greeting('Shanu');

// Arrow function
const welcome = (name => console.log('Welcome', name))
welcome('Shanu');

// hoisting
// when i call a declaration function before its initialization, it works, but if i do the sma ewith a expression with let / const it says cannot access it before initialiazation, and when i do the same with var it says function doesnt exist

// 2. array methods
//  trying them one by one and seeing what they do
let arr = [1, 2, 3];
let push = arr.push(4); // pushed 4 at the end of array,

let arr2 = [1, 2, 3];
let pop = arr2.pop(); // removed last element

let arr3 = [1, 2, 3];
let shift = arr3.shift(); // removed first element

let arr4 = [1, 2, 3];
let unShift = arr4.unshift(99); // it just returned the first elemnt of the array

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
let splice = arr5.splice(3, 5, 44, 55); // it takes the index number and removed the number of elements we gave it, made a new array splice(index, elementsToRemove)

console.log('Push:', arr, push);
console.log('Pop:', arr2, pop);
console.log('Shift:', arr3, shift);
console.log('unShift:', arr4, shift);
console.log('Splice:', arr5, splice);


// 3. higher order methods
const double = function(numbers){
  let map = numbers.map(number => number * 2)
  console.log('Map:', numbers, map);
}

double([1, 2, 3]);

let strings = ['app', 'ball', 'phone', 'speaker', 'moniter', 'cpu'];
let filter = strings.filter(string => string.length > 5)
console.log('Filter:', strings, filter);

let numbers2 = [1, 2, 3];
let reduced = numbers2.reduce((acc, crr) => acc + crr, 0)
console.log('Reduce:', reduced);

const person = {
  name: 'Shan',
  age: 20,
  hobbies: ['Reading', ' Coding', ' Fitness'],
  greet: function(){
    console.log('Hello!', this.name);
  },
  tellAge(){
    console.log('I am', this.age, 'years old.');
  },
  tellHobbies: (hobbies => console.log('Shan likes ' + hobbies))
}
person.greet();
person.tellAge();
person.tellHobbies(person.hobbies);