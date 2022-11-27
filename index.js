import readline from "readline"; 
import { displayOptions, showNames, calculateRandomNumber, getGirls, countBoysAndGirls, getAges, getTheYoungest, getGirlsAverageAge, addScore } from "./function.js";
import { requirements, availableFemaleNames, availableMaleNames, availableGenders } from "./settings.js";



const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function isInt (str) {
    const number = Number.parseInt(str);
    return !Number.isNaN(number);
  }

function chooseOptionFromConsole () {
  const promise = new Promise ((resolve, reject) => {
    rl.question ('Please, choose an option: '), num => {
      rl.pause();
        if (isInt(num)) {
          num = Number.parseInt(num);
          resolve(num);
          } else {
            reject ('Your choice has to be a number');
          }
        }
    })
  return promise
}

async function playGame() {
    let userOption;
    do {
      try {
        displayOptions (requirements)
        userOption = await chooseOptionFromConsole();
      } catch (error) {
        console.log(error);
        process.exit(0);
      }
      switch (userOption) {
        case 1:
          console.table (students)
        case 2:
          console.log (students.length)
        case 3:
          showNames (students)
        case 4:
          students.pop()
          console.log (students)
        case 5: 
          const randomIndex = calculateRandomNumber (0, students.length -1)
          students.splice (randomIndex, 1)
          console.log (students)
        case 6:
          getGirls (students)
        case 7:
          console.log (countBoysAndGirls (students))
        case 8:
          let areGirls = students.every (item => item.gender === 'female')
          console.log (areGirls)
        case 9:
          getAges (students)
        case 10:
        case 11:
          console.log (getTheYoungest (students))
        case 12:
          let average = students.reduce((sum, item) => sum + item.age, 0)/ students.length
          console.log(average)
        case 13:
          console.log (getGirlsAverageAge (students))
        case 14:
          console.log (addScore (students))
        default:
          students.sort (function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          console.log (students)
      }
    } while (userOption > 0 && userOption <= 15); 
  }

playGame();
