// // day one review
// const name = 'Shan';
// const age = 20;
// const country = 'Pakistan';

// console.log(`Hi, my name is ${name}, I'm ${age}` + ' years old, and I live in ' + country)

// // area of circle
// const pie = 3.14159;
// const radius = 2;

// const area = 2 * pie * radius;
// console.log(area);

// // Grade Calculator
// let score = 33;

// if(score >= 90){
//   console.log('A');
// } else if (score >= 80 && score <= 89){
//   console.log('B')
// } else if (score >= 50 && score <= 79){
//   console.log('C')
// } else if (score >= 33 && score <= 49){
//   console.log('D')
// } else if (score < 33){
//   console.log('F')
// } 

// const grade = score >= 90 ? 'A' :
//               score >= 80 ? 'B' : 
//               score >= 50 ? 'C' : 
//               score >= 33 ? 'D' : 'F' ;

// console.log(grade);

// // step 3
// console.log(Boolean("0")); // truthy
// console.log(Boolean(0));   // falsey
// console.log(Boolean([]));  // falsey
// console.log(Boolean({}));  // truthy
// console.log(Boolean(null)); // falsey

const fruits = [
  'mango',
  'apple',
  'banana',
  'peach',
  'melon',
]

fruits.forEach(fruit => {
  console.log(fruit)
})