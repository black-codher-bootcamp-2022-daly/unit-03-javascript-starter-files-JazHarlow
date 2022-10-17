// const personA= {
//     name: "Jaz",
//     likes: "Gyozu",
//     age: 38
// }

// const personB = {
//     name: "Leon",
//     likes: "Chicken",
//     age: 25
// }

// const personC = {
//     name: "Remi",
//     likes: "Pizza",
//     age: 12
// }

// const canLeonDrive = personB.age >= 18 || personB.name === "Leon"

// function canDrive(person) {

//     if (person.name !== "Leon" && person.name !== "Jaz") {
//         console.log("Hey you are not Leon or Jaz", person.name)
//     } else if (person.name === "Leon") {
//         console.log("Hi Leon")
//     }   else {
//             console.log("Hi Jaz")
//         }

//         console.log('Can A drive?', candDrive(personA));

// console.log(person.name === 'Peter' || person.age === 34);



// ****************************************************TASK 2 -****************************************************

function getGrade(total) {
  if (total > 90) {
    console.log("A+");
  } else if (total > 80 && total <= 90) {
    console.log("A");
  } else if (total > 70 && total <= 80) {
    console.log("B");
  } else if (total > 60 && total <= 70) {
    console.log("C");
  } else if (total > 50 && total <= 60) {
    console.log("D");
  } else if (total > 40 && total <= 50) {
    console.log("E");
  } else if (total > 30 && total <= 40) {
    console.log("F");
  }
  console.log("you fail!");
}
getGrade(60);

// ****************************************************TASK 2 -****************************************************

function isDrivingAge(age) {
    return age >= 18 ? 'you can drive' : 'you cant drive'
}

function canIdrive(age) {
    if (age >= 18) {
        return 'you can drive'
    } else {
        return 'you cant drive'
    }
}

console.log(isDrivingAge(12))

// ****************************************************TASK 2 -****************************************************

function getGrade(total) {
    switch (true) {
        case total > 90:
            console.log("A+");
            break;

        case total >= 80: 
            console.log("A");
            break;

        case total >= 70:
            console.log("B");
            break;

        case total >= 60:
            console.log("C");
            break;

        case total >= 50:
            console.log("D");
            break;

        case total >= 40:
            console.log("E");
            break;

        case total >= 30:
            console.log("F");
            break;

        default:
            console.log("you fail"); 
            break;
        }  

    }

getGrade(70);

function getAnimalSound(animal) {
switch (animal) {
    case 'dog':
        return 'woof woof';
       
    case 'cat':
        return 'miao miao';

    default:
        return 'no sound'
  }
}
console.log(getAnimalSound('dog'))