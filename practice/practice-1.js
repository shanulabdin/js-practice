let age = 20;
let price = 19.00;
console.log(age);

const name = 'Shan';
let greeting = 'Assalam u Alaikum';
console.log(name);
console.log(greeting);

let isActive = true;
let hasPermission = false
console.log(typeof isActive);

let user = null;
console.log(typeof user);

let race;
console.log(race);

console.log(greeting + ', My name is ' + name + ", and I'm " + age + ' years old.');

// math
// area of rectangle:
let width = 2;
let length = 2;

const rectArea = width * length;
console.log(rectArea);

// area of triangle
let pie = 3.14159;
let radius = 5;

const circleArea = pie * (radius * radius);
console.log(circleArea);

// profit percentage calculater
let costPrice = 200;
let soldPrice = 250;

const profit = soldPrice - costPrice;
const profitPercentage = (profit / costPrice) * 100 + '%';

console.log(profit);
console.log(profitPercentage);

// if / else if/ else
if(age < 0){
  console.log('age cannot be bellow 0');
} else if(age === 0) {
  console.log('welcome to the world');
} else if(age >= 13 && age < 20) {
  console.log('teen');
} else if(age >= 20 && age <= 64) {
  console.log('adult');
} else if(age > 65 && age <= 99) {
  console.log('senior');
} else if(age >= 100) {
  console.log('bro you are a legend');
} else {
  console.log('I have no words');
}

// truthy / falsy values
let truthy = 5;
let falsey = 0;

if (truthy) {
  console.log('this will print something');
}
if (falsey) {
  console.log('this will not print something');
}

// ternary operator
let canVote = age >= 18 ? 'yes' : 'no';
console.log(canVote);

age = 20
let ageStatus = age === 0 ? 'welcome to the world' : 
                age < 13 ? 'child' :
                age >= 13 && age < 20 ? 'teen' : 
                age >= 20 && age <= 64 ? 'adult' :
                age >= 65 && age <= 99 ? 'senior' :   'legend';

console.log(ageStatus);