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

function conversation () {
    sayHey();
    console.log('How are you?')
    console.log('Goodbye')

}

conversation();