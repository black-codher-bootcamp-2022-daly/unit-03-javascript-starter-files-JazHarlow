// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

let a = 5;
let b = 10;

console.log(a+b);

a = 20;

console.log(a+b);

const c = a + b;

console.log(c);

const userName = 'Gigi';

function sayHey () {
    console.log('Hey ' + userName)
}

sayHey();

//function conversation () {
 //   sayHey();
 //   console.log('How are you?')
 //   console.log('Goodbye')

//}

//conversation();

//function sayHey (name, surname) {
  //  console.log('Hey ' + name + surname)
//}

//function conversation () 
 //   sayHey('Jaz', ' Harlow');
 //   sayHey('Leon', ' Harlow');
 //   sayHey('Remi', ' Harlow');
   

 //function addTwoNumbers(first, second) {
   // const total =first + second;
   // return 'the total is:' + total;
 //}

 //console.log(addTwoNumbers(2,3));


 /*const age=17+5;
 function futureAge (userName, age) {
   
 }

 console.log ('Hi ' + userName, '! You will be '+ age, 'years old in 5 years' )
*/

   function currentAge (name, age) {
    const currentAge= age 
    return name + currentAge
 };

 console.log(currentAge('Jaz is ', 38))

   function calculateFutureAge (name, age) {
    const calculatedAge= age + 5
    return name + "will be " + calculatedAge + " years old in 5 years"
};

 console.log(calculateFutureAge('Jaz ', 38))


