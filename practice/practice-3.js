// // 1
// const fruits = ["apple", "banana", "mango", "orange", "grapes"];

// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i])
// }

// // 2
// const numbers = [3, 7, 10, 5];

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//   sum += numbers[i]
// }
// console.log(sum)

// // 3
// const nums = [2, 14, 7, 29, 9];

// let large = 0;
// for(let i = 1; i < nums.length; i++){
//   large = nums[i] > large ? nums[i] : large;
// }

// console.log(large);

// // 4
// const arr = [1, 2, 3, 4, 5];

// let reverse = [];
// for(let i = arr.length; i > -1 ; i--){
//   reverse.push(arr[i]);
// }
// console.log(reverse);
// // i tried this why is it saying undefined on the first element of the array?

// 5
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddCount = 0;

for(let i = 0; i < numbs.length; i++){
  if(numbs[i] % 2 !== 0){
    oddCount++;
  }
}
console.log(oddCount);

// 6
const num2 = [9, 1, 2, 3, 4, 5, 6, 7, 8];

let small = num2[0];
for(let i = 1; i < num2.length; i++){
  if(small > num2[i]){
    small = num2[i]
  }
}
console.log(small);

// 7
const words = ["JS", "is", "fun"];

let joined = words[0];
for(let i = 1; i < words.length; i++){
  joined += ' ' + words[i];
}
console.log(joined);
// there might be e better way to add spaces, but this is the first solution that came to mind

// 8
const num3 = [2, 4, 5];
let product = 1;

for(let i = 0; i < num3.length; i++){
  product = product * num3[i];
}
console.log(product);

// let product = num3.reduce((acc, crr) => acc * crr);
// this came up in my mind, but lets do it manualy

// 9
const arr = [3, -2, 7, -5, 0, 10, 0];
let positive = 0;
let negetive = 0;
let zero = 0;

for(let i = 0; i < arr.length; i++){
  arr[i] > 0 ? positive++ :
  arr[i] < 0 ? negetive++ :
               zero++;
  // can we do this in a ternary operator?
}
console.log(positive, negetive, zero);

// 10
const array = [1, 2, 2, 3, 4, 4, 5];
let newArray = [];

for(let i = 0; i < array.length; i++){
  if(!newArray.includes(array[i])){
    newArray.push(array[i])
  }
}
console.log(newArray);

// 11
const word = "madam";
let reversed = '';

for(let i = word.length - 1; i >= 0; i--){
  reversed += word[i];
}
let palindrome = word === reversed;

console.log(reversed, palindrome);
// is this good? or do i have to move if condition outside so it doesnt check after each loop?

const nums = [12, 45, 7, 29, 10];

let largest = 0;
let secondLargest = 0;

for(let i = 0; i < nums.length; i++){
  if(largest < nums[i]){
    largest = nums[i];
  }
}

for(let i = 0; i < nums.length; i++){
  if(nums[i] !== largest && nums[i] > secondLargest){
    secondLargest = nums[i]
  }
}

console.log(largest, secondLargest);



// let ordered = nums.sort((a, b) => a - b);
// let largest = ordered[ordered.length - 1];
// let secondLargest = ordered[ordered.length - 2];

// console.log(largest, secondLargest);
// this one works but this doesnt use loops;