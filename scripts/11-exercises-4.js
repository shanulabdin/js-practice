// let words = ['hello', 'world', 'search', 'good', 'search'];

// let index = -1;

// for (let i = 0; i < words.length; i++){

//   if (words[i] === 'search'){
//     index = i;
//     break;
//   }
// }

// console.log(index)

// words = ['hello', 'world', 'good'];
// index = -1;

// for(let i = 0; i < words.length; i++){
//   if (words[i] === 'search'){
//     index = i;
//     break;
//   }
// }
// console.log(index)

// function findIndex(array, word){
//   for(let i = 0; i < array.length; i++){
//     if (array[i] === word){
//       return i;
//     }
//   }
//   return -1;
// }
 
// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
// console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// function removeEgg(foods){
//   const foodsCopy = foods.slice();
//   const reversedFood = foods.slice().reverse();

//   const result = [];
//   let eggRemoved = 0;

//   for(let i = 0; i < reversedFood.length; i++){
//     if(reversedFood[i] === 'egg' && eggRemoved < 2){
//       eggRemoved++;
//       continue;
//     }
//     result.push(reversedFood[i]);
//   }
//   return result.reverse();
  
// }
// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
// console.log(removeEgg(foods));
// console.log(foods);

// all by heart
// function removeEgg(foods){
//   const foodsCopy = foods.slice();
//   const reversedFood = foodsCopy.reverse();

//   const result = [];
//   let eggCount = 0;

//   for(let i = 0; i < reversedFood.length; i++){
//     if(reversedFood[i] === 'egg' && eggCount < 2){
//       eggCount++;
//       continue;
//     }
//     result.push(reversedFood[i]);
//   }
//   return result.reverse();
// }
// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
// console.log('Reversed:', removeEgg(foods));
// console.log('Original:', foods);


// for(let i = 1; i <= 20; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0){
//     console.log('Fizz');
//   } else if (i % 5 === 0){
//     console.log('Buzz');
//   } else{
//     console.log(i)
//   }
// };


// function findIndex(array, word) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === word) {
//       return i;
//     }
//   }

//   return -1;
// }

// function unique(array){
//   const result = [];
  
//   for (let i = 0; i < array.length; i++){
//     const word = array[i]

//     if (findIndex(result, word) === -1){
//       result.push(word);
//     }
//   }

//   return result;
// }

// console.log(unique(['green', 'red', 'blue', 'red']));
// console.log(unique(['red', 'green', 'green', 'red']));



// for (let i = 1; i <= 20; i++){

//   if(i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0){
//     console.log('Fizz');
//   } else if (i % 5 === 0){
//     console.log('Buzz');
//   } else {
//     console.log(i)
//   }
// }

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

function unique(array){
  const result = [];

  for(let i = 0; i < array.length; i++){
    const word = array[i]

    if(findIndex(result, word) === -1){
      result.push(word);
    }
  }

  return result;
}
console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));