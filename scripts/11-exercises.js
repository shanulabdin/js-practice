// const nums = [10, 20, 30];
// nums[2] = 99;
// console.log(nums);

// function getLastValue(values){
//   const lastValue = values.length - 1;
//   return values[lastValue];
// }

// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi', 'hello', 'good']));

// // 1
// function getLastValue(values){
//   const lastValue = values.length - 1;
//   return values[lastValue];
// }

// console.log(getLastValue(['cat', 'dog', 'rabbit']));
// console.log(getLastValue([5, 10, 15, 20]));

// // 2
// function lastM(numbers){
//   const lastMultiple = numbers.length - 1;
//   return numbers[lastMultiple] * 2;
// }
// console.log(lastM([5, 10, 15, 20]));

// // 3
// const trueValue = getLastValue([true, false, false, true])
// console.log(`the last value is: ${trueValue}`);

// function getSecondLastValue(values){
//   const secondLastValue = values.length - 2;
//   return values[secondLastValue];

// }



// // 5
// const secondLastValue = getSecondLastValue([true, false, false, true]);
// console.log(`the second last value is: ${secondLastValue}`);

// // 6
// function yearGoal(goals){
//   const lastGoal = yearGoal.length + 2;
//   return goals[lastGoal];
// }


// const myLastGoal = yearGoal(['100k subs', '3 apps', '3 games', 'js complete']);
// console.log(`If nothing else, I will definitely have ${myLastGoal}`)


// // 4
// const word = 'hello';
// function lastAlphabet(text){
//   const lastLetter = text.length - 1;
//   return text[lastLetter];
// }

// console.log(lastAlphabet('hello'))

// // 7
// function emptyValue(values){

//   if (values.length === 0){
//     return "No items in the list.";
//   } else{
//       const lastValue = values.length - 1;
//   return values[lastValue];
//   }
// }

  
// console.log(emptyValue(['cat', 'dog', 'rabbit']));
// console.log(emptyValue([]));

// // 0
// function arraySwap(array){
//   const lastIndex = array.length - 1;

//   const lastValue = array[lastIndex]
//   const firstValue = array[0];

//   array[0] = lastValue;
//   array[lastIndex] = firstValue;

//   return array;
// }

// console.log(arraySwap([1, 20, 22, 24, 5]));
// console.log(arraySwap(['hi', 'hello', 'good']));

// // 1
// function swapSecondAndSecondLast(array){
//   const secondValue = array[1];
//   const secondLastValue = array[3];

//   array[1] = secondLastValue;
//   array[3] = secondValue;

//   return array;
// }
// console.log(swapSecondAndSecondLast([1, 2, 3, 4, 5])
// );

// function swapFirstAndMiddle(array){
//   if (array.length % 2 === 0) {
//     return 'no middle value found';
//   }

//   const middleIndex = Math.floor(array.length / 2);

//   const firstValue = array[0];
//   const middleValue = array[middleIndex];

//   array[0] = middleValue;
//   array[middleIndex] = firstValue;

//   return array;
// }

// console.log(swapFirstAndMiddle([1, 2, 3, 4, 5]));

// // exercises 11d to 11h
// for(let i = 0; i <= 10; i += 2){
// console.log(i)
// }  

// // 11e
// for(let i = 5; i >= 0; i--){
//   console.log(i)
// }

// // 11f
// let i = 0;

// while(i <= 10){
//   i = i + 2;
//   console.log(i);

// }

// let i = 5;

// while(i >= 0) {
//   console.log(i);
//   i--;
// }

