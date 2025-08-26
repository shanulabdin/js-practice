// Declaration
product(2, 3); // works
function product(num1, num2){
  console.log(num1 * num2);
}
product(2, 3);

// function Expression
// prod(2, 4); error
const prod = function(num1, num2){
  console.log(num1 * num2);
}
prod(2, 4)

// Arrow function
// productOf(2, 5); error
let productOf = ((num1, num2) => {
  console.log(num1 * num2);
})
productOf(2, 5);

// 2. Array methods
let arr = [10, 20, 30];
arr.push(40)

console.log(arr);

let arr2 = [10, 20, 30];
arr2.pop();

console.log(arr2);


let arr3 = [10, 20, 30];
arr3.shift();

console.log(arr3);

let arr4 = [10, 20, 30];
arr4.unshift(5);

console.log(arr4);

let arr5 = [10, 20, 30];
arr5.splice(1, 1, 200);

console.log(arr5);

// 3. Higher-Order Array Methods
let nums = [1, 2, 3, 4, 5, 6];
let map = nums.map(num => num * 2)

console.log(map);

let nums2 = [1, 2, 3, 4, 5, 6];
let filter = nums2.filter(nums2 => nums2 > 3)

console.log(filter);

let nums3 = [1, 2, 3, 4, 5, 6];
let reduce = nums3.reduce((acc, crr) => acc * crr);

console.log(reduce);

// 4 Objects & this
const car = {
  brand: 'Toyota',
  year: '2020',
  info(){
    console.log(`Brand: ${this.brand}, Year: ${this.year}`)
  }
}
const carInfo = car.info;
console.log(carInfo) // this says undefined

// 6. Mix & Match Challenge
let ages = [12, 17, 18, 20, 25];

let adults = ages.filter(age => age >= 18);
let olderAdults = adults.map(age => age + 1);
let totalAge = olderAdults.reduce((acc, crr) => acc + crr);

console.log(ages, adults, olderAdults, totalAge);