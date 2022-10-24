// ****************************************************TASK 1****************************************************
// const personA = {
//   name: "Jaz",
//   age: 38,
// };

// const personB = {
//   name: "Remi",
//   age: 10,
// };

// const personC = {
//   name: "Zayn",
//   age: 5,
// };

// const persons = [personA, personB, personC];
// // console.log("test");
// // const ages = [5,10,15,20]

// console.log(persons[2].name)


// const animals = ["dog", "cat", "mouse"];
// console.log({animals, first:animals [0], second: animals[1], third: animals[2] });

// for (let index = 0; index < animals.length; index++) {
//   const animals =animals[index];
  
// }

// animals.pop()
// console.log(animals)


// ****************************************************TASK 2****************************************************

const names = ['bex', 'jaz', 'isra', 'harry', 'sarah', 'kyle', 'lucy', 'katie', 'luke', 'hannah'];

console.log ('random', names);

names.reverse()
console.log ('ascending', names);

names.sort().reverse();
console.log ('descending', names);


const MagicNumbers = [5, 325, 67, 100000, 150]

MagicNumbers.sort();
console.log(MagicNumbers);

MagicNumbers.reverse()
console.log(MagicNumbers)




















// ****************************************************TASK 2****************************************************











// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}
