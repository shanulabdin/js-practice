// function addNum(array, num){
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + num);
//   }
//   return result;
// }
// console.log(addNum([1, 2, 3], 2));
// console.log(addNum([1, 2, 3], 3));
// console.log(addNum([-2, -1, 0, 99], 2));

// function addaArray(array1, array2){
//   const result = [];

//   for(let i = 0; i < array1.length; i++){
//     result.push(array1[i] + array2[i]);
//   }

//   return result;
// }
// console.log(addaArray([1, 1, 2,], [2, 2, 4]));
// console.log(addaArray([1, 2, 3,], [4, 5, 6]));

// function countPositive(nums){
//   let result = [];

//   for (let i = 0; i < nums.length; i++){
//     if (nums[i] > 0){
//       result++;
//     }
//   }
//   return result;
// }
// console.log(countPositive([1, -3, 5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));

// 11 l
// function minMax(nums){
//   const result = {
//     min: nums[0],
//     max: nums[0]
//   }

//   for (let i = 0; i < nums.length; i++){
//     const value = nums[i];

//     if (value < result.min) {
//       result.min = value;
//     }

//     if (value > result.max) {
//       result.max = value;
//     }
//   }

//   return result;
// }
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// // 11 m
// function minMax(nums){
//   const result = {
//     min: null,
//     max: null
//   }

//   for (let i = 0; i < nums.length; i++){
//     const value = nums[i];

//     if (result.min === null || value < result.min) {
//       result.min = value;
//     }

//     if (result.max === null || value > result.max) {
//       result.max = value;
//     }
//   }

//   return result;
// }
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// console.log(minMax([]));
// console.log(minMax([3]));

// function countWord(words){
//   const result = {};

//   for(let i = 0; i < words.length; i++){
//     const word = words[i];

//     if(!result[word]){
//       result[word] = 1;
//     } else {
//       result[word]++
//     }
//   }
//   return result;
// }
// console.log(countWord(['apple', 'grape', 'apple', 'apple']))
// console.log(countWord(['hi', 'hi', 'hello', 'hi', 'yo', 'hello']));

// function minMax(nums){
//   const result = {
//     min: null,
//     max: null
//   }

//   for(let i = 0; i < nums.length; i++){
//     const value = nums[i];
//     if (result.min === null || value < result.min){
//       result.min = value;
//     }

//     if (result.max === null || value > result.max){
//       result.max = value
//     }
//   }

//   return result;
// }

// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// console.log(minMax([]));
// console.log(minMax([2,]));

// function countWord(words){
//   const result = {};
//     for(let i = 0; i < words.length; i++){
//       const word = words[i];

//       if (!result[word]){
//         result[word] = 1;
//       } else {
//         result[word]++;
//       }
//     }
//   return result;
// }

// console.log(countWord(['apple', 'grape', 'apple', 'apple']))
// console.log(countWord(['hi', 'hi', 'hello', 'hi', 'yo', 'hello']));


let words = ['hello', 'world', 'search', 'good', 'search'];

let index = -1;

for (let i = 0; i < words.length; i++){

  if (words[i] === 'search'){
    index = i;
    break;
  }
}

console.log(index)

words = ['hello', 'world', 'good'];
index = -1;

for(let i = 0; i < words.length; i++){
  if (words[i] === 'search'){
    index = i;
    break;
  }
}
console.log(index)

function findIndex(array, word){
  const result = [];
  index = 1;

  for (let i = 0; i < array.length; i++){
    
  }
} 
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));