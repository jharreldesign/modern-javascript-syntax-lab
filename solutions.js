//Exercise 1
// const array1 = [
//     'Vanilla',
//     'Chocolate',
//     'Strawberry'
// ];

// const nums = [
//     13,
//     87,
//     2,
//     89,
//     12,
//     4,
//     90,
//     63
// ];

// const array2 = array1.map((currentElement) => {
//     return currentElement + ' ice cream'
// });

// const multipliedNums = nums.map((nums) => {
//     return nums * 2
// });

// console.log(multipliedNums);

//Exercise2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// const [firstTopping, secondTopping] = pizzaToppings;

// Your code here
// console.log(firstTopping);
// console.log(secondTopping);

// console.log(pizzaToppings[0]);
// console.log(pizzaToppings[1]);

//Exercise 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };

// Your code here

//   const { make, model } = car;

//   console.log(make);
//   console.log(model);

//   console.log(car.make);
//   console.log(car.model);

//Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here

// const controversialPizzaToppings = [...pizzaToppings];

// console.log(controversialPizzaToppings)

//Exercise 5
// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
//   const newModel = { ...car };

  // Your code here
//   newModel.make = 'Audi';
//   newModel.model = 'q7';

//   console.log('Original: ', car);
//   console.log('New: ', newModel);

//Exercise 6
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

// const userProfile = {};
// const propertyName = "username";
// userProfile[propertyName] = "John_Cena";

// console.log(userProfile);

//Exercise 7
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function nounAndAdjective (noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}`)
}

nounAndAdjective("dog", "black");
nounAndAdjective("bird", "blue");

nounAndAdjective()

//Exercise 9
// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here

let pizza = 'tasty';

pizza === 'gross' ? console.log('yum') : console.log('yuck');


//EXERCISE 10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

//Exercise 11
const adventurer = {
    name: 'Alice',
};

let dog = adventurer.dog?.name;

console.log(dog);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer2 = {
    name: 'Alice',
};

let cat = adventurer2.cat?.name;

console.log(cat);