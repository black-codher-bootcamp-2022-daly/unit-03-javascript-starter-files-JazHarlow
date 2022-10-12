// ****************************************************TASK 1 - OBJECTS****************************************************

const personA = {
    name: 'Remi',
    age: '10',
    location: 'Watford',
    likes: 'Football'
};

const personB = {
    name: 'Zayn',
    age: '5',
    location: 'London',
    likes: 'Race cars'
};

const personC = {
    name: 'Skye',
    age: '4',
    location: 'Birmingham',
    likes: 'Teddies'
};

const personD = {
    name: 'Leon',
    age: '38',
    location: 'Amsterdam',
    likes: 'Reading'
}


function biography(person) {
    return `Hi, my name is ${person.name}, I am ${person.age} years old, I live in ${person.location} 
and I like ${person.likes}`
}

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));






// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("division: x + y " + division);

const additionB = x + x + y;

console.log("additionB: x + x + y " + additionB);

const multiply = x * x;

console.log("multiply: x * x " + multiply);

const divide = x * y / x;

console.log("divide: x * y / x " + divide);





// ****************************************************TASK 3****************************************************



const age = 38;
const minDrivingAge = 16;

const isDriveAge = (age > minDrivingAge);

console.log('Am I old enough to drive? ' + isDriveAge)



// ****************************************************HOMEWORK 1 ****************************************************


function addNumbers (x,y) {
    return x + y
} 
function subtractNumbers (x,y) {
    return x - y
} 
const calculator = {
    add: addNumbers,
    subtract: subtractNumbers,
    multiply: function multiplyNumbers(x,y) {return x * y},
    divide: (x,y) => x / y,
};



console.log(calculator.add(5,3))
console.log(calculator.subtract(8,5))
console.log(calculator.multiply(5,5))
console.log(calculator.divide(25,3))


// ****************************************************HOMEWORK 2 ****************************************************

const Remi = {
    name: 'Remi',
    age: '10',
    
};

const Zayn = {
    name: 'Zayn',
    age: '5',
   
};


function whoIsOlder(personA, personB) {
    const isAGreaterThenB = personA.age > personB.age;
    const ageDifference = personA.age - personB.age;
    const aIsOlder = `${personA.name} is ${ageDifference} years older then ${personB.name}`;
    const bIsOlder = `${personA.name} is ${personA.age - personB.age} years older then ${personB.name}`;

    return isAGreaterThenB ? aIsOlder : bIsOlder;  
}

console.log(whoIsOlder(Remi, Zayn));


